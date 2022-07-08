// O(n) time, O(n) space
export function firstNonRepeatingCharacter(string: string) {
  const charIdxHash: { [key: string]: number[]; } = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in charIdxHash) {
      charIdxHash[char].push(i);
    } else {
      charIdxHash[char] = [i];
    }
  }
  for (let key in charIdxHash) {
    if (charIdxHash[key].length === 1) {
      return charIdxHash[key][0];
    }
  }

  return -1;
}
