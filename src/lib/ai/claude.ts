import Anthropic from "@anthropic-ai/sdk";
import { CLAUDE_MODEL } from "@/config/ai";
import { type AiProvider, type ParaphraseCall, ProviderBusyError, type StreamEvent, isBusyStatus } from "./types";

let client: Anthropic | null = null;

function getClient(): Anthropic {
  if (!client) {
    client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
      // Fail fast: users are waiting. One retry covers brief 429/5xx blips.
      timeout: 30_000,
      maxRetries: 1,
    });
  }
  return client;
}

export const claudeProvider: AiProvider = {
  id: "claude",
  label: "Anthropic Claude",

  isConfigured: () => Boolean(process.env.ANTHROPIC_API_KEY),

  async *stream(call: ParaphraseCall): AsyncGenerator<StreamEvent> {
    let inputTokens = 0;
    let outputTokens = 0;
    try {
      const stream = getClient().messages.stream(
        {
          model: CLAUDE_MODEL,
          max_tokens: call.maxTokens,
          // Paraphrasing needs no reasoning: skip thinking for speed and cost.
          thinking: { type: "disabled" },
          output_config: { effort: "low" },
          system: call.system,
          messages: [{ role: "user", content: call.user }],
        },
        { signal: call.signal },
      );

      for await (const event of stream) {
        if (event.type === "message_start") {
          inputTokens = event.message.usage.input_tokens;
        } else if (event.type === "message_delta") {
          outputTokens = event.usage.output_tokens;
        } else if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
          yield { type: "text", text: event.delta.text };
        }
      }

      const final = await stream.finalMessage();
      yield {
        type: "done",
        stopReason:
          final.stop_reason === "refusal" ? "refusal" : final.stop_reason === "max_tokens" ? "max_tokens" : "end",
        inputTokens: final.usage.input_tokens ?? inputTokens,
        outputTokens: final.usage.output_tokens ?? outputTokens,
      };
    } catch (err) {
      if (err instanceof Anthropic.APIError && isBusyStatus(err.status)) {
        throw new ProviderBusyError("claude", err.status ?? 0, { cause: err });
      }
      throw err;
    }
  },
};
