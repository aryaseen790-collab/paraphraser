/**
 * Site-wide settings. Most values come from environment variables so you can
 * change them on Vercel without touching code; the fallbacks are used locally.
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Paraphraser",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, ""),
  tagline: "Free AI paraphrasing tool. No sign-up, no limits for normal use.",
  description:
    "Paraphrase and humanize AI text free. Rewrite any text in eight styles, including a built-in AI humanizer, in many languages, no sign-up.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
  adsEnabled: process.env.NEXT_PUBLIC_ADS_ENABLED === "true",
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
} as const;
