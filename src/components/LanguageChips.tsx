import Link from "next/link";
import { getLanguage } from "@/config/languages";
import { HUMANIZER_PAGES, LANGUAGE_PAGES } from "@/config/landing";
import { LOCALES, LOCALE_INFO } from "@/i18n/locales";

/** Links to every translated site and every remaining language landing page. */
export function LanguageChips() {
  const chip =
    "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm transition hover:border-foreground";
  const pages = [...LANGUAGE_PAGES.filter((p) => p.language !== "en"), ...HUMANIZER_PAGES.filter((p) => p.language)];
  return (
    <ul className="flex flex-wrap gap-2.5">
      {LOCALES.filter((l) => l !== "en").map((l) => (
        <li key={l}>
          <a href={LOCALE_INFO[l].paths.home} hrefLang={LOCALE_INFO[l].htmlLang} lang={LOCALE_INFO[l].htmlLang} className={chip}>
            <span className="font-medium">{LOCALE_INFO[l].nativeName}</span>
          </a>
        </li>
      ))}
      {pages.map((p) => (
        <li key={p.slug}>
          <Link href={`/${p.slug}`} className={chip}>
            <span className="font-medium">{p.h1.replace(" Paraphrasing Tool", "").replace("Humanize AI text in ", "")}</span>
            {p.language && p.language !== "tl" && (
              <span lang={p.language} className="text-muted">
                {getLanguage(p.language)?.label.match(/\(([^)]+)\)/)?.[1]}
              </span>
            )}
            {p.language === "tl" && <span className="text-muted">humanizer</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
