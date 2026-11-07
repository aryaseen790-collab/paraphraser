/**
 * The paraphrase endpoint streams plain UTF-8 text. If something goes wrong after
 * streaming has started, the server appends this marker followed by a JSON object
 * { error?: string, notice?: string }. Normal text never contains a NUL character.
 */
export const CONTROL_MARKER = "\u0000";

export interface StreamControl {
  error?: string;
  notice?: string;
  /** Machine-readable reason, so the browser can show a translated message. */
  code?: string;
}

export function encodeControl(control: StreamControl): string {
  return CONTROL_MARKER + JSON.stringify(control);
}

export function splitStream(raw: string): { text: string; control: StreamControl | null } {
  const idx = raw.indexOf(CONTROL_MARKER);
  if (idx === -1) return { text: raw, control: null };
  const text = raw.slice(0, idx);
  try {
    return { text, control: JSON.parse(raw.slice(idx + 1)) as StreamControl };
  } catch {
    // The JSON may still be arriving; treat it as pending.
    return { text, control: null };
  }
}
