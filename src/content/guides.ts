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
    slug: "how-to-humanize-ai-content",
    title: "How to Humanize AI Content: An Editor’s Guide",
    description:
      "How to humanize AI content so it reads like a person wrote it: the tell-tale patterns, a seven-step editing method, worked examples and when to use an AI humanizer.",
    toolSlug: "",
    toolLabel: "AI Humanizer",
    sections: [
      {
        heading: "Why AI drafts need humanizing at all",
        paragraphs: [
          "Language models are, at heart, very sophisticated averaging machines. Ask one for a paragraph about remote work and it will give you something close to the statistical centre of every paragraph about remote work it has ever seen. That is precisely why the result feels flat. It is correct, inoffensive and strangely familiar, because in a sense you have read it a thousand times before.",
          "Readers notice. They may not be able to name what is wrong, but they skim, lose interest or quietly decide that the writer did not care very much. If you are using AI to draft emails, articles or product pages, learning how to humanize AI content is less about disguise and more about respect for the person reading.",
        ],
      },
      {
        heading: "Spot the patterns before you fix them",
        paragraphs: [
          "Before editing, read the draft once with a pencil in hand, metaphorically speaking, and mark the habits below. Most machine-written text displays at least three of them.",
          "Throat-clearing: openings such as “In today’s ever-evolving landscape” or “It is worth noting that” which delay the point without adding to it.",
          "Uniform sentences: one sentence after another of roughly twenty words, each with the same subject-verb-object shape. The effect is a metronome, and metronomes put people to sleep.",
          "Inflated vocabulary: delve, leverage, foster, seamless, robust, pivotal, tapestry. None of these words is banned, but a cluster of them is a reliable sign that nobody was choosing words deliberately.",
          "Compulsive symmetry: every list has three items, every paragraph has a topic sentence and a tidy conclusion, every section ends by summarising itself.",
          "Vagueness dressed as balance: “There are many factors to consider” and “It depends on various circumstances”. These sound measured but tell the reader nothing.",
        ],
      },
      {
        heading: "A seven-step method to humanize AI content",
        paragraphs: [
          "1. Cut the first sentence of every paragraph. Then read the paragraph again. More often than you would expect, it starts in the right place now. Restore the sentence only if something essential went with it.",
          "2. Replace abstractions with specifics. Wherever the draft says “various benefits”, name one. Wherever it says “many businesses”, say which kind. Specific detail is the single strongest signal that a person with real knowledge wrote the text.",
          "3. Break the rhythm on purpose. Split one long sentence into two. Merge two short ones with a dash of subordination. Allow yourself a fragment. Like this. Varied rhythm is what makes prose sound spoken rather than generated.",
          "4. Choose the plain word. Use rather than utilise, help rather than facilitate, start rather than commence. If a simpler word means the same thing, it almost always reads better.",
          "5. Commit to a view. AI hedges because it has no stake in the outcome. You do. If you think one option is better, say so and say why. Readers trust a clear position far more than a careful survey of every possibility.",
          "6. Add something only you could add: a number from your own work, a mistake you made, a customer’s exact words, a place, a date. This is the step no humanizer can perform for you, and it is the one that matters most.",
          "7. Read it aloud. Anything you stumble over, rewrite. Anything you would never say to a colleague, rephrase until you would.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Here is a typical AI-generated opening for a small bakery’s website: “In today’s competitive culinary landscape, our bakery is dedicated to delivering exceptional quality and unparalleled customer satisfaction through a seamless blend of tradition and innovation.”",
          "Apply the method. Cut the throat-clearing (“In today’s competitive culinary landscape”). Replace the abstractions (“exceptional quality”, “unparalleled customer satisfaction”) with facts. Choose plain words. Add something specific. The result: “We bake everything on the premises, starting at 4 a.m., using the same sourdough starter since 2009. If you come in before nine, the croissants are still warm.”",
          "Notice that the second version is barely longer, yet it contains real information, a recognisable voice and a reason to visit. That is what it means to turn AI text into human text: not a cosmetic shuffle of synonyms, but a shift from generic claims to particular truths.",
        ],
      },
      {
        heading: "Where an AI humanizer fits in",
        paragraphs: [
          "Doing all of this by hand for every email would be exhausting, which is why AI humanizer tools exist. A good one handles steps one, three and four reliably: it trims the preamble, varies the sentence length and replaces the inflated vocabulary. Our free AI humanizer does exactly that, in twelve languages, without asking you to sign up.",
          "What a humanizer cannot do is steps five and six. It does not know your opinion, your numbers or your customers. So the most effective workflow is a simple one: run the draft through the humanizer, then spend two or three minutes adding the details only you know. That combination produces writing that is both fluent and unmistakably yours.",
        ],
      },
      {
        heading: "A note on AI detectors and honesty",
        paragraphs: [
          "Many people search for ways to make something sound less AI because they are worried about detectors. It is worth knowing that these tools are far from dependable. They frequently flag text written entirely by people, particularly by non-native speakers, and different detectors often reach opposite verdicts on the same passage.",
          "More importantly, if your school, client or employer asks whether you used AI, the right answer is the true one. Humanizing is an editing technique, not a licence to misrepresent how a piece of work was produced. Use it to make your writing better, and be open about your process wherever openness is expected.",
        ],
      },
      {
        heading: "Quick checklist",
        paragraphs: [
          "Does every paragraph start with a point rather than a preamble? Have you named at least one specific example, figure or detail? Do your sentences vary in length? Have you replaced the buzzwords with plain language? Does the text take a clear position? Would you be comfortable reading it aloud to the person it is addressed to? If the answer to all six is yes, you have successfully humanized your AI content.",
        ],
      },
    ],
  },
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
