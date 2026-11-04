import type { ModeId } from "./modes";

/**
 * SEO landing pages. Each reuses the same tool with a different default style or
 * output language, plus its own title, heading and intro paragraph.
 */
export interface LandingPage {
  slug: string;
  mode?: ModeId;
  language?: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Optional greeting line in the page's own language (rendered with lang/dir). */
  native?: { lang: string; text: string };
  /** Small label above the heading. */
  eyebrow?: string;
  /** Long-form content block to show under the tool instead of the default. */
  content?: "humanize-tagalog";
}

export const HUMANIZER_PAGES: LandingPage[] = [
  {
    slug: "humanize-ai-tagalog",
    mode: "humanize",
    language: "tl",
    eyebrow: "AI humanizer · Tagalog",
    title: "Humanize AI Tagalog: Free Tagalog AI Humanizer",
    description:
      "Humanize AI text in Tagalog for free. Make Filipino drafts written with AI sound natural and conversational. No sign-up needed.",
    h1: "Humanize AI text in Tagalog",
    intro:
      "Drafted something in Filipino with the help of AI and it sounds a little too textbook? Paste it below. The Tagalog humanizer rewrites it in natural, everyday Filipino, keeping your meaning, names and numbers intact.",
    native: { lang: "tl", text: "Gawing natural at parang tao ang sulat mo." },
    content: "humanize-tagalog",
  },
];

export const MODE_PAGES: LandingPage[] = [
  {
    slug: "sentence-rewriter",
    mode: "standard",
    title: "Free Sentence Rewriter",
    description: "Rewrite sentences and paragraphs with fresh wording while keeping the meaning. Free, no sign-up.",
    h1: "Sentence Rewriter",
    intro:
      "Stuck with a sentence that sounds repetitive? Paste it below and get the same idea back in new words, with a similar length and a neutral tone.",
  },
  {
    slug: "formal-paraphraser",
    mode: "formal",
    title: "Formal Paraphraser: Make Text Professional",
    description: "Turn casual writing into polished, professional text for emails, reports and applications. Free formal paraphrasing tool.",
    h1: "Formal Paraphraser",
    intro:
      "Turn a casual draft into polished, professional writing. Good for work emails, cover letters, reports and applications: contractions and slang are replaced with a clear, formal tone.",
  },
  {
    slug: "fluent-paraphraser",
    mode: "fluent",
    title: "Fluent Paraphraser: Make Writing Sound Natural",
    description: "Fix awkward phrasing and make your writing read smoothly, like a native speaker wrote it. Free and instant.",
    h1: "Fluent Paraphraser",
    intro:
      "Writing in a second language, or just in a hurry? The Fluent style smooths out awkward phrasing, grammar slips and repetition so your text reads naturally.",
  },
  {
    slug: "simple-paraphraser",
    mode: "simple",
    title: "Text Simplifier: Make Writing Easy to Read",
    description: "Simplify complex text into plain, everyday language with short sentences. Free text simplifier.",
    h1: "Text Simplifier",
    intro:
      "Make dense or technical writing easy for anyone to understand. The Simple style uses everyday words and short sentences, ideal for explanations, instructions and study notes.",
  },
  {
    slug: "creative-paraphraser",
    mode: "creative",
    title: "Creative Paraphraser: Rewrite With Flair",
    description: "Rewrite text with vivid, expressive language for stories, captions, blogs and marketing copy. Free creative rewriter.",
    h1: "Creative Paraphraser",
    intro:
      "Give flat writing more personality. The Creative style restructures sentences and chooses vivid words, while keeping every fact the same. Great for blogs, captions and product copy.",
  },
  {
    slug: "text-shortener",
    mode: "shorten",
    title: "Text Shortener: Make Writing Concise",
    description: "Cut your text by 30 to 50 percent without losing the key points. Free tool to shorten paragraphs and essays.",
    h1: "Text Shortener",
    intro:
      "Over the word limit? The Shorten style trims filler and repetition, typically cutting 30 to 50 percent of the words while keeping every key point.",
  },
  {
    slug: "text-expander",
    mode: "expand",
    title: "Text Expander: Make Writing Longer",
    description: "Expand short text with more detail and smoother transitions without adding new facts. Free paragraph expander.",
    h1: "Text Expander",
    intro:
      "Need a fuller version of a short draft? The Expand style elaborates on what you already wrote, adding detail and transitions, without inventing new facts or numbers.",
  },
];

export const LANGUAGE_PAGES: LandingPage[] = [
  {
    slug: "english-paraphrasing-tool",
    language: "en",
    title: "English Paraphrasing Tool",
    description: "Free English paraphrasing tool with eight styles, from formal to simple. No sign-up needed.",
    h1: "English Paraphrasing Tool",
    intro:
      "Rewrite English text in eight styles. Paste text in another language and it will be paraphrased into clear English, which helps when you draft in your first language.",
  },
  {
    slug: "urdu-paraphrasing-tool",
    language: "ur",
    title: "Urdu Paraphrasing Tool (اردو)",
    description: "Free Urdu paraphrasing tool. Rewrite Urdu text in formal, simple or fluent style. No sign-up.",
    h1: "Urdu Paraphrasing Tool",
    intro:
      "Paste Urdu text to rewrite it in a formal, simple or fluent style. The output is written in Urdu script, right to left.",
    native: { lang: "ur", text: "اپنی اردو تحریر کو نئے الفاظ میں لکھیں۔" },
  },
  {
    slug: "arabic-paraphrasing-tool",
    language: "ar",
    title: "Arabic Paraphrasing Tool (العربية)",
    description: "Free Arabic paraphrasing tool for rewriting Arabic text in different styles. No sign-up required.",
    h1: "Arabic Paraphrasing Tool",
    intro:
      "Rewrite Arabic text in Modern Standard Arabic with a formal, simple or creative style, keeping names and numbers intact.",
    native: { lang: "ar", text: "أعد صياغة النصوص العربية بسهولة." },
  },
  {
    slug: "hindi-paraphrasing-tool",
    language: "hi",
    title: "Hindi Paraphrasing Tool (हिन्दी)",
    description: "Free Hindi paraphrasing tool. Rewrite Hindi text in Devanagari in eight styles. No sign-up.",
    h1: "Hindi Paraphrasing Tool",
    intro:
      "Paste Hindi text to get a fresh version in Devanagari script, whether you need it simpler, more formal or shorter.",
    native: { lang: "hi", text: "अपने हिन्दी लेख को नए शब्दों में लिखें।" },
  },
  {
    slug: "spanish-paraphrasing-tool",
    language: "es",
    title: "Spanish Paraphrasing Tool (Parafraseador en Español)",
    description: "Parafraseador gratis en español. Free Spanish paraphrasing tool with formal, simple and creative styles.",
    h1: "Spanish Paraphrasing Tool",
    intro:
      "Rewrite Spanish essays, emails and posts in a new style, from formal to creative, with no account needed.",
    native: { lang: "es", text: "Parafrasea textos en español al instante." },
  },
  {
    slug: "french-paraphrasing-tool",
    language: "fr",
    title: "French Paraphrasing Tool (Reformulateur de Texte)",
    description: "Reformulez vos textes en français gratuitement. Free French paraphrasing tool in eight styles.",
    h1: "French Paraphrasing Tool",
    intro:
      "Rewrite French text in a more formal, fluent or concise way: useful for letters, coursework and professional emails.",
    native: { lang: "fr", text: "Reformulez vos phrases en français." },
  },
  {
    slug: "german-paraphrasing-tool",
    language: "de",
    title: "German Paraphrasing Tool (Umformulieren)",
    description: "Texte kostenlos umformulieren. Free German paraphrasing tool with formal and simple styles.",
    h1: "German Paraphrasing Tool",
    intro:
      "Rewrite German text with clearer wording or a more formal register, for applications, emails and study work.",
    native: { lang: "de", text: "Texte auf Deutsch umformulieren." },
  },
  {
    slug: "portuguese-paraphrasing-tool",
    language: "pt",
    title: "Portuguese Paraphrasing Tool (Parafrasear Texto)",
    description: "Parafraseador grátis em português. Free Portuguese paraphrasing tool, no sign-up.",
    h1: "Portuguese Paraphrasing Tool",
    intro:
      "Rewrite Portuguese text in eight styles, from simple to formal, keeping your meaning intact.",
    native: { lang: "pt", text: "Parafraseie textos em português com facilidade." },
  },
  {
    slug: "indonesian-paraphrasing-tool",
    language: "id",
    title: "Indonesian Paraphrasing Tool (Parafrase Bahasa Indonesia)",
    description: "Alat parafrase Bahasa Indonesia gratis. Free Indonesian paraphrasing tool.",
    h1: "Indonesian Paraphrasing Tool",
    intro:
      "Rewrite Indonesian text for assignments, articles and messages in the style you need.",
    native: { lang: "id", text: "Parafrase kalimat Bahasa Indonesia secara gratis." },
  },
  {
    slug: "turkish-paraphrasing-tool",
    language: "tr",
    title: "Turkish Paraphrasing Tool (Metin Yeniden Yazma)",
    description: "Ücretsiz Türkçe metin yeniden yazma aracı. Free Turkish paraphrasing tool.",
    h1: "Turkish Paraphrasing Tool",
    intro:
      "Rewrite Turkish text in a fresh, formal or simplified style while keeping names and numbers unchanged.",
    native: { lang: "tr", text: "Türkçe metinlerinizi yeniden yazın." },
  },
  {
    slug: "bengali-paraphrasing-tool",
    language: "bn",
    title: "Bengali Paraphrasing Tool (বাংলা)",
    description: "Free Bengali paraphrasing tool. Rewrite Bangla text in different styles, no sign-up.",
    h1: "Bengali Paraphrasing Tool",
    intro:
      "Paste Bengali text to rewrite it in Bangla script, simpler, more formal or more concise.",
    native: { lang: "bn", text: "আপনার বাংলা লেখা নতুন ভাষায় লিখুন।" },
  },
];

export const LANDING_PAGES: LandingPage[] = [...HUMANIZER_PAGES, ...MODE_PAGES, ...LANGUAGE_PAGES];

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug);
}
