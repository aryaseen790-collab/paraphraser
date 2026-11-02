import Link from "next/link";
import { usesGemini } from "@/config/ai";
import { getLanguage } from "@/config/languages";
import { LANGUAGE_PAGES } from "@/config/landing";
import { Faq } from "./Faq";
import { Section } from "./Section";

const STYLES = [
  {
    name: "Standard",
    href: "/sentence-rewriter",
    text: "The everyday option. It swaps words and reshapes sentences while keeping the length and tone close to yours. If you’re not sure which style you need, start here.",
    before: "The meeting has been moved to Thursday because half the team is out on Wednesday.",
    after: "Since half the team will be away on Wednesday, we’ve pushed the meeting to Thursday.",
  },
  {
    name: "Humanize",
    href: "/humanize-ai",
    text: "For drafts that sound machine-made. It loosens the rhythm, cuts the stock phrases and swaps buzzwords for plain ones, so the text reads like a person wrote it.",
    before: "In today’s fast-paced world, it is important to note that effective communication plays a crucial role in fostering success.",
    after: "Clear communication goes a long way towards success.",
  },
  {
    name: "Fluent",
    href: "/fluent-paraphraser",
    text: "For text that’s understandable but clunky. It smooths out awkward phrasing, fixes small grammar slips and cuts repetition. Very handy when you’re writing in a language that isn’t your first.",
    before: "I am writing for informing you that the order you did is shipped yesterday.",
    after: "I’m writing to let you know that your order was shipped yesterday.",
  },
  {
    name: "Formal",
    href: "/formal-paraphraser",
    text: "For work emails, applications and reports. Slang and contractions go, and the tone becomes polite and businesslike without sounding stiff.",
    before: "Hey, can you send me the numbers by Friday? Need them for the report.",
    after: "Could you please send me the figures by Friday? I need them to complete the report.",
  },
  {
    name: "Simple",
    href: "/simple-paraphraser",
    text: "For readers who are new to a topic, reading in a second language, or short on time. Long words become short ones and long sentences are split up.",
    before: "The medication should be administered twice daily, contingent upon the absence of adverse gastrointestinal reactions.",
    after: "Take the medicine twice a day, as long as it doesn’t upset your stomach.",
  },
  {
    name: "Creative",
    href: "/creative-paraphraser",
    text: "For blog posts, captions and product descriptions that need more life. It picks livelier words and varies the rhythm, but every fact stays the same.",
    before: "Our café serves coffee and fresh pastries every morning.",
    after: "Start your morning at our café with a proper cup of coffee and pastries made fresh that day.",
  },
  {
    name: "Shorten",
    href: "/text-shortener",
    text: "For word limits and busy readers. Expect the text to lose roughly a third to a half of its length, with the main points still there.",
    before: "At this point in time, we are not in a position to be able to offer a refund for the item that you purchased.",
    after: "We can’t refund your purchase at the moment.",
  },
  {
    name: "Expand",
    href: "/text-expander",
    text: "For notes that need to become full sentences, or a reply that came out too short. It adds explanation and linking words around what you wrote, without inventing facts.",
    before: "Project delayed. Supplier issue. New date next week.",
    after: "The project has been delayed because of a problem with one of our suppliers. We expect to confirm a new completion date next week.",
  },
];

const TIPS = [
  {
    title: "Give it whole thoughts",
    text: "A full paragraph gives the tool context, so it can keep the links between your sentences. A lone phrase with no context tends to come back flat.",
  },
  {
    title: "Choose the style for your reader",
    text: "Writing to a manager or a client? Formal. Explaining a bill to a customer? Simple. Think about who will read it, not how you feel about the draft.",
  },
  {
    title: "Run it more than once",
    text: "Every run comes out a little different. If the first version is close but not quite right, press Paraphrase again or try the style next to it.",
  },
  {
    title: "Check names, numbers and quotes",
    text: "The tool is told to leave them alone, and it nearly always does. You’re the one sending the text, though, and the highlighted changes make checking quick.",
  },
  {
    title: "Keep the best of both",
    text: "Take the sentences you like from the rewrite and keep your own where yours was better. The strongest results are often half and half.",
  },
  {
    title: "Read it out loud",
    text: "If a sentence makes you stumble when you say it, it will make your reader stumble too. Fix those first.",
  },
];

const AUDIENCES = [
  {
    title: "Students",
    text: "Tidy up your own notes and drafts so they read clearly, and see new ways to phrase an argument. Keep citing your sources as usual.",
  },
  {
    title: "People at work",
    text: "Turn a quick draft into an email you’d be happy to send to a client, or trim a report summary so people actually read to the end.",
  },
  {
    title: "Second-language writers",
    text: "Say what you mean in plain words and let the Fluent style make it sound natural. Compare the two versions and you’ll pick up phrasing as you go.",
  },
  {
    title: "Writers and marketers",
    text: "Get unstuck when every sentence starts to sound the same, and try a few versions of a headline or product blurb before you settle on one.",
  },
];

export function HomeContent() {
  const gemini = usesGemini();

  return (
    <>
      <Section
        number="01 · Why rewrite"
        title="Most writing gets better the second time"
        lede={
          <>
            <p>
              The first draft is where you work out what you want to say. The second is where you say it well. The
              trouble is that rewriting your own words is hard: you already know what you meant, so your eyes slide
              straight past the clumsy parts.
            </p>
          </>
        }
      >
        <div className="grid gap-8 text-lg leading-relaxed text-muted md:grid-cols-2">
          <p>
            A paraphrasing tool gives you a second draft to react to. Sometimes you’ll take it exactly as it is. More
            often you’ll keep half of it, change a word back, and end up with something better than either version.
            That’s the whole idea. It isn’t here to write for you. It’s here to show you another way of saying the same
            thing, so that you can choose.
          </p>
          <p>
            People use it to fix a sentence that won’t sit right, to make an email sound less blunt, to bring a
            paragraph under a word limit, or to explain something technical to someone who isn’t. All of those come
            down to the same job: keep the meaning, change the wording. Paste your text into the box above and you’ll
            have a new version in a few seconds.
          </p>
        </div>
      </Section>

      <Section
        id="styles"
        number="02 · Styles"
        title="Eight styles, and when to reach for each"
        lede={<p>Each style is a different set of instructions. Here’s what they do, with a real example of each.</p>}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {STYLES.map((s) => (
            <article key={s.name} className="flex flex-col rounded-3xl border border-border bg-surface p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold">{s.name}</h3>
                <Link href={s.href} className="text-sm font-medium text-accent-text hover:underline">
                  Try {s.name} →
                </Link>
              </div>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              <div className="mt-5 space-y-3 rounded-2xl bg-surface-muted p-4 text-[0.95rem] leading-relaxed">
                <p>
                  <span className="mr-2 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">Before</span>
                  <span className="text-muted">{s.before}</span>
                </p>
                <p>
                  <span className="mr-2 font-mono text-[10px] tracking-[0.16em] text-accent-text uppercase">After</span>
                  {s.after}
                </p>
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-between rounded-3xl bg-foreground p-6 text-background sm:p-7 md:col-span-2 md:flex-row md:items-end md:gap-10">
            <div>
              <h3 className="font-display text-2xl font-semibold">Not sure which one?</h3>
              <p className="mt-2 leading-relaxed opacity-75">
                Run your text through Standard first. If it’s too casual, switch to Formal; if it’s too long, try
                Shorten; if it sounds like a machine wrote it, Humanize. Your text stays in the box while you switch, so
                trying another style takes a single click.
              </p>
            </div>
            <Link
              href="#tool"
              className="mt-6 inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-semibold text-on-accent transition hover:bg-accent-hover"
            >
              Back to the tool ↑
            </Link>
          </article>
        </div>
      </Section>

      <Section
        id="humanize"
        number="03 · Humanize AI"
        title={
          <>
            Humanize AI text without losing <span className="swash">your</span> voice
          </>
        }
        lede={
          <p>
            Drafted something with ChatGPT or another assistant and it sounds a little too polished, a little too
            pleased with itself? You’re not imagining it. Machine-written prose has a recognisable cadence, and readers
            pick up on it long before they could explain why.
          </p>
        }
      >
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Our built-in AI humanizer is the quickest way to fix that. Choose the Humanize style and it rewrites the
              draft with the irregular rhythm, plain vocabulary and economy of a person who knows what they want to say.
              It treats the job the way an AI to human text converter should: the ideas stay, the robotic delivery goes.
            </p>
            <p>
              It’s free, it works in twelve languages including Tagalog, and it won’t pretend to be a magic trick. We
              don’t promise to beat AI detectors, because no honest tool can. We promise writing that reads well, which
              is the thing that actually matters to the person on the other end.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold">Free AI humanizer</h3>
            <p className="mt-2 leading-relaxed text-muted">
              Make it sound human in one click, with examples, tips and an honest FAQ.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/humanize-ai"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-semibold text-on-accent transition hover:bg-accent-hover"
              >
                Open the AI humanizer →
              </Link>
              <Link
                href="/humanize-ai-tagalog"
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 font-medium transition hover:border-foreground"
              >
                Tagalog
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        number="04 · Tips"
        title="How to get a better rewrite"
        lede={<p>A few habits make a real difference to what comes back.</p>}
      >
        <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {TIPS.map((t, i) => (
            <li key={t.title} className="border-t border-border pt-5">
              <span className="font-display text-3xl text-accent-text italic">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{t.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="languages"
        number="05 · Languages"
        title="Write in the language you think in"
        lede={
          <p>
            Write in English, Filipino, Urdu, Arabic, Hindi, Spanish, French, German, Portuguese, Indonesian, Turkish or Bengali,
            and leave the output language on “Same as input”. The rewrite comes back in the language you wrote in, in
            the right script and direction, so Urdu and Arabic read right to left as they should.
          </p>
        }
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <p className="text-lg leading-relaxed text-muted">
            You can also pick a different output language. Write a rough draft in the language that comes naturally,
            choose English, and you get a polished English version back. It’s no substitute for a professional
            translator on legal or medical documents, but for emails, messages and first drafts it saves a lot of time.
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {LANGUAGE_PAGES.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm transition hover:border-foreground"
                >
                  <span className="font-medium">{p.h1.replace(" Paraphrasing Tool", "")}</span>
                  {p.language && p.language !== "en" && (
                    <span lang={p.language} className="text-muted">
                      {getLanguage(p.language)?.label.match(/\(([^)]+)\)/)?.[1]}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section number="06 · Who it’s for" title="Built for everyday writing">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-xl font-semibold">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section number="07 · Fair use" title="Use it honestly">
        <div className="grid gap-8 md:grid-cols-2">
          <blockquote className="self-start border-l-4 border-accent pl-6 font-display text-2xl leading-snug italic">
            A rewritten sentence is still somebody’s idea. If the idea wasn’t yours, it needs a citation, however
            different the words are.
          </blockquote>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Running another person’s essay through a paraphraser and handing it in is plagiarism, and that isn’t what
              this site is for. Use it on your own writing: your drafts, your notes, your emails.
            </p>
            <p>
              Used that way, it’s a bit like having a patient editor who will happily suggest another version as many
              times as you ask. Our guide on{" "}
              <Link href="/guides/how-to-paraphrase-without-plagiarism" className="text-accent-text underline underline-offset-2">
                paraphrasing without plagiarising
              </Link>{" "}
              explains how to do it properly.
            </p>
          </div>
        </div>
      </Section>

      <Section number="08 · Privacy" title="Your words, kept out of sight">
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          <p>
            We don’t ask who you are, and there’s nothing to sign up for. Your text is sent to the AI model only to
            produce the rewrite. So that a repeated request comes back instantly, a finished rewrite can be kept for up
            to seven days. It’s filed under a scrambled code made from your text rather than the text itself, and it’s
            never linked to you.
          </p>
          {gemini && (
            <p>
              Some requests are handled by Google’s free Gemini service. Under Google’s terms, text sent to that
              service may be used to improve Google’s products.
            </p>
          )}
          <p>
            Please don’t paste passwords, card numbers or anything you wouldn’t put in an ordinary email. The full
            details are in our{" "}
            <Link href="/privacy" className="text-accent-text underline underline-offset-2">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section number="09 · Questions" title="Frequently asked questions">
        <Faq />
      </Section>

      <section className="mx-auto mt-24 max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[32px] bg-[#1d1b18] px-6 py-14 text-center text-[#f7f4ee] ring-1 ring-border sm:px-12 sm:py-20">
          <div aria-hidden="true" className="hero-dots absolute inset-0 opacity-20" />
          <h2 className="relative font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Your next draft is <span className="text-[#fb923c] italic">one click</span> away.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg opacity-75">
            Paste your text, choose a style and see what a second version looks like. It’s free, every time.
          </p>
          <Link
            href="#tool"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-on-accent transition hover:bg-accent-hover"
          >
            Start rewriting ↑
          </Link>
        </div>
      </section>
    </>
  );
}
