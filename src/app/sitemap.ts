import type { MetadataRoute } from "next";
import { LANDING_PAGES } from "@/config/landing";
import { siteConfig } from "@/config/site";
import { GUIDES } from "@/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => `${siteConfig.url}${path}`;
  return [
    { url: u("/"), changeFrequency: "weekly", priority: 1 },
    { url: u("/paraphrasing-tool"), changeFrequency: "weekly", priority: 0.9 },
    ...LANDING_PAGES.map((p) => ({ url: u(`/${p.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: u("/guides"), changeFrequency: "monthly", priority: 0.6 },
    ...GUIDES.map((g) => ({ url: u(`/guides/${g.slug}`), changeFrequency: "yearly" as const, priority: 0.5 })),
    ...["/about", "/contact", "/privacy", "/terms"].map((p) => ({
      url: u(p),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
