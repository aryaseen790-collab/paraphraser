import { getLanguage, type Language } from "@/config/languages";
import { getMode, type Mode } from "@/config/modes";
import { MAX_CHARS, MAX_WORDS } from "@/config/limits";
import { countWords } from "./text";

export interface ParaphraseInput {
  text: string;
  mode: Mode;
  language: Language;
  turnstileToken: string;
}

export type ValidationResult =
  | { ok: true; value: ParaphraseInput }
  | { ok: false; error: string };

export function validateRequestBody(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request." };
  const { text, mode, language, turnstileToken } = body as Record<string, unknown>;

  if (typeof text !== "string" || text.trim().length === 0) {
    return { ok: false, error: "Please enter some text to paraphrase." };
  }
  const trimmed = text.trim();
  if (countWords(trimmed) > MAX_WORDS) {
    return { ok: false, error: `Please keep your text under ${MAX_WORDS.toLocaleString("en-US")} words.` };
  }
  if (trimmed.length > MAX_CHARS) {
    return { ok: false, error: `Please keep your text under ${MAX_CHARS.toLocaleString("en-US")} characters.` };
  }

  const modeObj = typeof mode === "string" ? getMode(mode) : undefined;
  if (!modeObj) return { ok: false, error: "Unknown style." };

  const languageObj = typeof language === "string" ? getLanguage(language) : undefined;
  if (!languageObj) return { ok: false, error: "Unknown language." };

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
