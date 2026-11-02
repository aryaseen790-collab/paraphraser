import Anthropic from "@anthropic-ai/sdk";

let client: Anthropic | null = null;

/**
 * Server-only Claude client. The key is read from ANTHROPIC_API_KEY on the server
 * and is never sent to the browser. Only import this file from route handlers.
 */
export function getAnthropic(): Anthropic {
  if (!client) {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error("ANTHROPIC_API_KEY is not set");
    }
    client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
      // Fail fast: users are waiting. One retry covers brief 429/5xx blips.
      timeout: 30_000,
      maxRetries: 1,
    });
  }
  return client;
}
