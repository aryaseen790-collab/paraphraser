"use client";

import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_INFO, type Locale, type PageKey } from "@/i18n/locales";

/** Which shared page (if any) the current path is, in any language. */
function currentPage(pathname: string): PageKey {
  const clean = pathname.replace(/\/+$/, "") || "/";
  for (const l of LOCALES) {
    if (LOCALE_INFO[l].paths.paraphraser === clean) return "paraphraser";
  }
  return "home";
}

/** Links to the same page in every other language (falls back to each language's home page). */
export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? "/";
  const page = currentPage(pathname);
  return (
    <details className="group relative">
      <summary
        aria-label={label}
        title={label}
        className="flex h-9 cursor-pointer list-none items-center gap-1.5 rounded-full border border-border bg-surface px-3 text-sm text-muted transition marker:hidden hover:text-foreground"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
        </svg>
        <span className="font-medium uppercase">{locale}</span>
      </summary>
      <ul className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-border bg-surface py-1 shadow-card">
        {LOCALES.map((l) => (
          <li key={l}>
            <a
              href={LOCALE_INFO[l].paths[page]}
              hrefLang={LOCALE_INFO[l].htmlLang}
              lang={LOCALE_INFO[l].htmlLang}
              aria-current={l === locale ? "true" : undefined}
              className={`block px-4 py-2 text-sm transition hover:bg-surface-muted ${
                l === locale ? "font-semibold text-foreground" : "text-muted"
              }`}
            >
              {LOCALE_INFO[l].nativeName}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
