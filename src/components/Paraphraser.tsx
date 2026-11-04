"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AUTO_LANGUAGE, LANGUAGES } from "@/config/languages";
import { DEFAULT_MODE, MODES, type ModeId } from "@/config/modes";
import { MAX_CHARS, MAX_WORDS } from "@/config/limits";
import { computeDiff, type Segment } from "@/lib/diff";
import { splitStream } from "@/lib/stream-protocol";
import { countWords } from "@/lib/text";
import { useTurnstile } from "./useTurnstile";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Status = "idle" | "loading" | "streaming" | "done" | "error";

interface ParaphraserProps {
  defaultMode?: ModeId;
  defaultLanguage?: string;
}

function Highlighted({ segments, kind }: { segments: Segment[]; kind: "added" | "removed" }) {
  const cls =
    kind === "added"
      ? "rounded-sm bg-added-bg text-added-fg"
      : "rounded-sm bg-removed-bg text-removed-fg";
  return (
    <>
      {segments.map((s, i) =>
        s.changed ? (
          <mark key={i} className={cls}>
            {s.text}
          </mark>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

export function Paraphraser({ defaultMode = DEFAULT_MODE, defaultLanguage = AUTO_LANGUAGE }: ParaphraserProps) {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<ModeId>(defaultMode);
  const [language, setLanguage] = useState(defaultLanguage);
  const [output, setOutput] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showChanges, setShowChanges] = useState(true);
  const [editing, setEditing] = useState(true);
  const abortRef = useRef<AbortController | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const turnstile = useTurnstile(TURNSTILE_SITE_KEY);

  const words = countWords(text);
  const overLimit = words > MAX_WORDS || text.trim().length > MAX_CHARS;
  const busy = status === "loading" || status === "streaming";
  const canSubmit = words > 0 && !overLimit && !busy;

  useEffect(() => () => abortRef.current?.abort(), []);

  const diff = useMemo(
    () => (status === "done" && output ? computeDiff(sourceText, output) : null),
    [status, output, sourceText],
  );
  const highlight = showChanges && diff !== null;
  const showOriginalDiff = highlight && !editing && text.trim() === sourceText;

  const paraphrase = useCallback(async () => {
    if (!canSubmit) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const submitted = text.trim();
    setSourceText(submitted);
    setStatus("loading");
    setOutput("");
    setMessage(null);
    setCopied(false);

    const send = async () => {
      const turnstileToken = await turnstile.getToken();
      return fetch("/api/paraphrase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: submitted, mode, language, turnstileToken }),
        signal: controller.signal,
      });
    };

    try {
      let res: Response;
      try {
        res = await send();
        // A rejected bot-check token (e.g. expired) gets one silent retry with a fresh token.
        if (res.status === 403 && !controller.signal.aborted) res = await send();
      } catch (err) {
        if ((err as Error).name === "AbortError") throw err;
        if ((err as Error).message.startsWith("Turnstile")) {
          setMessage("We couldn't verify your browser. Please refresh the page and try again.");
          setStatus("error");
          return;
        }
        throw err;
      }

      if (!res.ok || !res.body) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setMessage(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("streaming");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let raw = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        raw += decoder.decode(value, { stream: true });
        setOutput(splitStream(raw).text);
      }
      raw += decoder.decode();

      const { text: finalText, control } = splitStream(raw);
      setOutput(finalText);
      if (control?.error) {
        setMessage(control.error);
        setStatus(finalText ? "done" : "error");
      } else {
        if (control?.notice) setMessage(control.notice);
        setStatus("done");
        setEditing(false);
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }, [canSubmit, text, mode, language, turnstile]);

  function clearAll() {
    abortRef.current?.abort();
    setText("");
    setOutput("");
    setSourceText("");
    setMessage(null);
    setStatus("idle");
    setCopied(false);
    setEditing(true);
    textareaRef.current?.focus();
  }

  function startEditing() {
    setEditing(true);
    requestAnimationFrame(() => textareaRef.current?.focus());
  }

  async function copyOutput() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setMessage("Couldn't copy automatically. Select the text and copy it manually.");
    }
  }

  const outputWords = countWords(output);
  const actionLabel = mode === "humanize" ? "Humanize" : "Paraphrase";
  const panelText = "min-h-56 flex-1 px-4 py-3 text-[1.0625rem] leading-relaxed sm:px-5 md:min-h-80";

  return (
    <section aria-label="Paraphrasing tool" className="relative rounded-[28px] border border-border bg-surface shadow-card">
      {/* Controls */}
      <div className="flex flex-col gap-3 border-b border-border p-3 sm:p-4 xl:flex-row xl:items-center xl:justify-between">
        <div role="radiogroup" aria-label="Style" className="-mx-1 flex min-w-0 gap-1.5 overflow-x-auto px-1 pb-1 md:flex-wrap md:overflow-visible md:pb-0">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              role="radio"
              aria-checked={mode === m.id}
              title={m.hint}
              onClick={() => setMode(m.id)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                mode === m.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-surface text-muted hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <label className="flex min-w-0 items-center gap-2 text-sm text-muted">
          <span className="shrink-0">Output language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full min-w-0 rounded-full border border-border bg-surface px-3.5 py-1.5 text-foreground md:w-auto xl:max-w-64"
          >
            {LANGUAGES.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Panels: original left, rewrite right (stacked on phones) */}
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col border-b border-border md:border-r md:border-b-0">
          <div className="px-4 pt-4 font-mono text-[11px] tracking-[0.16em] text-muted uppercase sm:px-5">Your text</div>
          {showOriginalDiff ? (
            <div
              dir="auto"
              role="button"
              tabIndex={0}
              title="Click to edit"
              onClick={startEditing}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  startEditing();
                }
              }}
              className={`${panelText} cursor-text whitespace-pre-wrap`}
            >
              <Highlighted segments={diff!.original} kind="removed" />
            </div>
          ) : (
            <>
              <label htmlFor="input-text" className="sr-only">
                Text to paraphrase
              </label>
              <textarea
                id="input-text"
                ref={textareaRef}
                dir="auto"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setEditing(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault();
                    void paraphrase();
                  }
                }}
                placeholder={`Paste or type your text here, then press ${actionLabel}.`}
                className={`${panelText} resize-y bg-transparent outline-none placeholder:text-muted/70`}
              />
            </>
          )}
          <div className="flex items-center justify-between gap-2 px-4 pb-3 text-sm sm:px-5">
            <span className={overLimit ? "font-medium text-red-600 dark:text-red-400" : "text-muted"} aria-live="polite">
              {words.toLocaleString("en-US")} / {MAX_WORDS.toLocaleString("en-US")} words
            </span>
            <div className="flex items-center gap-1">
              {showOriginalDiff && (
                <button
                  type="button"
                  onClick={startEditing}
                  className="rounded-full px-3 py-1.5 text-muted hover:bg-surface-muted hover:text-foreground"
                >
                  Edit
                </button>
              )}
              <button
                type="button"
                onClick={clearAll}
                disabled={!text && !output}
                className="rounded-full px-3 py-1.5 text-muted hover:bg-surface-muted hover:text-foreground disabled:opacity-40"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="px-4 pt-4 font-mono text-[11px] tracking-[0.16em] text-muted uppercase sm:px-5">Rewrite</div>
          <div dir="auto" aria-live="polite" aria-busy={busy} className={`${panelText} whitespace-pre-wrap`}>
            {status === "loading" && <span className="animate-pulse text-muted">Rewriting…</span>}
            {highlight ? <Highlighted segments={diff!.rewrite} kind="added" /> : output}
            {status === "streaming" && (
              <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-accent align-middle" />
            )}
            {status === "idle" && !output && (
              <span className="text-muted/70">Your rewritten text will appear here.</span>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 pb-3 text-sm sm:px-5">
            <span className="text-muted">{output ? `${outputWords.toLocaleString("en-US")} words` : ""}</span>
            <div className="flex items-center gap-1">
              {diff && (
                <label className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1.5 text-muted select-none hover:text-foreground">
                  <input
                    type="checkbox"
                    checked={showChanges}
                    onChange={(e) => setShowChanges(e.target.checked)}
                    className="accent-[var(--accent)]"
                  />
                  Show changes
                </label>
              )}
              <button
                type="button"
                onClick={copyOutput}
                disabled={!output || busy}
                className="rounded-full px-3.5 py-1.5 font-medium text-accent-text hover:bg-accent-soft disabled:opacity-40"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Turnstile shows a checkbox here only if Cloudflare is unsure about a visitor. */}
      <div ref={turnstile.containerRef} className="flex justify-center empty:hidden" />

      {/* Action bar */}
      <div className="flex flex-col-reverse gap-3 border-t border-border p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4 sm:pl-5">
        <p role="status" className={`text-sm empty:hidden sm:min-h-5 ${status === "error" ? "text-red-600 dark:text-red-400" : "text-muted"}`}>
          {message ??
            (overLimit ? (
              `Please shorten your text to ${MAX_WORDS.toLocaleString("en-US")} words or fewer.`
            ) : (
              <span className="hidden sm:inline">
                Tip: press <kbd className="rounded border border-border bg-surface-muted px-1.5 py-0.5 font-mono text-xs">Ctrl</kbd> +{" "}
                <kbd className="rounded border border-border bg-surface-muted px-1.5 py-0.5 font-mono text-xs">Enter</kbd> to {actionLabel.toLowerCase()}.
              </span>
            ))}
        </p>
        <button
          type="button"
          onClick={() => void paraphrase()}
          disabled={!canSubmit}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-on-accent shadow-sm transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {busy ? (mode === "humanize" ? "Humanizing…" : "Paraphrasing…") : actionLabel}
          {!busy && (
            <svg viewBox="0 0 16 16" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
