import type { ModeId } from "@/config/modes";
import type { Locale } from "./locales";

/** Error codes sent by /api/paraphrase (plus a few the browser raises itself). */
export const ERROR_CODES = [
  "generic",
  "invalid",
  "empty",
  "tooManyWords",
  "tooManyChars",
  "tooLarge",
  "unknownMode",
  "unknownLanguage",
  "rateLimited",
  "botCheck",
  "highDemand",
  "refusal",
  "truncated",
  "network",
  "copyFailed",
] as const;
export type ErrorCode = (typeof ERROR_CODES)[number];

/** Every piece of text shown inside the tool. Placeholders: {action} {count} {max}. */
export interface ToolStrings {
  /** BCP 47 tag for number formatting. */
  numberLocale: string;
  toolLabel: string;
  styleLabel: string;
  outputLanguage: string;
  sameAsInput: string;
  yourText: string;
  rewrite: string;
  inputLabel: string;
  placeholder: string;
  wordCount: string;
  outputWords: string;
  edit: string;
  clear: string;
  clickToEdit: string;
  rewriting: string;
  outputPlaceholder: string;
  showChanges: string;
  copy: string;
  copied: string;
  tipBefore: string;
  /** Label of the Ctrl key on keyboards in this language (e.g. "Strg" in German). */
  ctrlKey: string;
  tipAfter: string;
  overLimit: string;
  actionHumanize: string;
  actionParaphrase: string;
  busyHumanize: string;
  busyParaphrase: string;
  modes: Record<ModeId, { label: string; hint: string }>;
  errors: Record<ErrorCode, string>;
}

/** Header, footer and other text around the tool. */
export interface ChromeStrings {
  navHumanizer: string;
  navParaphraser: string;
  cta: string;
  themeToggle: string;
  languageMenu: string;
  footerTagline: string;
  footerTools: string;
  footerMore: string;
  about: string;
  privacy: string;
  terms: string;
  contact: string;
  footerNote: string;
  adLabel: string;
  facts: string[];
  before: string;
  after: string;
  otherLanguages: string;
  englishOnlyNote: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

/** A content section rendered under the tool. */
export interface ContentSection {
  id?: string;
  label: string;
  title: string;
  lede?: string;
  paragraphs?: string[];
  cards?: { title: string; text: string }[];
  examples?: { label?: string; before: string; after: string }[];
  quote?: string;
}

/** One translated page: metadata, hero, sections, FAQ and closing call to action. */
export interface LocalePageContent {
  title: string;
  description: string;
  eyebrow: string;
  /** Heading split around the highlighted word: [before, highlighted, after]. */
  h1: [string, string, string];
  intro: string;
  sections: ContentSection[];
  faqLabel: string;
  faqTitle: string;
  faq: FaqEntry[];
  cta: { title: [string, string, string]; text: string; button: string };
}

export interface Dictionary {
  locale: Locale;
  tool: ToolStrings;
  chrome: ChromeStrings;
  home: LocalePageContent;
  paraphraser: LocalePageContent;
}
