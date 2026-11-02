import Link from "next/link";
import { MAX_WORDS } from "@/config/limits";
import { MODES } from "@/config/modes";

const faqs = [
  {
    q: "Is it really free?",
    a: `Yes. There is no sign-up and no daily credit counter. You can paraphrase up to ${MAX_WORDS.toLocaleString("en-US")} words at a time. Ads beside the tool help pay for it.`,
  },
  {
    q: "Do you store my text?",
    a: "Your text is sent to our server and to the AI model only to create the rewrite. To make repeat requests fast, an identical request may be cached for up to 7 days under a one-way hash. We never sell your text or use it to build profiles.",
  },
  {
    q: "Which languages are supported?",
    a: "English, Urdu, Arabic, Hindi, Spanish, French, German, Portuguese, Indonesian, Turkish, Bengali and more. Leave the output language on \"Same as input\" to keep the language of your text, or pick one to rewrite into it.",
  },
  {
    q: "Can I use it for school or work?",
    a: "Use it to improve your own writing. Rewording someone else's work and presenting it as yours is still plagiarism. Check your school's or employer's rules on AI tools.",
  },
];

export function InfoSections() {
  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <section>
        <h2 className="mb-3 text-xl font-semibold">How it works</h2>
        <ol className="list-decimal space-y-2 pl-5 text-muted">
          <li>Paste or type up to {MAX_WORDS.toLocaleString("en-US")} words.</li>
          <li>Pick a style and, if you like, an output language.</li>
          <li>Press Paraphrase. The rewrite appears word by word, with changed words highlighted.</li>
          <li>Copy the result, or tweak the original and try another style.</li>
        </ol>
        <h2 className="mt-8 mb-3 text-xl font-semibold">Seven writing styles</h2>
        <ul className="space-y-1.5 text-muted">
          {MODES.map((m) => (
            <li key={m.id}>
              <strong className="text-foreground">{m.label}:</strong> {m.hint.toLowerCase()}.
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          New to paraphrasing? Read our <Link href="/guides" className="text-accent underline">short writing guides</Link>.
        </p>
      </section>
      <section>
        <h2 className="mb-3 text-xl font-semibold">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-surface p-4">
              <summary className="cursor-pointer list-none font-medium marker:hidden">
                <span className="mr-2 inline-block text-accent transition group-open:rotate-90">›</span>
                {f.q}
              </summary>
              <p className="mt-2 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
