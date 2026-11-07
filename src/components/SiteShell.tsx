import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { Fraunces, Geist } from "next/font/google";
import "@/app/globals.css";
import { siteConfig } from "@/config/site";
import { EN_CHROME } from "@/i18n/en";
import { LOCALE_INFO, type Locale } from "@/i18n/locales";
import type { ChromeStrings } from "@/i18n/types";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ThemeScript } from "./ThemeScript";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
// Headings only use weight 600, so load just that (normal + italic) instead of the
// full variable font. Monospace labels use the system font stack.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#12110f" },
  ],
};

/**
 * Open Graph block for a page. Next.js replaces (not merges) a parent's openGraph
 * when a page sets its own, so every page goes through this to keep the share
 * image, site name and locale.
 */
export function pageOpenGraph(
  locale: Locale,
  og: { title: string; description: string; url: string; type?: "website" | "article" },
): NonNullable<Metadata["openGraph"]> {
  return {
    type: og.type ?? "website",
    siteName: siteConfig.name,
    locale: LOCALE_INFO[locale].ogLocale,
    images: ["/opengraph-image"],
    title: og.title,
    description: og.description,
    url: og.url,
  };
}

/** Site-wide metadata shared by every language; pages add their own title, description and hreflang. */
export function baseMetadata(locale: Locale, description: string): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
    description,
    applicationName: siteConfig.name,
    verification: siteConfig.googleSiteVerification ? { google: siteConfig.googleSiteVerification } : undefined,
    icons: { icon: "/icon.svg" },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: LOCALE_INFO[locale].ogLocale,
      images: ["/opengraph-image"],
    },
    twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
    robots: siteConfig.indexable
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  };
}

/** The <html> document for one language: correct lang attribute, fonts, header and footer. */
export function SiteShell({
  locale = "en",
  chrome = EN_CHROME,
  children,
}: {
  locale?: Locale;
  chrome?: ChromeStrings;
  children: ReactNode;
}) {
  return (
    <html
      lang={LOCALE_INFO[locale].htmlLang}
      suppressHydrationWarning
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      {/* Google Tag Manager: loads after the page is interactive so it doesn't slow the first paint. */}
      {siteConfig.gtmId && <GoogleTagManager gtmId={siteConfig.gtmId} />}
      {/* This component is the App Router root layout body, where a plain <head> is correct. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">
        <Header locale={locale} chrome={chrome} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} chrome={chrome} />
        {siteConfig.adsEnabled && siteConfig.adsenseClient && (
          <Script
            id="adsense"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClient}`}
          />
        )}
      </body>
    </html>
  );
}
