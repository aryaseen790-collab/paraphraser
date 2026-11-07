import Link from "next/link";
import { LANGUAGE_PAGES, MODE_PAGES } from "@/config/landing";
import { siteConfig } from "@/config/site";
import { EN_CHROME } from "@/i18n/en";
import { LOCALES, LOCALE_INFO, type Locale } from "@/i18n/locales";
import type { ChromeStrings } from "@/i18n/types";
import { Logo } from "./Logo";

interface FooterLink {
  href: string;
  label: string;
  lang?: string;
}

function Column({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h2 className="mb-3 text-xs font-semibold tracking-[0.14em] text-foreground uppercase">{title}</h2>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} lang={l.lang} className="text-sm text-muted transition hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ locale = "en", chrome = EN_CHROME }: { locale?: Locale; chrome?: ChromeStrings }) {
  const paths = LOCALE_INFO[locale].paths;
  const tools: FooterLink[] =
    locale === "en"
      ? [
          { href: "/", label: "AI Humanizer" },
          { href: "/humanize-ai-tagalog", label: "Tagalog Humanizer" },
          { href: "/paraphrasing-tool", label: "Paraphrasing Tool" },
          ...MODE_PAGES.slice(1, 5).map((p) => ({ href: `/${p.slug}`, label: p.h1 })),
        ]
      : [
          { href: paths.home, label: chrome.navHumanizer },
          { href: paths.paraphraser, label: chrome.navParaphraser },
        ];
  const languages: FooterLink[] = [
    ...LOCALES.filter((l) => l !== locale).map((l) => ({
      href: LOCALE_INFO[l].paths.home,
      label: LOCALE_INFO[l].nativeName,
      lang: LOCALE_INFO[l].htmlLang,
    })),
    ...(locale === "en"
      ? LANGUAGE_PAGES.filter((p) => ["ar", "ur", "hi"].includes(p.language ?? "")).map((p) => ({
          href: `/${p.slug}`,
          label: p.h1.replace(" Paraphrasing Tool", ""),
        }))
      : []),
  ];
  const company: FooterLink[] = [
    { href: "/about", label: chrome.about },
    ...(locale === "en" ? [{ href: "/guides", label: "Writing guides" }] : []),
    { href: "/contact", label: chrome.contact },
    { href: "/privacy", label: chrome.privacy },
    { href: "/terms", label: chrome.terms },
  ];

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo href={paths.home} />
          <p className="mt-4 text-sm leading-relaxed text-muted">{chrome.footerTagline}</p>
        </div>
        <Column title={chrome.footerTools} links={tools} />
        <Column title={chrome.otherLanguages} links={languages} />
        <div>
          <Column title={chrome.footerMore} links={company} />
          {chrome.englishOnlyNote && <p className="mt-3 text-xs text-muted">{chrome.englishOnlyNote}</p>}
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted">
          © {siteConfig.name}. {chrome.footerNote}
        </p>
      </div>
    </footer>
  );
}
