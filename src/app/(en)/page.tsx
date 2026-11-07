import { pageOpenGraph } from "@/components/SiteShell";
import type { Metadata } from "next";
import { HUMANIZE_FAQS, HumanizeContent } from "@/components/HumanizeContent";
import { ToolPage } from "@/components/ToolPage";
import { siteConfig } from "@/config/site";
import { localeAlternates } from "@/i18n/locales";

const title = `Humanize AI Text Free: AI Humanizer | ${siteConfig.name}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description: siteConfig.description,
  alternates: localeAlternates("home", "en"),
  openGraph: pageOpenGraph("en", { title, description: siteConfig.description, url: "/" }),
  twitter: { title, description: siteConfig.description },
};

export default function Home() {
  return (
    <ToolPage
      name="Free AI Humanizer"
      eyebrow="Free AI humanizer · No sign-up"
      h1={
        <>
          Humanize AI text so it sounds like <span className="swash">you</span>
        </>
      }
      intro="Paste a draft that reads like it came off a production line. OG Humanizer fixes the rhythm, cuts the filler and swaps generic phrasing for plain language, while your facts stay exactly where you left them."
      mode="humanize"
      faqs={HUMANIZE_FAQS}
    >
      <HumanizeContent />
    </ToolPage>
  );
}
