/**
 * Claude Haiku 5.5 prices in US dollars per million tokens (prompts up to 100K tokens).
 * Check https://docs.claude.com/en/docs/about-claude/pricing and edit these if they change.
 * They are used only to estimate spend for the daily budget switch.
 */
export const PRICE_PER_MILLION_INPUT_TOKENS_USD = 0.1;
export const PRICE_PER_MILLION_OUTPUT_TOKENS_USD = 0.5;

export function estimateCostUsd(inputTokens: number, outputTokens: number): number {
  return (
    (inputTokens * PRICE_PER_MILLION_INPUT_TOKENS_USD +
      outputTokens * PRICE_PER_MILLION_OUTPUT_TOKENS_USD) /
    1_000_000
  );
}
