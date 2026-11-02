import { HomeContent } from "@/components/HomeContent";
import { ToolPage } from "@/components/ToolPage";

export default function Home() {
  return (
    <ToolPage
      name="Free Paraphrasing Tool"
      h1={
        <>
          The free paraphrasing tool for <span className="swash">clearer</span> writing
        </>
      }
      intro="Paste a sentence, a paragraph or a whole page, pick a style, and get a rewrite in seconds with every change highlighted. Need to humanize AI text? There’s a style for that too. No account, no credit counter, nothing to install."
    >
      <HomeContent />
    </ToolPage>
  );
}
