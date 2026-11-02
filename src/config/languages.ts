export interface Language {
  id: string;
  /** English name, used in the prompt. */
  name: string;
  /** Name as shown in the dropdown. */
  label: string;
}

export const AUTO_LANGUAGE = "auto";

export const LANGUAGES: Language[] = [
  { id: AUTO_LANGUAGE, name: "Auto-detect", label: "Same as input" },
  { id: "en", name: "English", label: "English" },
  { id: "ur", name: "Urdu", label: "Urdu (اردو)" },
  { id: "ar", name: "Arabic", label: "Arabic (العربية)" },
  { id: "hi", name: "Hindi", label: "Hindi (हिन्दी)" },
  { id: "es", name: "Spanish", label: "Spanish (Español)" },
  { id: "fr", name: "French", label: "French (Français)" },
  { id: "de", name: "German", label: "German (Deutsch)" },
  { id: "pt", name: "Portuguese", label: "Portuguese (Português)" },
  { id: "id", name: "Indonesian", label: "Indonesian (Bahasa Indonesia)" },
  { id: "tr", name: "Turkish", label: "Turkish (Türkçe)" },
  { id: "bn", name: "Bengali", label: "Bengali (বাংলা)" },
  { id: "tl", name: "Filipino (Tagalog)", label: "Filipino (Tagalog)" },
];

export function getLanguage(id: string): Language | undefined {
  return LANGUAGES.find((l) => l.id === id);
}
