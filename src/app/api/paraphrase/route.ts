import { estimateCostUsd, isFreeProvider } from "@/config/pricing";
import { CACHE_TTL_SECONDS, MAX_BODY_BYTES } from "@/config/protection";
import { ProviderBusyError, getProviderChain, type ProviderId } from "@/lib/ai";
import { isOverBudget, recordSpend, recordStats } from "@/lib/budget";
import { paraphraseCacheKey } from "@/lib/cache-key";
import { getClientIp } from "@/lib/ip";
import { buildSystemPrompt, buildUserMessage, computeMaxTokens } from "@/lib/prompt";
import { getStore, type Store } from "@/lib/store";
import { encodeControl } from "@/lib/stream-protocol";
import { verifyTurnstile } from "@/lib/turnstile";
import { validateRequestBody } from "@/lib/validate";

const MESSAGES = {
  generic: "Something went wrong. Please try again in a moment.",
  invalid: "Invalid request.",
  tooLarge: "Your text is too long.",
  rateLimited: "You've sent a lot of requests in a short time. Please wait a few minutes and try again.",
  botCheck: "We couldn't verify your browser. Please refresh the page and try again.",
  highDemand: "We're experiencing high demand, please try again later.",
  refusal: "This text can't be paraphrased. Please try different text.",
  truncated: "The rewrite was cut short. Try a shorter text.",
} as const;

const STREAM_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

function jsonError(message: string, status: number, headers?: Record<string, string>) {
  return Response.json({ error: message }, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

/** Every check below runs before the AI model is called, so a rejected request costs nothing. */
export async function POST(request: Request) {
  // 1. Size and shape of the input.
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) return jsonError(MESSAGES.tooLarge, 413);

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return jsonError(MESSAGES.tooLarge, 413);
    body = JSON.parse(raw);
  } catch {
    return jsonError(MESSAGES.invalid, 400);
  }

  const parsed = validateRequestBody(body);
  if (!parsed.ok) return jsonError(parsed.error, 400);
  const { text, mode, language, turnstileToken } = parsed.value;

  const store = getStore();
  if (!store) {
    console.error("[paraphrase] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are not set; refusing to call the AI model.");
    return jsonError(MESSAGES.generic, 503);
  }

  let providers = getProviderChain();
  if (providers.length === 0) {
    console.error("[paraphrase] No AI provider configured: set AI_PROVIDER and its API key (ANTHROPIC_API_KEY / GEMINI_API_KEY).");
    return jsonError(MESSAGES.generic, 503);
  }

  const ip = getClientIp(request);
  const cacheKey = paraphraseCacheKey(text, mode.id, language.id);

  try {
    // 2. Per-visitor rate limit (sliding window).
    const limit = await store.rateLimit(`ip:${ip ?? "unknown"}`);
    if (!limit.success) {
      const retryAfter = Math.max(1, Math.ceil((limit.reset - Date.now()) / 1000));
      void recordStats(store, { rateLimited: 1 }).catch(() => {});
      return jsonError(MESSAGES.rateLimited, 429, { "Retry-After": String(retryAfter) });
    }

    // 3. Invisible bot check.
    const turnstile = await verifyTurnstile(turnstileToken, ip);
    if (!turnstile.ok) {
      if (turnstile.reason === "not-configured") {
        console.error("[paraphrase] TURNSTILE_SECRET_KEY is not set; refusing to call the AI model.");
        return jsonError(MESSAGES.generic, 503);
      }
      void recordStats(store, { botBlocked: 1 }).catch(() => {});
      return jsonError(MESSAGES.botCheck, turnstile.reason === "unavailable" ? 503 : 403);
    }

    // 4. Cached result: free and instant.
    const cached = await store.getString(cacheKey);
    if (cached !== null) {
      void recordStats(store, { requests: 1, cacheHits: 1 }).catch(() => {});
      return new Response(cached, { headers: { ...STREAM_HEADERS, "X-Cache": "HIT" } });
    }

    // 5. Daily budget switch: once today's spend reaches DAILY_BUDGET_USD,
    // only free providers (e.g. Gemini's free tier) may still be used.
    if (await isOverBudget(store)) {
      providers = providers.filter((p) => isFreeProvider(p.id));
      if (providers.length === 0) {
        void recordStats(store, { budgetBlocked: 1 }).catch(() => {});
        return jsonError(MESSAGES.highDemand, 503, { "Retry-After": "600" });
      }
    }
  } catch (err) {
    console.error("[paraphrase] protection check failed:", err);
    return jsonError(MESSAGES.generic, 503);
  }

  // 6. Call the AI model and stream the answer.
  const encoder = new TextEncoder();
  const call = {
    system: buildSystemPrompt(mode, language),
    user: buildUserMessage(text),
    maxTokens: computeMaxTokens(text, mode),
    signal: request.signal,
  };

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let output = "";
      let completed = false;
      const usage: Usage[] = [];

      const send = (chunk: string) => {
        try {
          controller.enqueue(encoder.encode(chunk));
        } catch {
          // The browser went away; nothing to send to.
        }
      };

      try {
        for (let i = 0; i < providers.length; i++) {
          const provider = providers[i];
          const isLast = i === providers.length - 1;
          const used: Usage = { provider: provider.id, inputTokens: 0, outputTokens: 0 };
          usage.push(used);
          try {
            for await (const event of provider.stream(call)) {
              if (event.type === "text") {
                output += event.text;
                send(event.text);
              } else {
                used.inputTokens = event.inputTokens;
                used.outputTokens = event.outputTokens;
                if (event.stopReason === "refusal") send(encodeControl({ error: MESSAGES.refusal }));
                else if (event.stopReason === "max_tokens") send(encodeControl({ notice: MESSAGES.truncated }));
                else if (output.trim()) completed = true;
              }
            }
            break;
          } catch (err) {
            if (request.signal.aborted) break;
            // Estimate tokens for a stream that died part-way, so spend is still counted.
            if (used.outputTokens === 0 && output) used.outputTokens = Math.ceil(output.length / 3);
            if (output || isLast) {
              // Text already reached the user (can't switch models mid-answer), or nothing left to try.
              console.error(`[paraphrase] ${provider.label} request failed:`, err);
              send(encodeControl({ error: err instanceof ProviderBusyError && !output ? MESSAGES.highDemand : MESSAGES.generic }));
              break;
            }
            console.warn(`[paraphrase] ${provider.label} failed before answering; trying ${providers[i + 1].label}.`, err);
          }
        }
      } finally {
        // Record spend and cache the result before closing the stream: on
        // serverless hosts the function may be frozen as soon as the response ends.
        await finishBookkeeping(store, { cacheKey, output: completed ? output : null, usage });
        try {
          controller.close();
        } catch {
          // already closed
        }
      }
    },
  });

  return new Response(stream, { headers: { ...STREAM_HEADERS, "X-Cache": "MISS" } });
}

interface Usage {
  provider: ProviderId;
  inputTokens: number;
  outputTokens: number;
}

async function finishBookkeeping(
  store: Store,
  data: { cacheKey: string; output: string | null; usage: Usage[] },
) {
  try {
    const cost = data.usage.reduce((sum, u) => sum + estimateCostUsd(u.inputTokens, u.outputTokens, u.provider), 0);
    const counters: Record<string, number> = { requests: 1 };
    for (const u of data.usage) {
      counters[`calls_${u.provider}`] = (counters[`calls_${u.provider}`] ?? 0) + 1;
      counters[`inputTokens_${u.provider}`] = (counters[`inputTokens_${u.provider}`] ?? 0) + u.inputTokens;
      counters[`outputTokens_${u.provider}`] = (counters[`outputTokens_${u.provider}`] ?? 0) + u.outputTokens;
    }
    await Promise.all([
      recordSpend(store, cost),
      recordStats(store, counters),
      data.output !== null ? store.setString(data.cacheKey, data.output, CACHE_TTL_SECONDS) : Promise.resolve(),
    ]);
  } catch (err) {
    console.error("[paraphrase] bookkeeping failed:", err);
  }
}
