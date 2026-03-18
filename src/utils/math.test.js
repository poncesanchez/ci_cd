import { describe, it, expect } from "vitest";
import { sum, subtract } from "./math";

describe("math", () => {
  it("suma dos números", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("resta dos números", () => {
    expect(subtract(5, 3)).toBe(1);
  });
});
