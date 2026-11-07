import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { LOCALE_INFO, localeAlternates, type Locale, type PageKey } from "@/i18n/locales";
import { LocaleContent } from "./LocaleContent";
import { pageOpenGraph } from "./SiteShell";
import { ToolPage } from "./ToolPage";

/** Title, description, canonical URL and hreflang links for a translated page. */
export function localePageMetadata(locale: Locale, page: PageKey): Metadata {
  const content = getDictionary(locale)[page];
  return {
    title: content.title,
    description: content.description,
    alternates: localeAlternates(page, locale),
    openGraph: pageOpenGraph(locale, { title: content.title, description: content.description, url: LOCALE_INFO[locale].paths[page] }),
    twitter: { title: content.title, description: content.description },
  };
}

/** A translated humanizer home page or paraphraser page. */
export function LocalePage({ locale, page }: { locale: Locale; page: PageKey }) {
  const dict = getDictionary(locale);
  const content = dict[page];
  return (
    <ToolPage
      name={content.title}
      eyebrow={content.eyebrow}
      h1={
        <>
          {content.h1[0]}
          <span className="swash">{content.h1[1]}</span>
          {content.h1[2]}
        </>
      }
      intro={content.intro}
      mode={page === "home" ? "humanize" : "standard"}
      t={dict.tool}
      chrome={dict.chrome}
      inLanguage={LOCALE_INFO[locale].htmlLang}
      path={LOCALE_INFO[locale].paths[page]}
      faqs={content.faq}
    >
      <LocaleContent content={content} chrome={dict.chrome} locale={locale} page={page} />
    </ToolPage>
  );
}
