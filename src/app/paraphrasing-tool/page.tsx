import type { Metadata } from "next";
import { ParaphraserContent } from "@/components/ParaphraserContent";
import { ToolPage } from "@/components/ToolPage";

const title = "Free Paraphrasing Tool: Rewrite in 8 Styles";
const description =
  "Paraphrase any text free in eight styles: Standard, Humanize, Fluent, Formal, Simple, Creative, Shorten and Expand. Twelve languages, no sign-up.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/paraphrasing-tool" },
  openGraph: { title, description, url: "/paraphrasing-tool" },
  twitter: { title, description },
};

export default function ParaphrasingToolPage() {
  return (
    <ToolPage
      name="Free Paraphrasing Tool"
      slug="paraphrasing-tool"
      h1={
        <>
          The free paraphrasing tool for <span className="swash">clearer</span> writing
        </>
      }
      intro="Paste a sentence, a paragraph or a whole page, pick a style, and get a rewrite in seconds with every change highlighted. No account, no credit counter, nothing to install."
    >
      <ParaphraserContent />
    </ToolPage>
  );
}
