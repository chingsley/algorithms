// O(n^2) time | O(n) space
// n = length of the string
export function longestSubstringWithoutDuplication(string: string) {
  let longestSet: Set<string> = new Set();

  for (let i = 0; i < string.length; i++) {
    const currentSet: Set<string> = new Set();
    for (let j = i; j < string.length; j++) {
      if (currentSet.has(string[j])) break;
      currentSet.add(string[j]);
    }
    if (currentSet.size > longestSet.size) {
      longestSet = currentSet;
    }
  }
  return Array.from(longestSet).join('');
}
