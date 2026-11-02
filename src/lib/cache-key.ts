import { createHash } from "node:crypto";

/** SHA-256 of text + mode + language. The raw text is never used as a key. */
export function paraphraseCacheKey(text: string, mode: string, language: string): string {
  const hash = createHash("sha256").update(JSON.stringify([text, mode, language])).digest("hex");
  return `cache:v1:${hash}`;
}
