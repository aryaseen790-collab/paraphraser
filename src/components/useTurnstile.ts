"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface TurnstileApi {
  render(container: HTMLElement, options: Record<string, unknown>): string;
  reset(widgetId: string): void;
  remove(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const TOKEN_WAIT_MS = 20_000;
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

type Waiter = (token: string) => void;

/**
 * Invisible Cloudflare Turnstile that always keeps one fresh token ready.
 *
 * The widget solves its challenge in the background as soon as the page loads.
 * Each token can be used only once, so getToken() hands out the current token
 * and immediately resets the widget, which starts fetching the next one while
 * the user reads the result. Most visitors never see anything; if Cloudflare
 * needs a click, the checkbox appears inside the container.
 * Without NEXT_PUBLIC_TURNSTILE_SITE_KEY (local dev) getToken() returns "".
 *
 * Nothing is loaded until activate() is called (the visitor starts typing) or a
 * token is requested, so Cloudflare's script never slows down the first paint.
 */
export function useTurnstile(siteKey: string | undefined) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const token = useRef<string | null>(null);
  const waiters = useRef<Waiter[]>([]);
  const [active, setActive] = useState(false);

  /** Start loading Turnstile in the background. Safe to call repeatedly. */
  const activate = useCallback(() => setActive(true), []);

  useEffect(() => {
    if (!siteKey || !active) return;
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile || widgetId.current) return;
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          appearance: "interaction-only",
          "refresh-expired": "auto",
          callback: (t: string) => {
            const waiter = waiters.current.shift();
            if (waiter) {
              // Someone is already waiting: hand it over and start on the next one.
              waiter(t);
              if (widgetId.current) window.turnstile?.reset(widgetId.current);
            } else {
              token.current = t;
            }
          },
          "expired-callback": () => {
            token.current = null;
          },
          "error-callback": () => {
            token.current = null;
            // Returning nothing lets Turnstile retry automatically.
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
      token.current = null;
    };
  }, [siteKey, active]);

  /** Returns a fresh, never-used token (waiting for one if necessary). */
  const getToken = useCallback(async (): Promise<string> => {
    if (!siteKey) return "";
    setActive(true);
    await loadScript();

    const ready = token.current;
    if (ready) {
      token.current = null;
      if (widgetId.current) window.turnstile?.reset(widgetId.current); // prefetch the next one
      return ready;
    }

    return new Promise<string>((resolve, reject) => {
      const waiter: Waiter = (t) => {
        clearTimeout(timer);
        resolve(t);
      };
      const timer = setTimeout(() => {
        waiters.current = waiters.current.filter((w) => w !== waiter);
        reject(new Error("Turnstile timeout"));
      }, TOKEN_WAIT_MS);
      waiters.current.push(waiter);
    });
  }, [siteKey]);

  return useMemo(() => ({ containerRef, getToken, activate }), [getToken, activate]);
}
