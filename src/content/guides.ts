export interface Guide {
  slug: string;
  title: string;
  description: string;
  /** Landing page slug of the tool this guide links to. */
  toolSlug: string;
  toolLabel: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const GUIDES: Guide[] = [
  {
    slug: "how-to-rewrite-an-email-formally",
    title: "How to Rewrite an Email Formally",
    description: "Turn a casual email into a polished, professional message in five simple steps, with examples.",
    toolSlug: "formal-paraphraser",
    toolLabel: "Formal Paraphraser",
    sections: [
      {
        heading: "Why tone matters",
        paragraphs: [
          "The same request can sound friendly, careless or professional depending on the words you choose. In work email, a formal tone signals respect and makes it easier for the reader to act on what you ask.",
        ],
      },
      {
        heading: "Five steps to a formal email",
        paragraphs: [
          "1. Start with a proper greeting, such as \"Dear Ms. Khan,\" instead of \"Hey\".",
          "2. Replace contractions: write \"I am\" and \"do not\" instead of \"I'm\" and \"don't\".",
          "3. Swap slang and filler for precise words: \"I wanted to check\" becomes \"I am writing to ask\".",
          "4. State your request clearly in one or two sentences, and add a deadline if there is one.",
          "5. Close politely, for example \"Kind regards,\" followed by your full name.",
        ],
      },
      {
        heading: "Example",
        paragraphs: [
          "Casual: \"Hey, just checking if you got my report? Need it signed off by Friday, thanks!\"",
          "Formal: \"Dear Mr. Ali, I am writing to confirm that you received my report. Could you please approve it by Friday? Thank you for your time.\"",
        ],
      },
      {
        heading: "Let the tool do the first pass",
        paragraphs: [
          "Paste your draft into the Formal style, then read the result and adjust names, dates and anything personal. The changed words are highlighted, so you can quickly check nothing important was lost.",
        ],
      },
    ],
  },
  {
    slug: "how-to-simplify-text",
    title: "How to Simplify Complex Text",
    description: "Practical techniques to make dense writing easy to read: shorter sentences, plain words and clear structure.",
    toolSlug: "simple-paraphraser",
    toolLabel: "Text Simplifier",
    sections: [
      {
        heading: "Who simple writing helps",
        paragraphs: [
          "Plain language helps everyone: readers in a hurry, people reading in a second language, and anyone new to a topic. Simple does not mean childish. It means the reader understands on the first read.",
        ],
      },
      {
        heading: "Techniques that work",
        paragraphs: [
          "Keep sentences short, ideally under 20 words, with one idea each.",
          "Prefer common words: \"use\" instead of \"utilise\", \"help\" instead of \"facilitate\".",
          "Write in the active voice: \"The team approved the plan\" instead of \"The plan was approved by the team\".",
          "Explain any technical term the first time you use it, or replace it with a description.",
          "Break long paragraphs into lists when you describe steps or options.",
        ],
      },
      {
        heading: "Using the Simple style",
        paragraphs: [
          "The Simple style applies these rules automatically. It is especially useful for instructions, study notes, health information and messages to customers. Review the output to make sure no important detail was dropped.",
        ],
      },
    ],
  },
  {
    slug: "how-to-paraphrase-without-plagiarism",
    title: "How to Paraphrase Without Plagiarising",
    description: "What good paraphrasing is, when you still need to cite, and how to use AI tools honestly.",
    toolSlug: "sentence-rewriter",
    toolLabel: "Sentence Rewriter",
    sections: [
      {
        heading: "Paraphrasing is not a way to hide copying",
        paragraphs: [
          "Paraphrasing means expressing an idea in your own words. If the idea came from someone else, you still need to credit them, even when every word is different. Changing words does not change who did the thinking.",
        ],
      },
      {
        heading: "A simple, honest process",
        paragraphs: [
          "1. Read the source until you understand it, then close it.",
          "2. Write the idea from memory, in your own words.",
          "3. Compare with the source to check accuracy and that you did not copy phrases.",
          "4. Add a citation in the style your teacher or publication requires.",
        ],
      },
      {
        heading: "Where an AI paraphraser fits",
        paragraphs: [
          "Use a paraphrasing tool to polish writing that is already yours: to fix awkward sentences, change the tone, or shorten a draft. Do not use it to rewrite other people's work and submit it as your own, and check whether your school or employer allows AI assistance.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
