import type { ProviderId } from "@/lib/ai/types";

/**
 * Prices in US dollars per million tokens, used only to estimate spend for the
 * daily budget switch. Edit them if prices change.
 *
 * - Claude Haiku 5.5 (prompts up to 100K tokens):
 *   https://docs.claude.com/en/docs/about-claude/pricing
 * - Gemini: 0 on the free tier. If you enable billing on your Google AI
 *   project, set GEMINI_INPUT_PRICE_PER_M / GEMINI_OUTPUT_PRICE_PER_M to your
 *   model's paid prices from https://ai.google.dev/gemini-api/docs/pricing
 */
export const PRICES: Record<ProviderId, { inputPerM: number; outputPerM: number }> = {
  claude: { inputPerM: 0.1, outputPerM: 0.5 },
  gemini: {
    inputPerM: Number(process.env.GEMINI_INPUT_PRICE_PER_M) || 0,
    outputPerM: Number(process.env.GEMINI_OUTPUT_PRICE_PER_M) || 0,
  },
};

export function estimateCostUsd(inputTokens: number, outputTokens: number, provider: ProviderId = "claude"): number {
  const p = PRICES[provider];
  return (inputTokens * p.inputPerM + outputTokens * p.outputPerM) / 1_000_000;
}

/** A provider with zero configured prices doesn't count against the daily budget. */
export function isFreeProvider(provider: ProviderId): boolean {
  const p = PRICES[provider];
  return p.inputPerM === 0 && p.outputPerM === 0;
}
