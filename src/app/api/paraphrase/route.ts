import Anthropic from "@anthropic-ai/sdk";
import { MODEL } from "@/config/limits";
import { estimateCostUsd } from "@/config/pricing";
import { CACHE_TTL_SECONDS, MAX_BODY_BYTES } from "@/config/protection";
import { getAnthropic } from "@/lib/anthropic";
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

/** Every check below runs before Claude is called, so a rejected request costs nothing. */
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
    console.error("[paraphrase] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are not set; refusing to call Claude.");
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
        console.error("[paraphrase] TURNSTILE_SECRET_KEY is not set; refusing to call Claude.");
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

    // 5. Daily budget switch.
    if (await isOverBudget(store)) {
      void recordStats(store, { budgetBlocked: 1 }).catch(() => {});
      return jsonError(MESSAGES.highDemand, 503, { "Retry-After": "600" });
    }
  } catch (err) {
    console.error("[paraphrase] protection check failed:", err);
    return jsonError(MESSAGES.generic, 503);
  }

  let anthropic: Anthropic;
  try {
    anthropic = getAnthropic();
  } catch (err) {
    console.error("[paraphrase] configuration error:", err);
    return jsonError(MESSAGES.generic, 503);
  }

  // 6. Call Claude and stream the answer.
  const encoder = new TextEncoder();
  const params: Anthropic.MessageStreamParams = {
    model: MODEL,
    max_tokens: computeMaxTokens(text, mode),
    // Paraphrasing needs no reasoning: skip thinking for speed and cost.
    thinking: { type: "disabled" },
    output_config: { effort: "low" },
    system: buildSystemPrompt(mode, language),
    messages: [{ role: "user", content: buildUserMessage(text) }],
  };

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let output = "";
      let inputTokens = 0;
      let outputTokens = 0;
      let completed = false;

      const send = (chunk: string) => {
        try {
          controller.enqueue(encoder.encode(chunk));
        } catch {
          // The browser went away; nothing to send to.
        }
      };

      try {
        const claudeStream = anthropic.messages.stream(params, { signal: request.signal });

        for await (const event of claudeStream) {
          if (event.type === "message_start") {
            inputTokens = event.message.usage.input_tokens;
          } else if (event.type === "message_delta") {
            outputTokens = event.usage.output_tokens;
          } else if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            output += event.delta.text;
            send(event.delta.text);
          }
        }

        const final = await claudeStream.finalMessage();
        inputTokens = final.usage.input_tokens;
        outputTokens = final.usage.output_tokens;

        if (final.stop_reason === "refusal") {
          send(encodeControl({ error: MESSAGES.refusal }));
        } else if (final.stop_reason === "max_tokens") {
          send(encodeControl({ notice: MESSAGES.truncated }));
        } else if (output.trim()) {
          completed = true;
        }
      } catch (err) {
        if (!request.signal.aborted) {
          console.error("[paraphrase] Claude request failed:", err);
          send(encodeControl({ error: MESSAGES.generic }));
        }
      } finally {
        // Record spend and cache the result before closing the stream: on
        // serverless hosts the function may be frozen as soon as the response ends.
        if (outputTokens === 0 && output) outputTokens = Math.ceil(output.length / 3);
        await finishBookkeeping(store, {
          cacheKey,
          output: completed ? output : null,
          inputTokens,
          outputTokens,
        });
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

async function finishBookkeeping(
  store: Store,
  data: { cacheKey: string; output: string | null; inputTokens: number; outputTokens: number },
) {
  try {
    const cost = estimateCostUsd(data.inputTokens, data.outputTokens);
    await Promise.all([
      recordSpend(store, cost),
      recordStats(store, {
        requests: 1,
        claudeCalls: 1,
        inputTokens: data.inputTokens,
        outputTokens: data.outputTokens,
      }),
      data.output !== null ? store.setString(data.cacheKey, data.output, CACHE_TTL_SECONDS) : Promise.resolve(),
    ]);
  } catch (err) {
    console.error("[paraphrase] bookkeeping failed:", err);
  }
}
