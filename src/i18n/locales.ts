import type { Metadata } from "next";

/** Languages with their own fully translated site section. */
export const LOCALES = ["en", "es", "pt", "fr", "id", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export type PageKey = "home" | "paraphraser";

interface LocaleInfo {
  /** BCP 47 tag used for <html lang> and hreflang. */
  htmlLang: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** Name of the language in that language (for the language switcher). */
  nativeName: string;
  /** Localized URL paths, chosen to match each language's main search terms. */
  paths: Record<PageKey, string>;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: { htmlLang: "en", ogLocale: "en_US", nativeName: "English", paths: { home: "/", paraphraser: "/paraphrasing-tool" } },
  es: { htmlLang: "es", ogLocale: "es_ES", nativeName: "Español", paths: { home: "/es", paraphraser: "/es/parafraseador" } },
  pt: { htmlLang: "pt", ogLocale: "pt_BR", nativeName: "Português", paths: { home: "/pt", paraphraser: "/pt/reescrever-texto" } },
  fr: { htmlLang: "fr", ogLocale: "fr_FR", nativeName: "Français", paths: { home: "/fr", paraphraser: "/fr/reformuler-un-texte" } },
  id: { htmlLang: "id", ogLocale: "id_ID", nativeName: "Bahasa Indonesia", paths: { home: "/id", paraphraser: "/id/parafrase-online" } },
  de: { htmlLang: "de", ogLocale: "de_DE", nativeName: "Deutsch", paths: { home: "/de", paraphraser: "/de/text-umschreiben" } },
};

/**
 * Canonical URL plus hreflang links to every language version of the same page,
 * with English as x-default. Paths are resolved against metadataBase.
 */
export function localeAlternates(page: PageKey, locale: Locale): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[LOCALE_INFO[l].htmlLang] = LOCALE_INFO[l].paths[page];
  languages["x-default"] = LOCALE_INFO[DEFAULT_LOCALE].paths[page];
  return { canonical: LOCALE_INFO[locale].paths[page], languages };
}
