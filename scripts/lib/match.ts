import { MatchKind } from "./types.js";

function sortPair(pair: number[]): number[] {
  return [...pair].sort((a, b) => a - b);
}

export function valuesMatch(
  actual: unknown,
  expected: unknown,
  match: MatchKind = "deepEqual"
): { ok: boolean; message?: string } {
  if (match === "unorderedPair") {
    if (!Array.isArray(actual) || !Array.isArray(expected)) {
      return {
        ok: false,
        message: `Expected two arrays, got ${typeof actual} and ${typeof expected}`,
      };
    }
    if (actual.length !== expected.length) {
      return {
        ok: false,
        message: `Length mismatch: got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`,
      };
    }
    const a = sortPair(actual as number[]);
    const e = sortPair(expected as number[]);
    if (JSON.stringify(a) !== JSON.stringify(e)) {
      return {
        ok: false,
        message: `Expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`,
      };
    }
    return { ok: true };
  }

  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) {
    return {
      ok: false,
      message: `Expected ${e}, received ${a}`,
    };
  }
  return { ok: true };
}
