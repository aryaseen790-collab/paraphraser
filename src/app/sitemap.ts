import type { MetadataRoute } from "next";
import { LANDING_PAGES } from "@/config/landing";
import { siteConfig } from "@/config/site";
import { GUIDES } from "@/content/guides";
import { LOCALES, LOCALE_INFO, type PageKey } from "@/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => `${siteConfig.url}${path === "/" ? "/" : path}`;

  // Every language version of the humanizer and paraphraser pages, each listing its alternates.
  const localized = (["home", "paraphraser"] as PageKey[]).flatMap((page) => {
    const languages = Object.fromEntries(
      [...LOCALES.map((l) => [LOCALE_INFO[l].htmlLang, u(LOCALE_INFO[l].paths[page])]), ["x-default", u(LOCALE_INFO.en.paths[page])]],
    );
    return LOCALES.map((l) => ({
      url: u(LOCALE_INFO[l].paths[page]),
      changeFrequency: "weekly" as const,
      priority: page === "home" ? 1 : 0.9,
      alternates: { languages },
    }));
  });

  return [
    ...localized,
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
