import type { ProviderId } from "@/lib/ai/types";

/**
 * Which AI model(s) the site uses. Set AI_PROVIDER in your environment:
 *   AI_PROVIDER=claude          Claude Haiku only (default)
 *   AI_PROVIDER=gemini          Google Gemini only (free tier possible)
 *   AI_PROVIDER=gemini,claude   Gemini first; if it fails or its free quota
 *                               runs out, fall back to Claude automatically
 */

/** Claude model used for every paraphrase. Haiku is the cheapest capable model. */
export const CLAUDE_MODEL = "claude-haiku-5-5";

/**
 * Gemini model. The "-latest" alias follows Google's newest Flash-Lite model.
 * Override with GEMINI_MODEL (e.g. a fixed version) if you prefer.
 */
export const DEFAULT_GEMINI_MODEL = "gemini-flash-lite-latest";

export function getGeminiModel(): string {
  return process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL;
}

const VALID: ProviderId[] = ["claude", "gemini"];

export function getProviderOrder(raw = process.env.AI_PROVIDER): ProviderId[] {
  const ids = (raw || "claude")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter((s): s is ProviderId => (VALID as string[]).includes(s));
  const unique = [...new Set(ids)];
  return unique.length ? unique : ["claude"];
}

/** True if any configured provider may be Gemini (used by the privacy page). */
export function usesGemini(): boolean {
  return getProviderOrder().includes("gemini");
}

export function usesClaude(): boolean {
  return getProviderOrder().includes("claude");
}
