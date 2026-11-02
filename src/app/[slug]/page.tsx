import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPage } from "@/components/ToolPage";
import { LANDING_PAGES, getLandingPage } from "@/config/landing";

export function generateStaticParams() {
  return LANDING_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `/${page.slug}` },
    twitter: { title: page.title, description: page.description },
  };
}

export default async function LandingPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  return (
    <ToolPage
      h1={page.h1}
      intro={page.intro}
      native={page.native}
      mode={page.mode}
      language={page.language}
      slug={page.slug}
    />
  );
}
