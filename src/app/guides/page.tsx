import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/content/guides";

export const metadata: Metadata = {
  title: "Writing Guides",
  description: "Short, practical guides to rewriting, simplifying and paraphrasing your writing.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight">Writing Guides</h1>
      <p className="mt-2 text-muted">Short, practical guides to help you write clearly.</p>
      <ul className="mt-8 space-y-4">
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`} className="block rounded-xl border border-border bg-surface p-5 transition hover:border-accent">
              <h2 className="text-lg font-semibold">{g.title}</h2>
              <p className="mt-1 text-muted">{g.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
