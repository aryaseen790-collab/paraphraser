import Link from "next/link";
import type { FaqItem } from "@/content/faq";
import { Faq } from "./Faq";
import { MoreTools } from "./MoreTools";
import { Section } from "./Section";

export const TAGALOG_FAQS: FaqItem[] = [
  {
    q: "Can I humanize AI text in Tagalog for free?",
    a: "Yes. The Tagalog humanizer is completely free, with no account and no word credits. Each request can be up to 1,000 words.",
  },
  {
    q: "Does it handle Taglish?",
    a: "It does. If your draft mixes English and Filipino, the humanizer keeps that mix where it sounds natural instead of forcing everything into formal Tagalog.",
  },
  {
    q: "Can I write in English and get the result in Tagalog?",
    a: "Yes. The output language on this page is set to Filipino (Tagalog), so English input is translated and humanized in one step. Switch the output language to “Same as input” if you want to keep English.",
  },
  {
    q: "Will it make my text undetectable by AI checkers?",
    a: "We don’t make that promise. AI detectors are unreliable, especially for Filipino text. The goal here is writing that sounds natural to a Filipino reader.",
  },
];

const EXAMPLES = [
  {
    before:
      "Sa mabilis na takbo ng mundo ngayon, mahalagang tandaan na ang edukasyon ay may napakahalagang papel sa paghubog ng ating kinabukasan.",
    after: "Malaki ang papel ng edukasyon sa magiging buhay natin, kaya hindi ito dapat ipagwalang-bahala.",
  },
  {
    before:
      "Nais naming ipaalam sa inyo na ang inyong order ay matagumpay na naproseso at kasalukuyang inihahanda para sa pagpapadala.",
    after: "Natanggap na namin ang order mo, at inihahanda na namin ito para maipadala.",
  },
];

/** Content for the /humanize-ai-tagalog landing page. */
export function HumanizeTagalogContent() {
  return (
    <>
      <Section
        number="01 · Bakit"
        title="Why AI-written Tagalog often sounds off"
        lede={
          <p>
            Ask an AI tool to write in Filipino and you’ll usually get something correct but oddly formal, closer to a
            government memo than to the way people actually talk, text or post.
          </p>
        }
      >
        <div className="grid gap-8 text-lg leading-relaxed text-muted md:grid-cols-2">
          <p>
            Much of the Tagalog these models learned from is written in a deliberately formal register: news, official
            notices and translated documents. So the output leans on long, stacked phrases, translated English idioms
            like “sa mabilis na takbo ng mundo ngayon”, and words most speakers would never use in conversation. It
            isn’t wrong, exactly. It just doesn’t sound like anyone you know.
          </p>
          <p>
            Our Tagalog AI humanizer rewrites that kind of text into natural, everyday Filipino. It shortens the
            sentences, drops the stiff connectors, chooses the common word over the bookish one and, where it fits,
            keeps the Taglish that real people use. Your meaning, names, dates and figures stay as they were.
          </p>
        </div>
      </Section>

      <Section number="02 · Halimbawa" title="Before and after">
        <div className="grid gap-5 md:grid-cols-2">
          {EXAMPLES.map((e, i) => (
            <article key={i} className="rounded-3xl border border-border bg-surface p-6" lang="tl">
              <p className="text-[0.95rem] leading-relaxed text-muted">
                <span className="mb-1 block font-mono text-[10px] tracking-[0.16em] uppercase">Before</span>
                {e.before}
              </p>
              <p className="mt-4 rounded-2xl bg-surface-muted p-4 text-[0.95rem] leading-relaxed">
                <span className="mb-1 block font-mono text-[10px] tracking-[0.16em] text-accent-text uppercase">After</span>
                {e.after}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section number="03 · Paano" title="How to use the Tagalog humanizer">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["Paste", "Paste your AI-assisted draft, in Tagalog, Taglish or English, into the box above."],
            ["Humanize", "Leave the style on Humanize and the output language on Filipino (Tagalog), then press Paraphrase."],
            ["Check", "Read the result aloud. Keep what sounds like you, change what doesn’t, and copy it when you’re happy."],
          ].map(([title, text], i) => (
            <li key={title} className="rounded-3xl border border-border bg-surface p-6">
              <span className="font-display text-4xl text-accent-text italic">{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Students, freelancers and small businesses use it for school reflections, Facebook posts, customer replies and
          product listings. Whatever you write, use it on your own work and follow your school’s rules on AI. For English
          text, head to the main{" "}
          <Link href="/" className="text-accent-text underline underline-offset-2">
            AI humanizer
          </Link>
          .
        </p>
      </Section>

      <Section number="04 · Tanong" title="Tagalog humanizer FAQ">
        <Faq items={TAGALOG_FAQS} />
      </Section>

      <MoreTools current="humanize-ai-tagalog" />
    </>
  );
}
