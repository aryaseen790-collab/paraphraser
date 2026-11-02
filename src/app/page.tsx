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
      intro="Paste a sentence, a paragraph or a whole page. Pick a style. Get a rewrite in a few seconds, with every change highlighted. No account, no credit counter, nothing to install."
    >
      <HomeContent />
    </ToolPage>
  );
}
