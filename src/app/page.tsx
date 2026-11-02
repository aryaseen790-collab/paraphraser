import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Free Paraphrasing Tool</h1>
      <p className="mt-2 text-muted">{siteConfig.tagline}</p>
      <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-muted">
        The paraphrasing tool is added in Phase 2.
      </div>
    </div>
  );
}
