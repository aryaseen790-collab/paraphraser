import { getLanguage, type Language } from "@/config/languages";
import { getMode, type Mode } from "@/config/modes";
import { MAX_CHARS, MAX_WORDS } from "@/config/limits";
import type { ErrorCode } from "@/i18n/types";
import { countWords } from "./text";

export interface ParaphraseInput {
  text: string;
  mode: Mode;
  language: Language;
  turnstileToken: string;
}

export type ValidationResult =
  | { ok: true; value: ParaphraseInput }
  | { ok: false; error: string; code: ErrorCode };

export function validateRequestBody(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request.", code: "invalid" };
  const { text, mode, language, turnstileToken } = body as Record<string, unknown>;

  if (typeof text !== "string" || text.trim().length === 0) {
    return { ok: false, error: "Please enter some text to paraphrase.", code: "empty" };
  }
  const trimmed = text.trim();
  if (countWords(trimmed) > MAX_WORDS) {
    return { ok: false, error: `Please keep your text under ${MAX_WORDS.toLocaleString("en-US")} words.`, code: "tooManyWords" };
  }
  if (trimmed.length > MAX_CHARS) {
    return { ok: false, error: `Please keep your text under ${MAX_CHARS.toLocaleString("en-US")} characters.`, code: "tooManyChars" };
  }

  const modeObj = typeof mode === "string" ? getMode(mode) : undefined;
  if (!modeObj) return { ok: false, error: "Unknown style.", code: "unknownMode" };

  const languageObj = typeof language === "string" ? getLanguage(language) : undefined;
  if (!languageObj) return { ok: false, error: "Unknown language.", code: "unknownLanguage" };

  return {
    ok: true,
    value: {
      text: trimmed,
      mode: modeObj,
      language: languageObj,
      turnstileToken: typeof turnstileToken === "string" ? turnstileToken : "",
    },
  };
}
