import { expect, test } from "vitest";
import rewriteImageUrl from "@/utils/rewriteImageUrl";

test("Should change the existing size to the size we want", () => {
  expect(
    rewriteImageUrl("https://lh3.googleusercontent.com/7qzT0pbclLB=s0", 100),
  ).toBe("https://lh3.googleusercontent.com/7qzT0pbclLB=s100");
});
