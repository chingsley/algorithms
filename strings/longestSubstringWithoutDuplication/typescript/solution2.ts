// O(n^2) time | O(n) space
// n = length of the string
export function longestSubstringWithoutDuplication(string: string) {
  const seen: { [key: string]: number; } = {};
  let max = '';
  let startIdx = 0;
  let i = startIdx;
  while (i < string.length) {
    if (!(string[i] in seen)) {
      seen[string[i]] = i;
      const curr = string.slice(startIdx, i + 1);
      max = curr.length > max.length ? curr : max;
      i += 1;
    } else {
      startIdx = Math.max(startIdx, seen[string[i]] + 1);
      const curr = string.slice(startIdx, i + 1);
      max = curr.length > max.length ? curr : max;
      seen[string[i]] = i;
      i += 1;
    }
  }
  return max;
}
