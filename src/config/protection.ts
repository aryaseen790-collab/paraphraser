/** Abuse-protection settings. Normal visitors never notice these. */

/** Requests allowed per visitor (IP address) in the window below. */
export const RATE_LIMIT_REQUESTS = 30;
/** Sliding window length, in Upstash duration format. */
export const RATE_LIMIT_WINDOW = "1 h";

/** How long a paraphrase stays cached (identical text + style + language). */
export const CACHE_TTL_SECONDS = 7 * 24 * 60 * 60;

/** Requests with a bigger body than this are rejected before parsing. */
export const MAX_BODY_BYTES = 64 * 1024;

/** Fallback when DAILY_BUDGET_USD is not set. */
export const DEFAULT_DAILY_BUDGET_USD = 3;

export function getDailyBudgetUsd(): number {
  const value = Number(process.env.DAILY_BUDGET_USD);
  return Number.isFinite(value) && value >= 0 ? value : DEFAULT_DAILY_BUDGET_USD;
}

/**
 * Local development may run without Upstash or Turnstile keys (in-memory
 * stand-ins and no bot check). Production refuses to serve without them so a
 * missing env var can never silently remove the cost guardrails.
 * Set ALLOW_DEV_FALLBACKS=true only to test a production build locally.
 */
export function devFallbacksAllowed(): boolean {
  return process.env.NODE_ENV !== "production" || process.env.ALLOW_DEV_FALLBACKS === "true";
}
