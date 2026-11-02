import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { usesClaude, usesGemini } from "@/config/ai";
import { MAX_WORDS } from "@/config/limits";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Why ${siteConfig.name} exists, how it works and how it stays free.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const model =
    usesGemini() && usesClaude()
      ? "Google’s Gemini, with Anthropic’s Claude as a backup"
      : usesGemini()
        ? "Google’s Gemini"
        : "Claude, a model made by Anthropic";

  return (
    <ContentPage>
      <h1>About {siteConfig.name}</h1>
      <p>
        {siteConfig.name} started from a simple frustration. Most paraphrasing sites let you try a couple of sentences,
        then ask you to sign up, count down a daily allowance, or hide the useful styles behind a paywall. We wanted
        one that just works: paste your text, pick a style, get a better version.
      </p>

      <h2>What it does</h2>
      <p>
        You can rewrite up to {MAX_WORDS.toLocaleString("en-US")} words at a time in eight styles: Standard, Humanize,
        Fluent, Formal, Simple, Creative, Shorten and Expand. It works in English, Urdu, Arabic, Hindi, Spanish, French,
        Filipino and several other languages. The rewrite appears as it’s written, and the words that changed are highlighted so you
        can check them at a glance.
      </p>

      <h2>How it works</h2>
      <p>
        The rewriting is done by an AI model, currently {model}. Each style is a different set of instructions, and
        every one of them says the same thing first: keep the meaning, the facts, the names and the numbers, and change
        only the way the text is written. The model is good at following that, but it isn’t perfect, so we always
        suggest reading the result before you use it.
      </p>

      <h2>How it stays free</h2>
      <p>
        Every rewrite costs us a small amount to run. Ads shown next to the tool, never on top of it, pay for that. To
        stop bots from running up the bill, there are a few checks in the background that ordinary visitors never
        notice. On very busy days the tool may pause for a few minutes rather than run out of budget.
      </p>

      <h2>Using it fairly</h2>
      <p>
        This is a tool for improving your own writing. Please don’t use it to reword other people’s work and pass it off
        as yours. Our <Link href="/terms">Terms of Use</Link> and <Link href="/privacy">Privacy Policy</Link> explain the
        details, and the <Link href="/guides">writing guides</Link> show how to get the most out of it.
      </p>

      <h2>Get in touch</h2>
      <p>
        Found a bug, or have an idea for a new style or language? We read every message. Write to us through the{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </ContentPage>
  );
}
