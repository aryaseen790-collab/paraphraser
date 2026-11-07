import type { Locale } from "../locales";
import type { Dictionary } from "../types";
import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { id } from "./id";
import { pt } from "./pt";

export type TranslatedLocale = Exclude<Locale, "en">;

export const DICTIONARIES: Record<TranslatedLocale, Dictionary> = { es, pt, fr, id, de };

export function getDictionary(locale: Locale): Dictionary {
  if (locale === "en") throw new Error("English pages use their own components");
  return DICTIONARIES[locale];
}
