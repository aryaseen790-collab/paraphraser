import { Paraphraser } from "@/components/Paraphraser";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Free Paraphrasing Tool</h1>
      <p className="mt-2 mb-6 text-muted">{siteConfig.tagline}</p>
      <Paraphraser />
    </div>
  );
}
