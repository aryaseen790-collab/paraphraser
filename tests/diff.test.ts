import { describe, expect, it } from "vitest";
import { computeDiff } from "@/lib/diff";

describe("computeDiff", () => {
  it("marks removed words in the original and added words in the rewrite", () => {
    const d = computeDiff("The quick brown fox", "The fast brown fox")!;
    expect(d.original.filter((s) => s.changed).map((s) => s.text.trim())).toEqual(["quick"]);
    expect(d.rewrite.filter((s) => s.changed).map((s) => s.text.trim())).toEqual(["fast"]);
    expect(d.rewrite.map((s) => s.text).join("")).toBe("The fast brown fox");
    expect(d.original.map((s) => s.text).join("")).toBe("The quick brown fox");
  });
  it("returns null when nothing is shared", () => {
    expect(computeDiff("hello world", "مرحبا بالعالم")).toBeNull();
  });
});
