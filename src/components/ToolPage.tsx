import type { ReactNode } from "react";
import type { ModeId } from "@/config/modes";
import { siteConfig } from "@/config/site";
import { faqJsonLd } from "@/content/faq";
import { AdSlot } from "./AdSlot";
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
}

const FACTS = ["No account needed", "Up to 1,000 words at a time", "Seven writing styles", "Twelve languages"];

/** Shared layout for the home page and every SEO landing page. */
export function ToolPage({ h1, name, intro, eyebrow = "Free paraphrasing tool", native, mode, language, slug, children }: ToolPageProps) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: `${name} | ${siteConfig.name}`,
      url: `${siteConfig.url}/${slug ?? ""}`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    faqJsonLd(),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative">
        <div aria-hidden="true" className="hero-dots pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]" />
        <header className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:pt-20 sm:pb-10">
          <p className="rise inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="rise rise-2 mt-5 max-w-4xl font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {h1}
          </h1>
          {native && (
            <p lang={native.lang} dir="auto" className="rise rise-3 mt-5 w-fit text-xl">
              {native.text}
            </p>
          )}
          <div className="rise rise-3 mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{intro}</div>
        </header>

        <div id="tool" className="mx-auto max-w-6xl scroll-mt-20 px-4">
          <div className={siteConfig.adsEnabled ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]" : ""}>
            <div className="min-w-0">
              <Paraphraser defaultMode={mode} defaultLanguage={language} />
              <AdSlot slot="below-tool" className="mt-6 lg:hidden" />
            </div>
            <AdSlot slot="sidebar" className="hidden lg:block" />
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {FACTS.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-accent-text" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
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
