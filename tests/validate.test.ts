import { describe, expect, it } from "vitest";
import { validateRequestBody } from "@/lib/validate";

describe("validateRequestBody", () => {
  const ok = { text: "Hello world", mode: "standard", language: "auto", turnstileToken: "t" };

  it("accepts a valid body", () => {
    const r = validateRequestBody(ok);
    expect(r.ok).toBe(true);
  });
  it("rejects empty text", () => {
    expect(validateRequestBody({ ...ok, text: "   " }).ok).toBe(false);
  });
  it("rejects more than 1,000 words", () => {
    expect(validateRequestBody({ ...ok, text: "a ".repeat(1001) }).ok).toBe(false);
    expect(validateRequestBody({ ...ok, text: "a ".repeat(1000) }).ok).toBe(true);
  });
  it("rejects very long single words", () => {
    expect(validateRequestBody({ ...ok, text: "a".repeat(12_001) }).ok).toBe(false);
  });
  it("rejects unknown modes and languages", () => {
    expect(validateRequestBody({ ...ok, mode: "evil" }).ok).toBe(false);
    expect(validateRequestBody({ ...ok, language: "xx" }).ok).toBe(false);
  });
  it("rejects non-objects", () => {
    expect(validateRequestBody(null).ok).toBe(false);
    expect(validateRequestBody("text").ok).toBe(false);
  });
});
