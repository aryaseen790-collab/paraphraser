import Link from "next/link";
import { HUMANIZER_PAGES, LANGUAGE_PAGES, MODE_PAGES } from "@/config/landing";
import { Section } from "./Section";

export function MoreTools({ current }: { current?: string }) {
  const group = (title: string, pages: typeof MODE_PAGES) => (
    <div>
      <h3 className="mb-3 text-sm font-semibold">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {pages
          .filter((p) => p.slug !== current)
          .map((p) => (
            <li key={p.slug}>
              <Link
                href={`/${p.slug}`}
                className="inline-block rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted transition hover:border-foreground hover:text-foreground"
              >
                {p.h1}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
  return (
    <Section number="More tools" title="Try another style or language">
      <div className="grid gap-8 md:grid-cols-2">
        {group("Writing styles", [...HUMANIZER_PAGES.filter((p) => !p.language), ...MODE_PAGES])}
        {group("Languages", [...LANGUAGE_PAGES, ...HUMANIZER_PAGES.filter((p) => p.language)])}
      </div>
    </Section>
  );
}
