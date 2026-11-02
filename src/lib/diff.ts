import { diffWords } from "diff";

export interface Segment {
  text: string;
  changed: boolean;
}

export interface DiffResult {
  original: Segment[];
  rewrite: Segment[];
}

/**
 * Word-level diff between the original and the rewrite, computed in the browser.
 * Returns null when the texts share nothing (e.g. a translation), where
 * highlighting every word would just be noise.
 */
export function computeDiff(original: string, rewrite: string): DiffResult | null {
  const changes = diffWords(original, rewrite, { ignoreCase: false, timeout: 400 });
  if (!changes) return null; // gave up: too different / too slow

  const result: DiffResult = { original: [], rewrite: [] };
  let unchangedWords = 0;
  for (const c of changes) {
    if (c.added) {
      result.rewrite.push({ text: c.value, changed: true });
    } else if (c.removed) {
      result.original.push({ text: c.value, changed: true });
    } else {
      result.original.push({ text: c.value, changed: false });
      result.rewrite.push({ text: c.value, changed: false });
      if (/[\p{L}\p{N}]/u.test(c.value)) unchangedWords++;
    }
  }
  return unchangedWords === 0 ? null : result;
}
