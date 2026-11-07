import type { ReactNode } from "react";
import type { ModeId } from "@/config/modes";
import { siteConfig } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/content/faq";
import { EN_CHROME } from "@/i18n/en";
import type { ChromeStrings, ToolStrings } from "@/i18n/types";
import { AdSlot } from "./AdSlot";
import { Illustration } from "./Illustration";
import { InfoSections } from "./InfoSections";
import { MoreTools } from "./MoreTools";
import { Paraphraser } from "./Paraphraser";

interface ToolPageProps {
  h1: ReactNode;
  /** Plain-text version of the heading for structured data. */
  name: string;
  intro: ReactNode;
  eyebrow?: string;
  native?: { lang: string; text: string };
  mode?: ModeId;
  language?: string;
  slug?: string;
  /** Content under the tool. Defaults to the short how-it-works + FAQ block. */
  children?: ReactNode;
  /** FAQ items for structured data, when the page shows its own FAQ. */
  faqs?: FaqItem[];
  /** Translated tool and page text (English by default). */
  t?: ToolStrings;
  chrome?: ChromeStrings;
  /** Page language for structured data. */
  inLanguage?: string;
  /** Full path of the page, for structured data (defaults to "/" + slug). */
  path?: string;
  /** Show the small illustration beside the headline on wide screens. */
  showHeroArt?: boolean;
}

/** Shared layout for the home page and every SEO landing page. */
export function ToolPage({
  h1,
  name,
  intro,
  eyebrow = "Free paraphrasing tool",
  native,
  mode,
  language,
  slug,
  children,
  faqs,
  t,
  chrome = EN_CHROME,
  inLanguage = "en",
  path,
  showHeroArt = true,
}: ToolPageProps) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: `${name} | ${siteConfig.name}`,
      url: `${siteConfig.url}${path ?? `/${slug ?? ""}`}`,
      inLanguage,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    faqJsonLd(faqs),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Compact hero band; the tool card overlaps its lower edge so it sits above the fold. */}
      <div className="hero-band text-white">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-8 px-4 pt-5 pb-20 sm:pt-8 sm:pb-24">
          <header className="min-w-0 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-highlight" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-3 font-display text-[1.75rem] leading-[1.08] font-extrabold tracking-tight sm:text-[2.6rem] lg:text-[3rem]">
              {h1}
            </h1>
            {native && (
              <p lang={native.lang} dir="auto" className="mt-3 w-fit text-lg text-white/90">
                {native.text}
              </p>
            )}
            {/* Hidden on phones so the tool stays above the fold; still in the page for search engines. */}
            <div className="mt-2.5 hidden max-w-3xl text-[1.05rem] leading-relaxed text-white/80 sm:block">{intro}</div>
          </header>
          {showHeroArt && (
            <div className="hidden w-40 shrink-0 xl:block">
              <Illustration name="heroSpark" priority sizes="160px" className="rounded-[2rem] ring-1 ring-white/20" />
            </div>
          )}
        </div>
      </div>

      <div id="tool" className="relative mx-auto -mt-16 max-w-6xl scroll-mt-20 px-4 sm:-mt-20">
        <div className={siteConfig.adsEnabled ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]" : ""}>
          <div className="min-w-0">
            <Paraphraser defaultMode={mode} defaultLanguage={language} t={t} />
            <AdSlot slot="below-tool" className="mt-6 lg:hidden" label={chrome.adLabel} />
          </div>
          <AdSlot slot="sidebar" className="hidden lg:block lg:mt-24" label={chrome.adLabel} />
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {chrome.facts.map((f, i) => (
            <li key={f} className="flex items-center gap-2">
              <span className={`tile tile-${i % 5} h-6! w-6! rounded-full!`} aria-hidden="true">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {children ?? (
        <>
          <InfoSections />
          <MoreTools current={slug} />
        </>
      )}
    </>
  );
}
