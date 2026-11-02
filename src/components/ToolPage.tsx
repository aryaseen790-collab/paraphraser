import type { ModeId } from "@/config/modes";
import { siteConfig } from "@/config/site";
import { AdSlot } from "./AdSlot";
import { InfoSections, faqJsonLd } from "./InfoSections";
import { MoreTools } from "./MoreTools";
import { Paraphraser } from "./Paraphraser";

interface ToolPageProps {
  h1: string;
  intro: string;
  native?: { lang: string; text: string };
  mode?: ModeId;
  language?: string;
  slug?: string;
}

/** Shared layout for the home page and every SEO landing page. */
export function ToolPage({ h1, intro, native, mode, language, slug }: ToolPageProps) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: `${h1} | ${siteConfig.name}`,
      url: `${siteConfig.url}/${slug ?? ""}`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    faqJsonLd(),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="mb-6 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{h1}</h1>
        {native && (
          <p lang={native.lang} dir="auto" className="mt-3 text-lg">
            {native.text}
          </p>
        )}
        <p className="mt-2 text-muted">{intro}</p>
      </header>

      <div className={siteConfig.adsEnabled ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]" : ""}>
        <div className="min-w-0">
          <Paraphraser defaultMode={mode} defaultLanguage={language} />
          <AdSlot slot="below-tool" className="mt-6 lg:hidden" />
        </div>
        <AdSlot slot="sidebar" className="hidden lg:block" />
      </div>

      <InfoSections />
      <MoreTools current={slug} />
    </div>
  );
}
