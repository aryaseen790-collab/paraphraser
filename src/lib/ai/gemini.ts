import { ApiError, FinishReason, GoogleGenAI } from "@google/genai";
import { getGeminiModel } from "@/config/ai";
import { type AiProvider, type ParaphraseCall, ProviderBusyError, type StopReason, type StreamEvent, isBusyStatus } from "./types";

let client: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
  if (!client) client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  return client;
}

const REFUSAL_REASONS = new Set<string>([
  FinishReason.SAFETY,
  FinishReason.RECITATION,
  FinishReason.BLOCKLIST,
  FinishReason.PROHIBITED_CONTENT,
  FinishReason.SPII,
]);

function thinkingConfig() {
  // Optional: GEMINI_THINKING_BUDGET=0 turns thinking off on models that allow it.
  const raw = process.env.GEMINI_THINKING_BUDGET;
  if (raw === undefined || raw === "") return undefined;
  const budget = Number(raw);
  return Number.isFinite(budget) ? { thinkingBudget: budget } : undefined;
}

export const geminiProvider: AiProvider = {
  id: "gemini",
  label: "Google Gemini",

  isConfigured: () => Boolean(process.env.GEMINI_API_KEY),

  async *stream(call: ParaphraseCall): AsyncGenerator<StreamEvent> {
    let inputTokens = 0;
    let outputTokens = 0;
    let finishReason: string | undefined;
    let blocked = false;

    try {
      const stream = await getClient().models.generateContentStream({
        model: getGeminiModel(),
        contents: [{ role: "user", parts: [{ text: call.user }] }],
        config: {
          systemInstruction: call.system,
          maxOutputTokens: call.maxTokens,
          abortSignal: call.signal,
          thinkingConfig: thinkingConfig(),
        },
      });

      for await (const chunk of stream) {
        if (chunk.promptFeedback?.blockReason) blocked = true;
        const candidate = chunk.candidates?.[0];
        const text = candidate?.content?.parts
          ?.filter((p) => typeof p.text === "string" && !p.thought)
          .map((p) => p.text)
          .join("");
        if (text) yield { type: "text", text };
        if (candidate?.finishReason) finishReason = candidate.finishReason;
        const usage = chunk.usageMetadata;
        if (usage) {
          inputTokens = usage.promptTokenCount ?? inputTokens;
          outputTokens = (usage.candidatesTokenCount ?? 0) + (usage.thoughtsTokenCount ?? 0) || outputTokens;
        }
      }
    } catch (err) {
      if (err instanceof ApiError && isBusyStatus(err.status)) {
        throw new ProviderBusyError("gemini", err.status, { cause: err });
      }
      throw err;
    }

    let stopReason: StopReason = "end";
    if (blocked || (finishReason && REFUSAL_REASONS.has(finishReason))) stopReason = "refusal";
    else if (finishReason === FinishReason.MAX_TOKENS) stopReason = "max_tokens";
    yield { type: "done", stopReason, inputTokens, outputTokens };
  },
};
