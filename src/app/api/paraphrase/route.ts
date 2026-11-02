import Anthropic from "@anthropic-ai/sdk";
import { MODEL } from "@/config/limits";
import { getAnthropic } from "@/lib/anthropic";
import { buildSystemPrompt, buildUserMessage, computeMaxTokens } from "@/lib/prompt";
import { encodeControl } from "@/lib/stream-protocol";
import { validateRequestBody } from "@/lib/validate";

const GENERIC_ERROR = "Something went wrong. Please try again in a moment.";

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  const parsed = validateRequestBody(body);
  if (!parsed.ok) return jsonError(parsed.error, 400);
  const { text, mode, language } = parsed.value;

  let anthropic: Anthropic;
  try {
    anthropic = getAnthropic();
  } catch (err) {
    console.error("[paraphrase] configuration error:", err);
    return jsonError(GENERIC_ERROR, 500);
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const claudeStream = anthropic.messages.stream(
          {
            model: MODEL,
            max_tokens: computeMaxTokens(text, mode),
            // Paraphrasing needs no reasoning: skip thinking for speed and cost.
            thinking: { type: "disabled" },
            output_config: { effort: "low" },
            system: buildSystemPrompt(mode, language),
            messages: [{ role: "user", content: buildUserMessage(text) }],
          },
          { signal: request.signal },
        );

        for await (const event of claudeStream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }

        const final = await claudeStream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(
            encoder.encode(encodeControl({ error: "This text can't be paraphrased. Please try different text." })),
          );
        } else if (final.stop_reason === "max_tokens") {
          controller.enqueue(
            encoder.encode(encodeControl({ notice: "The rewrite was cut short. Try a shorter text." })),
          );
        }
      } catch (err) {
        if (!request.signal.aborted) {
          console.error("[paraphrase] Claude request failed:", err);
          controller.enqueue(encoder.encode(encodeControl({ error: GENERIC_ERROR })));
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
