import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.indexable) {
    // Pre-launch: crawlers may fetch pages (so they can see the noindex tag and
    // drop anything already indexed), but no sitemap is advertised.
    return { rules: { userAgent: "*", allow: "/", disallow: "/api/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
