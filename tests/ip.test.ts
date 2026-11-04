import { afterEach, describe, expect, it, vi } from "vitest";
import { getClientIp } from "@/lib/ip";

const req = (headers: Record<string, string>) => new Request("https://x.test", { headers });

afterEach(() => vi.unstubAllEnvs());

describe("getClientIp", () => {
  it("ignores a forged cf-connecting-ip by default", () => {
    expect(getClientIp(req({ "cf-connecting-ip": "6.6.6.6", "x-real-ip": "1.2.3.4" }))).toBe("1.2.3.4");
  });
  it("uses cf-connecting-ip only when Cloudflare is trusted", () => {
    vi.stubEnv("TRUST_CLOUDFLARE_IP", "true");
    expect(getClientIp(req({ "cf-connecting-ip": "6.6.6.6", "x-real-ip": "1.2.3.4" }))).toBe("6.6.6.6");
  });
  it("falls back to the first x-forwarded-for entry", () => {
    expect(getClientIp(req({ "x-forwarded-for": "9.9.9.9, 10.0.0.1" }))).toBe("9.9.9.9");
    expect(getClientIp(req({}))).toBeNull();
  });
});
