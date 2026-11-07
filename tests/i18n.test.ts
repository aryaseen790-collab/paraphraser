import { describe, expect, it } from "vitest";
import { MODES } from "@/config/modes";
import { EN_CHROME, EN_TOOL, fill } from "@/i18n/en";
import { DICTIONARIES } from "@/i18n/dictionaries";
import { LOCALES, LOCALE_INFO, localeAlternates } from "@/i18n/locales";
import { ERROR_CODES } from "@/i18n/types";

describe("localeAlternates", () => {
  it("gives a self canonical and hreflang links to every language plus x-default", () => {
    const a = localeAlternates("paraphraser", "fr");
    expect(a.canonical).toBe("/fr/reformuler-un-texte");
    const langs = a.languages as Record<string, string>;
    expect(Object.keys(langs).sort()).toEqual([...LOCALES.map((l) => LOCALE_INFO[l].htmlLang), "x-default"].sort());
    expect(langs["x-default"]).toBe("/paraphrasing-tool");
    expect(langs.es).toBe("/es/parafraseador");
  });

  it("uses unique paths for every language and page", () => {
    const paths = LOCALES.flatMap((l) => Object.values(LOCALE_INFO[l].paths));
    expect(new Set(paths).size).toBe(paths.length);
  });
});

describe("dictionaries", () => {
  for (const [locale, dict] of Object.entries(DICTIONARIES)) {
    describe(locale, () => {
      it("translates every tool string, style and error code", () => {
        for (const key of Object.keys(EN_TOOL)) expect(dict.tool, key).toHaveProperty(key);
        for (const m of MODES) expect(dict.tool.modes[m.id].label.length).toBeGreaterThan(0);
        for (const code of ERROR_CODES) expect(dict.tool.errors[code].length, code).toBeGreaterThan(0);
        expect(dict.tool.placeholder).toContain("{action}");
        expect(dict.tool.wordCount).toContain("{count}");
        expect(dict.tool.wordCount).toContain("{max}");
      });

      it("translates the page chrome", () => {
        for (const key of Object.keys(EN_CHROME)) expect(dict.chrome, key).toHaveProperty(key);
        expect(dict.chrome.facts).toHaveLength(4);
      });

      it("has complete, SEO-sized home and paraphraser pages", () => {
        for (const page of [dict.home, dict.paraphraser]) {
          expect(page.title.length).toBeLessThanOrEqual(46); // plus " | OG Humanizer" stays near 60
          expect(page.description.length).toBeGreaterThan(110);
          expect(page.description.length).toBeLessThanOrEqual(170);
          expect(page.sections.length).toBeGreaterThanOrEqual(4);
          expect(page.faq.length).toBeGreaterThanOrEqual(5);
          expect(page.h1[1].length).toBeGreaterThan(0);
        }
        // The two pages target different keywords.
        expect(dict.home.title).not.toBe(dict.paraphraser.title);
      });
    });
  }
});

describe("fill", () => {
  it("replaces placeholders and leaves unknown ones", () => {
    expect(fill("{count} / {max} words {x}", { count: 3, max: "1,000" })).toBe("3 / 1,000 words {x}");
  });
});
