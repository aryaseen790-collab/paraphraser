import Link from "next/link";
import { MAX_WORDS } from "@/config/limits";
import { MODES } from "@/config/modes";
import { Faq } from "./Faq";
import { Section } from "./Section";

/** Shorter content block used under the tool on the style and language pages. */
export function InfoSections() {
  return (
    <>
      <Section number="How it works" title="Three steps, a few seconds">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["Paste", `Type or paste up to ${MAX_WORDS.toLocaleString("en-US")} words into the box on the left.`],
            ["Pick", "Choose a style and, if you want a different language, an output language."],
            ["Polish", "The rewrite appears word by word with changes highlighted. Copy it, or tweak and run again."],
          ].map(([title, text], i) => (
            <li key={title} className="rounded-3xl border border-border bg-surface p-6">
              <span className={`tile tile-${i % 5}`}>{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-muted">
          Other styles:{" "}
          {MODES.map((m, i) => (
            <span key={m.id}>
              <strong className="font-medium text-foreground">{m.label}</strong> ({m.hint.toLowerCase()})
              {i < MODES.length - 1 ? ", " : ". "}
            </span>
          ))}
          New to paraphrasing? Read the{" "}
          <Link href="/guides" className="text-accent-text underline underline-offset-2">
            writing guides
          </Link>
          .
        </p>
      </Section>
      <Section number="Questions" title="Frequently asked questions">
        <Faq />
      </Section>
    </>
  );
}
