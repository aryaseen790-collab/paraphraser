import { MAX_WORDS } from "@/config/limits";

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "Is it really free?",
    a: `Yes. There’s no sign-up and no daily credit counter. Each request can be up to ${MAX_WORDS.toLocaleString("en-US")} words, and you can run as many as you need for normal writing. Ads next to the tool cover the running costs.`,
  },
  {
    q: "Why is there a 1,000-word limit?",
    a: "Every rewrite costs a little to run, and shorter requests come back faster and stay closer to your meaning. If your text is longer, paste it in a section at a time. Splitting at a heading or a paragraph break works best.",
  },
  {
    q: "Will the rewrite change what I meant?",
    a: "It’s told to keep your meaning, facts, names and numbers exactly as they are, and it’s good at that. It can still slip now and then, so read the result before you use it. The highlighted words show you exactly what changed.",
  },
  {
    q: "Do you keep my text?",
    a: "Not in readable form, and never linked to you. A finished rewrite may be kept for up to seven days so that the same request comes back instantly. The privacy policy has the details.",
  },
  {
    q: "Can I use it for school or university?",
    a: "On your own work, yes, as long as your course allows help from writing tools. Check the rules first. Rewording someone else’s work and handing it in as yours is plagiarism, whatever tool you use.",
  },
  {
    q: "Why did I see a “high demand” message?",
    a: "To keep the site free there’s a daily limit on running costs, and on very busy days the tool may pause for a short while. Wait a few minutes and try again. Your text stays in the box.",
  },
  {
    q: "Does it work on my phone?",
    a: "Yes. The site was designed for small screens first. Paste your text, tap a style, and the rewrite appears right under it, ready to copy.",
  },
];

export function faqJsonLd(items: FaqItem[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
