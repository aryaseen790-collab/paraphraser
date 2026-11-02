/** Hard limits. These are enforced on the server; the browser only mirrors them. */

/** Maximum words per request (free tier). */
export const MAX_WORDS = 1000;

/**
 * Maximum characters per request. Stops "one 50,000-character word" tricks and
 * covers languages written without spaces. 1,000 words of English is ~6,000 chars.
 */
export const MAX_CHARS = 12_000;

/** max_tokens is about this multiple of the estimated input tokens... */
export const OUTPUT_TOKEN_MULTIPLIER = 1.5;
/** ...but never below this (short inputs still need room)... */
export const MIN_OUTPUT_TOKENS = 256;
/** ...and never above this, so one request can never run away. */
export const MAX_OUTPUT_TOKENS = 2000;
