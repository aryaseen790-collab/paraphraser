import Link from "next/link";
import { LOCALES, LOCALE_INFO, type Locale, type PageKey } from "@/i18n/locales";
import type { ChromeStrings, LocalePageContent } from "@/i18n/types";
import type { ImageKey } from "@/config/images";
import { Faq } from "./Faq";
import { Illustration } from "./Illustration";
import { Section } from "./Section";

/** Renders a translated page's sections, FAQ, closing call to action and language links. */
export function LocaleContent({
  content,
  chrome,
  locale,
  page,
}: {
  content: LocalePageContent;
  chrome: ChromeStrings;
  locale: Locale;
  page: PageKey;
}) {
  const otherPage: PageKey = page === "home" ? "paraphraser" : "home";
  // Illustrations by section position (same artwork in every language, alt text localized).
  const media: Record<number, ImageKey> =
    page === "home" ? { 0: "robotToHuman", 3: "useCases", 4: "detectors" } : { 0: "paraphraseConcept", 3: "writingDesk" };
  return (
    <>
      {content.sections.map((s, i) => (
        <Section
          key={s.title}
          id={s.id}
          number={`${String(i + 1).padStart(2, "0")} · ${s.label}`}
          tint={i % 2 === 1}
          media={media[i] ? <Illustration name={media[i]} locale={locale} /> : undefined}
          mediaLeft={i % 2 === 1}
          title={s.title}
          lede={s.lede ? <p>{s.lede}</p> : undefined}
        >
          {s.quote && (
            <blockquote className="mb-8 max-w-3xl border-l-[6px] border-highlight pl-6 font-display text-2xl leading-snug font-bold">
              {s.quote}
            </blockquote>
          )}
          {s.paragraphs && (
            <div className={`grid gap-6 text-lg leading-relaxed text-muted ${s.paragraphs.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          )}
          {s.cards && (
            <ul className={`grid gap-5 sm:grid-cols-2 ${s.cards.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"} ${s.paragraphs ? "mt-8" : ""}`}>
              {s.cards.map((c, j) => (
                <li key={c.title} className="rounded-3xl border border-border bg-surface p-6">
                  <span className={`tile tile-${j % 5}`}>{String(j + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{c.text}</p>
                </li>
              ))}
            </ul>
          )}
          {s.examples && (
            <div className={`grid gap-5 ${s.examples.length >= 3 ? "lg:grid-cols-3" : "md:grid-cols-2"} ${s.paragraphs || s.cards ? "mt-8" : ""}`}>
              {s.examples.map((e) => (
                <article key={e.before.slice(0, 30)} className="flex flex-col rounded-3xl border border-border bg-surface p-6">
                  {e.label && <h3 className="mb-3 font-display text-xl font-bold">{e.label}</h3>}
                  <p className="text-[0.95rem] leading-relaxed text-muted">
                    <span className="mb-1 block font-mono text-[10px] tracking-[0.16em] uppercase">{chrome.before}</span>
                    {e.before}
                  </p>
                  <p className="mt-4 rounded-2xl bg-surface-muted p-4 text-[0.95rem] leading-relaxed">
                    <span className="mb-1 block font-mono text-[10px] tracking-[0.16em] text-accent-text uppercase">{chrome.after}</span>
                    {e.after}
                  </p>
                </article>
              ))}
            </div>
          )}
        </Section>
      ))}

      <Section
        tint={content.sections.length % 2 === 1}
        number={`${String(content.sections.length + 1).padStart(2, "0")} · ${content.faqLabel}`}
        title={content.faqTitle}
      >
        <Faq items={content.faq} />
      </Section>

      <section className="mx-auto mt-6 max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[32px] hero-band px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <h2 className="relative font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {content.cta.title[0]}
            <span className="swash">{content.cta.title[1]}</span>
            {content.cta.title[2]}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">{content.cta.text}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="#tool"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#0e1330] shadow-lg transition hover:bg-highlight"
            >
              {content.cta.button} ↑
            </Link>
            <Link
              href={LOCALE_INFO[locale].paths[otherPage]}
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              {otherPage === "home" ? chrome.navHumanizer : chrome.navParaphraser} →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <h2 className="mb-3 text-sm font-semibold">{chrome.otherLanguages}</h2>
        <ul className="flex flex-wrap gap-2">
          {LOCALES.filter((l) => l !== locale).map((l) => (
            <li key={l}>
              <a
                href={LOCALE_INFO[l].paths[page]}
                hrefLang={LOCALE_INFO[l].htmlLang}
                lang={LOCALE_INFO[l].htmlLang}
                className="inline-block rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted transition hover:border-foreground hover:text-foreground"
              >
                {LOCALE_INFO[l].nativeName}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
