"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";

interface TurnstileApi {
  render(container: HTMLElement, options: Record<string, unknown>): string;
  execute(widgetId: string): void;
  reset(widgetId: string): void;
  remove(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.defer = true;
      s.onload = () => resolve();
      s.onerror = () => {
        scriptPromise = null;
        reject(new Error("Turnstile failed to load"));
      };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

type Pending = { resolve: (token: string) => void; reject: (err: Error) => void };

/**
 * Invisible Cloudflare Turnstile. The challenge runs only when getToken() is
 * called (on Paraphrase); most visitors never see anything. If Cloudflare needs
 * a click, the widget appears inside the container.
 * Without NEXT_PUBLIC_TURNSTILE_SITE_KEY (local dev) getToken() returns "".
 */
export function useTurnstile(siteKey: string | undefined) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const pending = useRef<Pending | null>(null);

  useEffect(() => {
    if (!siteKey) return;
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile || widgetId.current) return;
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          execution: "execute",
          appearance: "interaction-only",
          callback: (token: string) => {
            pending.current?.resolve(token);
            pending.current = null;
          },
          "error-callback": () => {
            pending.current?.reject(new Error("Turnstile error"));
            pending.current = null;
          },
          "expired-callback": () => {
            if (widgetId.current) window.turnstile?.reset(widgetId.current);
          },
        });
      })
      .catch(() => {
        // Reported to the user when they press Paraphrase.
      });
    return () => {
      cancelled = true;
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [siteKey]);

  const getToken = useCallback(async (): Promise<string> => {
    if (!siteKey) return "";
    await loadScript();
    // The widget renders asynchronously after the script loads.
    for (let i = 0; i < 50 && !widgetId.current; i++) await new Promise((r) => setTimeout(r, 100));
    const id = widgetId.current;
    if (!id || !window.turnstile) throw new Error("Turnstile not ready");

    pending.current?.reject(new Error("superseded"));
    return new Promise<string>((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.current = null;
        reject(new Error("Turnstile timeout"));
      }, 30_000);
      pending.current = {
        resolve: (t) => {
          clearTimeout(timer);
          resolve(t);
        },
        reject: (e) => {
          clearTimeout(timer);
          reject(e);
        },
      };
      window.turnstile!.execute(id);
    });
  }, [siteKey]);

  /** Tokens are single-use: reset after each request so the next one gets a fresh token. */
  const reset = useCallback(() => {
    if (widgetId.current) window.turnstile?.reset(widgetId.current);
  }, []);

  return useMemo(() => ({ containerRef, getToken, reset }), [getToken, reset]);
}
