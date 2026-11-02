import { describe, expect, it } from "vitest";
import { getProviderOrder } from "@/config/ai";
import { estimateCostUsd, isFreeProvider } from "@/config/pricing";

describe("getProviderOrder", () => {
  it("defaults to Claude", () => {
    expect(getProviderOrder(undefined)).toEqual(["claude"]);
    expect(getProviderOrder("")).toEqual(["claude"]);
    expect(getProviderOrder("nonsense")).toEqual(["claude"]);
  });
  it("parses a fallback chain, ignoring case, spaces and duplicates", () => {
    expect(getProviderOrder("gemini")).toEqual(["gemini"]);
    expect(getProviderOrder(" Gemini , CLAUDE ,gemini")).toEqual(["gemini", "claude"]);
  });
});

describe("pricing", () => {
  it("prices Claude and treats Gemini free tier as free by default", () => {
    expect(estimateCostUsd(1_000_000, 1_000_000, "claude")).toBeCloseTo(0.6);
    expect(estimateCostUsd(1_000_000, 1_000_000, "gemini")).toBe(0);
    expect(isFreeProvider("gemini")).toBe(true);
    expect(isFreeProvider("claude")).toBe(false);
  });
});
