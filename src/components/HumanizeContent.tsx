import Link from "next/link";
import { FAQS, type FaqItem } from "@/content/faq";
import { Faq } from "./Faq";
import { Illustration } from "./Illustration";
import { LanguageChips } from "./LanguageChips";
import { MoreTools } from "./MoreTools";
import { Section } from "./Section";

const GENERAL = (q: string) => FAQS.find((f) => f.q === q)!;

export const HUMANIZE_FAQS: FaqItem[] = [
  {
    q: "What does it mean to humanize AI text?",
    a: "To humanize AI text is to rewrite a machine-drafted passage so it reads the way a person would actually put it: varied sentences, plain words, no padding, and a voice that suits the reader. The ideas stay the same; the delivery changes.",
  },
  {
    q: "Is this AI humanizer really free?",
    a: "Yes. There’s no sign-up, no trial and no word credits to buy. You can humanize up to 1,000 words per request, as often as ordinary writing requires. Ads beside the tool pay for the running costs.",
  },
  {
    q: "Will humanized text get past AI detectors?",
    a: "We don’t promise that, and you should be wary of any humanizer that does. Detectors disagree with one another and regularly misjudge human writing. What we do promise is text that reads naturally. If a school or employer requires you to disclose AI use, disclose it.",
  },
  {
    q: "Is this an AI text remover?",
    a: "Not in the sense of deleting anything. It doesn’t strip hidden watermarks or metadata. It rewrites the wording itself, removing the stock phrases, repetitive structure and filler that make a draft sound automated.",
  },
  {
    q: "What’s the difference between humanizing and paraphrasing?",
    a: "Paraphrasing changes the wording; humanizing changes the wording with a specific aim, which is to sound less mechanical. In practice, the Humanize style pays particular attention to rhythm, clichés and over-tidy structure, while the other styles focus on tone or length.",
  },
  {
    q: "Can I humanize AI text in other languages?",
    a: "Yes. Paste text in English, Filipino, Urdu, Arabic, Hindi, Spanish, French, German, Portuguese, Indonesian, Turkish or Bengali and the humanized version comes back in the same language. There’s also a dedicated Tagalog humanizer page.",
  },
  {
    q: "Is it the best AI humanizer?",
    a: "That depends on what you need. If you want a free, quick way to make a draft sound natural without creating an account, it’s a very good fit. If you need long documents processed in bulk, a paid tool may suit you better. Try it on your own text and judge the result.",
  },
  GENERAL("Why is there a 1,000-word limit?"),
  GENERAL("Do you keep my text?"),
  GENERAL("Does it work on my phone?"),
];

const TELLS = [
  {
    title: "Throat-clearing openers",
    text: "“In today’s fast-paced world…”, “It is important to note that…”. Sentences that warm up instead of saying something are the clearest tell of all.",
  },
  {
    title: "Metronome rhythm",
    text: "Machine drafts love sentences of near-identical length, each one tidy and complete. Real writing speeds up and slows down. Some sentences run on. Others stop short.",
  },
  {
    title: "Inflated vocabulary",
    text: "Delve, leverage, seamless, robust, tapestry. Words like these sound impressive and say very little. A person usually reaches for the plainer word.",
  },
  {
    title: "Reflexive lists of three",
    text: "Efficient, effective and engaging. When every point arrives in a neat triplet, the text starts to feel assembled rather than written.",
  },
  {
    title: "The obligatory summary",
    text: "“In conclusion, …” followed by a restatement of everything the reader has just read. Most short pieces are better without it.",
  },
  {
    title: "Hedging everywhere",
    text: "“May potentially help to somewhat improve…”. A little caution is honest; caution in every clause makes the writer sound unsure of everything.",
  },
];

const EXAMPLES = [
  {
    label: "Email",
    before:
      "I hope this email finds you well. I am reaching out to inform you that we have made the decision to postpone the project timeline. We appreciate your understanding and look forward to continuing our collaboration.",
    after:
      "Quick update: we’ve decided to push the project timeline back. Thanks for bearing with us. We’re still looking forward to working together.",
  },
  {
    label: "Blog intro",
    before:
      "In today’s digital landscape, time management has become more important than ever. In this article, we will delve into five effective strategies that can help you boost your productivity.",
    after:
      "Time is harder to manage than it used to be. Here are five strategies that can help you get more done.",
  },
  {
    label: "Product description",
    before:
      "This innovative stainless steel water bottle seamlessly combines style and functionality, keeping your beverages cold for up to 24 hours while offering a robust, leak-proof design for all your hydration needs.",
    after:
      "A good-looking steel bottle that keeps drinks cold for up to 24 hours. And it doesn’t leak.",
  },
];

/** Long-form content for the home page: the AI humanizer. */
export function HumanizeContent() {
  return (
    <>
      <Section
        media={<Illustration name="robotToHuman" />}
        number="01 · The idea"
        title="What it actually means to humanize AI text"
        lede={
          <p>
            AI writing tools are astonishingly fluent, and fluency is exactly the problem. The sentences are grammatical,
            the structure is tidy, and yet something about the result feels hollow, like a speech written for nobody in
            particular.
          </p>
        }
      >
        <div className="grid gap-8 text-lg leading-relaxed text-muted md:grid-cols-2">
          <p>
            To humanize AI text is to close that gap. It means taking a draft that is technically correct and making it
            sound as though a person with a point of view sat down and wrote it: someone who knows when to be brief,
            when to explain, and when a single plain word will do more than three ornate ones. Nothing about the content
            needs to change. The facts, the argument and the order of ideas can all stay put. What changes is the
            delivery.
          </p>
          <p>
            That’s the job our AI humanizer is built for. Choose the Humanize style, paste your draft and, a few seconds
            later, you’ll have a version with more varied rhythm, fewer stock phrases and noticeably less padding. You
            can then do what any good editor does with a second draft: keep the lines that land, restore the ones you
            preferred, and make the final call yourself. If you’ve ever looked at a paragraph and thought “make this
            sound human”, this is the button for that.
          </p>
        </div>
      </Section>

      <Section
        tint
        media={<Illustration name="originalVoice" />}
        mediaLeft
        number="02 · The name"
        title={
          <>
            Why <span className="swash">OG</span>?
          </>
        }
      >
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
          <blockquote className="self-start border-l-[6px] border-highlight pl-6 font-display text-2xl leading-snug font-bold">
            OG stands for original. The aim is writing that sounds like the original version of you, not the average of
            everything on the internet.
          </blockquote>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Every good piece of writing starts as somebody’s own thought, said in their own way. AI tools are superb
              at producing words and rather poor at producing that. They smooth away the quirks, the opinions and the
              odd turns of phrase that make a writer recognisable, and what’s left is perfectly polished and strangely
              anonymous.
            </p>
            <p>
              OG Humanizer exists to put some of that originality back. It won’t invent your experiences or your
              opinions, which only you can supply, but it will strip out the machine-made gloss so that what you add
              actually stands out.
            </p>
          </div>
        </div>
      </Section>

      <Section
        number="03 · What changes"
        title="Six habits our humanizer rewrites out of your draft"
        lede={
          <p>
            AI-generated text tends to share a handful of habits. None of them is a crime on its own, but together they
            give the game away. These are the patterns the Humanize style is told to look for and smooth over.
          </p>
        }
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TELLS.map((t, i) => (
            <li key={t.title} className="rounded-3xl border border-border bg-surface p-6">
              <span className={`tile tile-${i % 5}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{t.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tint
        number="04 · Examples"
        title="Before and after: AI text, humanized"
        lede={<p>Three short passages of typical machine-drafted prose, and what the AI humanizer tool made of them.</p>}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {EXAMPLES.map((e) => (
            <article key={e.label} className="flex flex-col rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-xl font-bold">{e.label}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
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
        <p className="mt-6 max-w-3xl text-muted">
          Notice what didn’t change: the postponed timeline, the five strategies, the 24 hours and the leak-proof
          design. A good humanizer edits the voice, not the substance.
        </p>
      </Section>

      <Section number="05 · Good uses" title="When a free AI humanizer earns its keep" media={<Illustration name="useCases" />}>
        <div className="grid gap-8 text-lg leading-relaxed text-muted md:grid-cols-2">
          <div className="space-y-4">
            <p>
              <strong className="text-foreground">Emails and messages.</strong> You asked a chatbot for a polite reply
              and got something that reads like a corporate press release. Humanize it, and it sounds like you again.
            </p>
            <p>
              <strong className="text-foreground">Blog posts and newsletters.</strong> AI is a decent research assistant
              and a mediocre columnist. Use it for the outline if you like, then humanize the prose so your readers stay
              past the first paragraph.
            </p>
            <p>
              <strong className="text-foreground">Product and service copy.</strong> Swap the adjectives that every
              competitor also uses for the concrete details customers actually care about.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <strong className="text-foreground">Cover letters and applications.</strong> Recruiters read hundreds of
              letters that open with the same three sentences. A humanized draft gives yours a fighting chance, as long
              as every claim in it is true.
            </p>
            <p>
              <strong className="text-foreground">Writing in a second language.</strong> If you drafted with AI because
              English (or Filipino, or Spanish) isn’t your first language, the humanizer helps the text sound natural
              rather than translated.
            </p>
            <p>
              <strong className="text-foreground">Your own stiff first drafts.</strong> Humans write robotic prose too,
              usually when tired or nervous. The tool doesn’t care who wrote the draft; it simply makes it read better.
            </p>
          </div>
        </div>
      </Section>

      <Section tint number="06 · Straight talk" title="A candid word about AI detectors" media={<Illustration name="detectors" />} mediaLeft>
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Plenty of AI text humanizer sites promise to make writing “100% undetectable”. We don’t, for two reasons.
              First, AI detectors are unreliable: they disagree with each other, and they routinely flag text that a
              person wrote from scratch, especially text by non-native speakers. A promise built on such a shaky
              measurement isn’t worth much.
            </p>
            <p>
              Second, the goal shouldn’t be to fool anybody. If your school, publisher or employer requires you to
              declare AI assistance, declare it. Our humanizer is for making writing clearer and more natural, which is
              a goal worth pursuing whether or not anyone is checking.
            </p>
          </div>
          <aside className="self-start rounded-3xl bg-accent-soft p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold">The honest test</h3>
            <p className="mt-2 leading-relaxed">
              Read the humanized version aloud. If it sounds like something you’d say to a colleague across the desk,
              it’s done. If it doesn’t, edit it until it does. No detector score is a better measure than that.
            </p>
          </aside>
        </div>
      </Section>

      <Section number="07 · Do it yourself" title="How to humanize AI content by hand">
        <div className="grid gap-8 text-lg leading-relaxed text-muted md:grid-cols-2">
          <p>
            A tool gets you most of the way, but the final polish is always yours. Start by cutting the first sentence of
            every paragraph and seeing whether anything is lost; often nothing is. Replace each abstract noun you can
            with a concrete example. Break one long sentence in two, then join two short ones. And add the one thing an
            AI can’t: a detail from your own experience.
          </p>
          <p>
            We’ve written a longer, step-by-step guide on{" "}
            <Link href="/guides/how-to-humanize-ai-content" className="text-accent-text underline underline-offset-2">
              how to humanize AI content
            </Link>
            , with before-and-after edits you can borrow. If you write in Filipino, try the{" "}
            <Link href="/humanize-ai-tagalog" className="text-accent-text underline underline-offset-2">
              Tagalog AI humanizer
            </Link>
            , and if you simply want a fresh wording rather than a change of voice, the{" "}
            <Link href="/paraphrasing-tool" className="text-accent-text underline underline-offset-2">
              free paraphrasing tool
            </Link>{" "}
            has seven more styles to choose from.
          </p>
        </div>
      </Section>

      <Section
        id="languages"
        tint
        number="08 · Languages"
        title="Humanize AI text in twelve languages"
        lede={
          <p>
            Paste text in English, Filipino, Urdu, Arabic, Hindi, Spanish, French, German, Portuguese, Indonesian,
            Turkish or Bengali and the humanized version comes back in the same language and script. Want it in a
            different language? Pick one from the output menu and OG Humanizer will translate and humanize in one go.
          </p>
        }
      >
        <LanguageChips />
      </Section>

      <Section number="09 · Questions" title="AI humanizer FAQ">
        <Faq items={HUMANIZE_FAQS} />
      </Section>

      <section className="mx-auto mt-6 max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[32px] hero-band px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <h2 className="relative font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sound like the <span className="swash">original</span> you.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
            Paste your draft, press Humanize, and read it back. Free, every time, with nothing to sign up for.
          </p>
          <Link
            href="#tool"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-[#0e1330] shadow-lg transition hover:bg-highlight"
          >
            Humanize my text ↑
          </Link>
        </div>
      </section>

      <MoreTools />
    </>
  );
}
