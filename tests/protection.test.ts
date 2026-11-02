import { afterEach, describe, expect, it, vi } from "vitest";
import { estimateCostUsd } from "@/config/pricing";
import { paraphraseCacheKey } from "@/lib/cache-key";
import { splitStream, encodeControl } from "@/lib/stream-protocol";
import { verifyTurnstile } from "@/lib/turnstile";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("estimateCostUsd", () => {
  it("uses the configured per-million prices", () => {
    expect(estimateCostUsd(1_000_000, 0)).toBeCloseTo(0.1);
    expect(estimateCostUsd(0, 1_000_000)).toBeCloseTo(0.5);
    expect(estimateCostUsd(600, 600)).toBeCloseTo(0.00036);
  });
});

describe("paraphraseCacheKey", () => {
  it("is stable and depends on text, mode and language", () => {
    const a = paraphraseCacheKey("hello", "standard", "auto");
    expect(a).toBe(paraphraseCacheKey("hello", "standard", "auto"));
    expect(a).toMatch(/^cache:v1:[0-9a-f]{64}$/);
    expect(a).not.toBe(paraphraseCacheKey("hello", "formal", "auto"));
    expect(a).not.toBe(paraphraseCacheKey("hello", "standard", "en"));
    expect(a).not.toContain("hello");
  });
});

describe("stream protocol", () => {
  it("splits text from a trailing control message", () => {
    expect(splitStream("plain")).toEqual({ text: "plain", control: null });
    expect(splitStream("abc" + encodeControl({ error: "x" }))).toEqual({ text: "abc", control: { error: "x" } });
  });
});

describe("verifyTurnstile", () => {
  it("passes in dev when no secret is configured", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    vi.stubEnv("NODE_ENV", "development");
    expect(await verifyTurnstile("", null)).toEqual({ ok: true });
  });

  it("fails closed in production when no secret is configured", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("ALLOW_DEV_FALLBACKS", "");
    expect(await verifyTurnstile("tok", null)).toEqual({ ok: false, reason: "not-configured" });
  });

  it("rejects a missing token", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "secret");
    expect(await verifyTurnstile("", null)).toEqual({ ok: false, reason: "missing-token" });
  });

  it("sends secret, token and IP to Cloudflare and honours the answer", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "secret");
    const fetchMock = vi.fn(async () => Response.json({ success: true }));
    vi.stubGlobal("fetch", fetchMock);
    expect(await verifyTurnstile("tok", "1.2.3.4")).toEqual({ ok: true });
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://challenges.cloudflare.com/turnstile/v0/siteverify");
    const form = init.body as URLSearchParams;
    expect(form.get("secret")).toBe("secret");
    expect(form.get("response")).toBe("tok");
    expect(form.get("remoteip")).toBe("1.2.3.4");

    vi.stubGlobal("fetch", vi.fn(async () => Response.json({ success: false, "error-codes": ["invalid-input-response"] })));
    expect(await verifyTurnstile("bad", null)).toEqual({ ok: false, reason: "invalid" });
  });

  it("reports Cloudflare being unreachable", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "secret");
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("network"); }));
    expect(await verifyTurnstile("tok", null)).toEqual({ ok: false, reason: "unavailable" });
  });
});
