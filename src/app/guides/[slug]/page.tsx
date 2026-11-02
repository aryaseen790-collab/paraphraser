import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import { GUIDES, getGuide } from "@/content/guides";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { type: "article", title: guide.title, description: guide.description, url: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <ContentPage>
      <p className="text-sm">
        <Link href="/guides">← All guides</Link>
      </p>
      <h1>{guide.title}</h1>
      <p>{guide.description}</p>
      {guide.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}
      <div className="mt-10 rounded-xl border border-border bg-surface p-5">
        <p className="!mb-3 !text-foreground">Try it now, free and with no sign-up:</p>
        <Link
          href={`/${guide.toolSlug}`}
          className="inline-block rounded-xl bg-accent px-5 py-2.5 font-semibold !text-white !no-underline hover:bg-accent-hover"
        >
          Open the {guide.toolLabel}
        </Link>
      </div>
    </ContentPage>
  );
}
