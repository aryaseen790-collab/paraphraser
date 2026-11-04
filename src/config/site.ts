/**
 * Site-wide settings. Most values come from environment variables so you can
 * change them on Vercel without touching code; the fallbacks are used locally.
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "OG Humanizer",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://oghumanizer.com").replace(/\/+$/, ""),
  tagline: "Free AI humanizer. Make AI text sound like the original: you.",
  description:
    "Humanize AI text free with OG Humanizer. Turn stiff, robotic drafts into natural writing that sounds like you, plus a free paraphraser. No sign-up.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@oghumanizer.com",
  adsEnabled: process.env.NEXT_PUBLIC_ADS_ENABLED === "true",
  /**
   * Search engines may index the site only when ALLOW_INDEXING=true. Until then
   * every page says "noindex, nofollow" (meta tag + X-Robots-Tag header) and the
   * sitemap is not advertised. Changing it requires a redeploy.
   */
  indexable: process.env.ALLOW_INDEXING === "true",
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
} as const;
