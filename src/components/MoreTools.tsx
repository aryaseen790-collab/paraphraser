import Link from "next/link";
import { LANGUAGE_PAGES, MODE_PAGES } from "@/config/landing";

export function MoreTools({ current }: { current?: string }) {
  const group = (title: string, pages: typeof MODE_PAGES) => (
    <div>
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {pages
          .filter((p) => p.slug !== current)
          .map((p) => (
            <li key={p.slug}>
              <Link
                href={`/${p.slug}`}
                className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted hover:border-accent hover:text-foreground"
              >
                {p.h1}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
  return (
    <section className="mt-12 grid gap-6 md:grid-cols-2">
      {group("Writing styles", MODE_PAGES)}
      {group("Languages", LANGUAGE_PAGES)}
    </section>
  );
}
