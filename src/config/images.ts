import type { Locale } from "@/i18n/locales";

/**
 * Every illustration the layout has a slot for. Drop the file into
 * public/images/ with exactly this name and it appears on the next deploy;
 * until then a decorative placeholder fills the slot.
 * Prompts to generate each one are in IMAGE-PROMPTS.md.
 */
export interface ImageSpec {
  file: string;
  width: number;
  height: number;
  /** Alt text per language (empty string = purely decorative). */
  alt: Partial<Record<Locale, string>> & { en: string };
}

export const IMAGES = {
  heroSpark: {
    file: "/images/hero-spark.webp",
    width: 800,
    height: 800,
    alt: { en: "" },
  },
  robotToHuman: {
    file: "/images/robot-to-human.webp",
    width: 1600,
    height: 1000,
    alt: {
      en: "Stiff, machine-like text turning into warm handwriting as it passes through a highlighter",
      es: "Un texto rígido de máquina se convierte en escritura cálida y natural",
      pt: "Um texto rígido de máquina se transforma em uma escrita natural",
      fr: "Un texte rigide de machine se transforme en écriture naturelle",
      id: "Teks kaku buatan mesin berubah menjadi tulisan yang alami",
      de: "Steifer Maschinentext verwandelt sich in natürliche Handschrift",
    },
  },
  originalVoice: {
    file: "/images/original-voice.webp",
    width: 1200,
    height: 900,
    alt: { en: "A person's handwritten notes with a signature flourish, standing out from a stack of identical printed pages" },
  },
  useCases: {
    file: "/images/use-cases.webp",
    width: 1600,
    height: 1000,
    alt: {
      en: "An email, a blog post, a cover letter and a chat message, each marked with a yellow highlighter",
      es: "Un correo, un artículo, una carta de presentación y un mensaje, marcados con rotulador amarillo",
      pt: "Um e-mail, um post, uma carta de apresentação e uma mensagem, marcados com marca-texto amarelo",
      fr: "Un e-mail, un article, une lettre de motivation et un message, surlignés en jaune",
      id: "Email, artikel blog, surat lamaran, dan pesan obrolan yang ditandai stabilo kuning",
      de: "Eine E-Mail, ein Blogartikel, ein Anschreiben und eine Chatnachricht, gelb markiert",
    },
  },
  detectors: {
    file: "/images/detectors.webp",
    width: 1200,
    height: 900,
    alt: {
      en: "A magnifying glass hovering over a page with question marks, showing that AI detectors are unreliable",
      es: "Una lupa sobre una página con signos de interrogación: los detectores de IA no son fiables",
      pt: "Uma lupa sobre uma página com pontos de interrogação: detectores de IA não são confiáveis",
      fr: "Une loupe au-dessus d’une page pleine de points d’interrogation : les détecteurs d’IA ne sont pas fiables",
      id: "Kaca pembesar di atas halaman penuh tanda tanya: pendeteksi AI tidak bisa diandalkan",
      de: "Eine Lupe über einer Seite voller Fragezeichen: KI-Detektoren sind unzuverlässig",
    },
  },
  paraphraseConcept: {
    file: "/images/paraphrase-concept.webp",
    width: 1600,
    height: 1000,
    alt: {
      en: "One sentence branching into several rewritten versions, each a different color",
      es: "Una frase que se ramifica en varias versiones reescritas de distintos colores",
      pt: "Uma frase que se ramifica em várias versões reescritas, cada uma de uma cor",
      fr: "Une phrase qui se divise en plusieurs versions reformulées de couleurs différentes",
      id: "Satu kalimat yang bercabang menjadi beberapa versi baru dengan warna berbeda",
      de: "Ein Satz, der sich in mehrere umformulierte Fassungen in verschiedenen Farben aufteilt",
    },
  },
  writingDesk: {
    file: "/images/writing-desk.webp",
    width: 1200,
    height: 900,
    alt: {
      en: "A tidy desk with a laptop, a notebook and a yellow highlighter",
      es: "Un escritorio ordenado con un portátil, una libreta y un rotulador amarillo",
      pt: "Uma mesa organizada com notebook, caderno e marca-texto amarelo",
      fr: "Un bureau rangé avec un ordinateur portable, un carnet et un surligneur jaune",
      id: "Meja rapi dengan laptop, buku catatan, dan stabilo kuning",
      de: "Ein aufgeräumter Schreibtisch mit Laptop, Notizbuch und gelbem Textmarker",
    },
  },
  aboutWorkspace: {
    file: "/images/about-workspace.webp",
    width: 1600,
    height: 900,
    alt: { en: "Illustration of a small, friendly studio where OG Humanizer is built" },
  },
  guideEmail: {
    file: "/images/guide-email.webp",
    width: 1600,
    height: 900,
    alt: { en: "A casual email being transformed into a polished, professional one" },
  },
  guideSimplify: {
    file: "/images/guide-simplify.webp",
    width: 1600,
    height: 900,
    alt: { en: "A tangled ball of string unwinding into a straight, clear line" },
  },
  guidePlagiarism: {
    file: "/images/guide-plagiarism.webp",
    width: 1600,
    height: 900,
    alt: { en: "An open book with a citation bookmark next to a student's own notes" },
  },
  guideHumanize: {
    file: "/images/guide-humanize.webp",
    width: 1600,
    height: 900,
    alt: { en: "A robot handing a draft to a person, who adds a personal note in the margin" },
  },
} satisfies Record<string, ImageSpec>;

export type ImageKey = keyof typeof IMAGES;
