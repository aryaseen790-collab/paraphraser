export type ModeId = "standard" | "humanize" | "fluent" | "formal" | "simple" | "creative" | "shorten" | "expand";

export interface Mode {
  id: ModeId;
  label: string;
  /** Short hint shown in the UI. */
  hint: string;
  /** Instruction appended to the system prompt. */
  instruction: string;
  /** Multiplier on max_tokens relative to the default (shorter/longer modes). */
  outputScale: number;
}

export const MODES: Mode[] = [
  {
    id: "standard",
    label: "Standard",
    hint: "Fresh wording, same meaning",
    instruction:
      "Style: Standard. Reword the text using different vocabulary and sentence structures while keeping a similar length and a neutral tone.",
    outputScale: 1,
  },
  {
    id: "humanize",
    label: "Humanize",
    hint: "Natural, human-sounding",
    instruction:
      "Style: Humanize. The text may sound stiff, generic or machine-written. Rewrite it so it reads as if a thoughtful person wrote it in a natural voice: vary sentence length and rhythm, prefer plain and specific words over buzzwords, remove filler and stock phrases (such as \"in today's fast-paced world\", \"delve into\", \"it is important to note that\", \"in conclusion\"), use contractions where they sound natural, and avoid overly symmetrical lists or headings that were not needed. Keep the meaning, every fact and roughly the same length.",
    outputScale: 1.1,
  },
  {
    id: "fluent",
    label: "Fluent",
    hint: "Smooth and natural",
    instruction:
      "Style: Fluent. Make the text read smoothly and naturally, as a skilled native writer would. Fix grammar, awkward phrasing and repetition. Keep a similar length.",
    outputScale: 1,
  },
  {
    id: "formal",
    label: "Formal",
    hint: "Professional tone",
    instruction:
      "Style: Formal. Rewrite in a professional, polished register suitable for business or academic writing. Avoid contractions, slang and casual phrasing. Keep a similar length.",
    outputScale: 1,
  },
  {
    id: "simple",
    label: "Simple",
    hint: "Easy to read",
    instruction:
      "Style: Simple. Rewrite in plain, everyday words and short sentences that a 12-year-old could understand. Replace jargon with simple explanations where needed.",
    outputScale: 1.1,
  },
  {
    id: "creative",
    label: "Creative",
    hint: "Vivid and expressive",
    instruction:
      "Style: Creative. Rewrite with vivid, varied and expressive language. You may restructure sentences freely, but the meaning and every fact must stay the same.",
    outputScale: 1.1,
  },
  {
    id: "shorten",
    label: "Shorten",
    hint: "Fewer words",
    instruction:
      "Style: Shorten. Make the text noticeably more concise, roughly 30 to 50 percent fewer words, while keeping every key point.",
    outputScale: 0.8,
  },
  {
    id: "expand",
    label: "Expand",
    hint: "More detail",
    instruction:
      "Style: Expand. Make the text about 1.5 times longer by elaborating on the points already made: add clarifying detail, examples of what is already stated, and smoother transitions. Do not introduce new facts, claims or numbers.",
    outputScale: 1.6,
  },
];

export const DEFAULT_MODE: ModeId = "standard";

export function getMode(id: string): Mode | undefined {
  return MODES.find((m) => m.id === id);
}
