// O(n) time | O(n) space
// n = length of the string
export function longestSubstringWithoutDuplication(string: string) {
  const seen: { [key: string]: number; } = {};
  let max = [0, 0];
  let startIdx = 0;
  let i = startIdx;
  while (i < string.length) {
    if (!(string[i] in seen)) {
      seen[string[i]] = i;
      max = getMaxRange(max, [startIdx, i + 1]);
      i += 1;
    } else {
      startIdx = Math.max(startIdx, seen[string[i]] + 1);
      max = getMaxRange(max, [startIdx, i + 1]);
      seen[string[i]] = i;
      i += 1;
    }
  }
  return string.slice(max[0], max[1]);
}

function getMaxRange(currentMax: number[], incoming: number[]): [number, number] {
  const [a1, b1] = currentMax;
  const [a2, b2] = incoming;
  return b1 - a1 > b2 - a2 ? [a1, b1] : [a2, b2];
}