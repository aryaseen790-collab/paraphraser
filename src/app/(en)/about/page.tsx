import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { Illustration } from "@/components/Illustration";
import { usesClaude, usesGemini } from "@/config/ai";
import { MAX_WORDS } from "@/config/limits";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Why ${siteConfig.name} exists, what “OG” stands for, how the AI humanizer works and how it stays free.`,
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
      <div className="my-8">
        <Illustration name="aboutWorkspace" priority sizes="(min-width: 768px) 720px, 100vw" />
      </div>
      <p>
        {siteConfig.name} began with a small, persistent irritation. AI tools had made it effortless to produce words,
        and somehow harder than ever to find writing that sounded like a person. Emails, cover letters and blog posts
        were arriving perfectly groomed and entirely interchangeable. We wanted a simple, free way to take a draft like
        that and give it its voice back.
      </p>
      <p>
        The OG in the name stands for original. Our view is that the best version of any piece of writing is the one
        that sounds like the person who wrote it, quirks and all, and that a tool’s job is to clear the way for that
        voice rather than replace it.
      </p>

      <h2>What it does</h2>
      <p>
        At its heart, {siteConfig.name} is an AI humanizer: paste in text that reads as machine-made and it comes back
        with more natural rhythm, plainer words and none of the stock phrases. Alongside it sits a full{" "}
        <Link href="/paraphrasing-tool">paraphrasing tool</Link> with seven more styles (Standard, Fluent, Formal,
        Simple, Creative, Shorten and Expand). You can work with up to {MAX_WORDS.toLocaleString("en-US")} words at a
        time in twelve languages, including Filipino, Urdu, Arabic and Hindi, and every change is highlighted so you can
        check it at a glance.
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

      <h2>What we won’t promise</h2>
      <p>
        We don’t claim that humanized text will slip past AI detectors. Those tools are unreliable, and building a
        product around fooling them would be dishonest. We do claim that your writing will read better.
      </p>

      <h2>Using it fairly</h2>
      <p>
        This is a tool for improving your own writing. Please don’t use it to reword other people’s work and pass it off
        as yours, and if your school or employer asks you to disclose AI assistance, disclose it. Our <Link href="/terms">Terms of Use</Link> and <Link href="/privacy">Privacy Policy</Link> explain the
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
