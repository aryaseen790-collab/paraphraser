import { pageOpenGraph } from "@/components/SiteShell";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HumanizeTagalogContent, TAGALOG_FAQS } from "@/components/HumanizeTagalogContent";
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
    openGraph: pageOpenGraph("en", { title: page.title, description: page.description, url: `/${page.slug}` }),
    twitter: { title: page.title, description: page.description },
  };
}

export default async function LandingPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const custom =
    page.content === "humanize-tagalog" ? { children: <HumanizeTagalogContent />, faqs: TAGALOG_FAQS } : {};

  return (
    <ToolPage
      h1={page.h1}
      name={page.h1}
      eyebrow={
        page.eyebrow ??
        (page.language
          ? "Free paraphrasing tool · " + page.h1.replace(" Paraphrasing Tool", "")
          : "Free paraphrasing tool · " + (page.mode ? page.mode[0].toUpperCase() + page.mode.slice(1) : "") + " style")
      }
      intro={page.intro}
      native={page.native}
      mode={page.mode}
      language={page.language}
      slug={page.slug}
      {...custom}
    />
  );
}
