import { devFallbacksAllowed } from "@/config/protection";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type TurnstileResult = { ok: true } | { ok: false; reason: "missing-token" | "invalid" | "not-configured" | "unavailable" };

/** Verifies a Cloudflare Turnstile token on the server. Tokens are single-use. */
export async function verifyTurnstile(token: string, ip: string | null): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return devFallbacksAllowed() ? { ok: true } : { ok: false, reason: "not-configured" };
  }
  if (!token) return { ok: false, reason: "missing-token" };

  const form = new URLSearchParams({ secret, response: token });
  if (ip) form.set("remoteip", ip);

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      body: form,
      signal: AbortSignal.timeout(5000),
    });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (data.success) return { ok: true };
    console.warn("[turnstile] verification failed:", data["error-codes"]);
    return { ok: false, reason: "invalid" };
  } catch (err) {
    console.error("[turnstile] verification request failed:", err);
    return { ok: false, reason: "unavailable" };
  }
}
