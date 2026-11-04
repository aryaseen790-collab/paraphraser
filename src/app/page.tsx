import { HUMANIZE_FAQS, HumanizeContent } from "@/components/HumanizeContent";
import { ToolPage } from "@/components/ToolPage";

export default function Home() {
  return (
    <ToolPage
      name="Free AI Humanizer"
      eyebrow="Free AI humanizer · No sign-up"
      h1={
        <>
          Humanize AI text so it sounds like <span className="swash">you</span>
        </>
      }
      intro="Paste a draft that reads like it came off a production line. OG Humanizer reworks the rhythm, trims the filler and swaps generic phrasing for plain, specific language, while your facts stay exactly where you left them."
      mode="humanize"
      faqs={HUMANIZE_FAQS}
    >
      <HumanizeContent />
    </ToolPage>
  );
}
