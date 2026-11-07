import type { Metadata } from "next";
import { SiteShell, baseMetadata } from "@/components/SiteShell";
import { siteConfig } from "@/config/site";

export { viewport } from "@/components/SiteShell";

export const metadata: Metadata = {
  ...baseMetadata("en", siteConfig.description),
  title: {
    default: `Humanize AI Text Free: AI Humanizer | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
