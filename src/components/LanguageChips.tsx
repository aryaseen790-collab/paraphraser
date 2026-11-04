import Link from "next/link";
import { getLanguage } from "@/config/languages";
import { HUMANIZER_PAGES, LANGUAGE_PAGES } from "@/config/landing";

/** Links to every language page, with each language's own name. */
export function LanguageChips() {
  const pages = [...LANGUAGE_PAGES, ...HUMANIZER_PAGES.filter((p) => p.language)];
  return (
    <ul className="flex flex-wrap gap-2.5">
      {pages.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/${p.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm transition hover:border-foreground"
          >
            <span className="font-medium">{p.h1.replace(" Paraphrasing Tool", "").replace("Humanize AI text in ", "")}</span>
            {p.language && p.language !== "en" && p.language !== "tl" && (
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
