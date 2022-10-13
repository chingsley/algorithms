{
  {
    // O(n) time | O(u) space
    // n = length of the string
    // u = no. of unique chars in string
    function longestSubstringWithoutDuplication(string: string) {
      const seen: { [key: string]: number; } = {};
      let max = [0, 0];
      let startIdx = 0;
      let i = startIdx;
      while (i < string.length) {
        if (string[i] in seen) {
          startIdx = Math.max(startIdx, seen[string[i]] + 1);
        }
        max = max[1] - max[0] > (i + 1) - startIdx ? max : [startIdx, i + 1];
        seen[string[i]] = i;
        i += 1;
      }
      return string.slice(max[0], max[1]);
    }
  }
  {
    // O(n) time | O(u) space
    // n = length of the string
    // u = no. of unique chars in string
    function longestSubstringWithoutDuplication(string: string) {
      const seen: { [key: string]: number; } = {};
      let max = [0, 0];
      let startIdx = 0;
      let i = startIdx;
      for (let i = 0; i < string.length; i++) {
        if (string[i] in seen) {
          startIdx = Math.max(startIdx, seen[string[i]] + 1);
        }
        max = max[1] - max[0] > (i + 1) - startIdx ? max : [startIdx, i + 1];
        seen[string[i]] = i;
      }
      return string.slice(max[0], max[1]);
    }
  }
  {
    // O(n) time | O(u) space
    // n = length of the string
    // u = no. of unique chars in string
    function longestSubstringWithoutDuplication(string: string) {
      let longest = [0, 0];
      let startIdx = 0;
      const seen: { [key: string]: number; } = { [string[0]]: 0 };
      for (let i = 1; i < string.length; i++) {
        if (string[i] in seen) {
          startIdx = Math.max(startIdx, seen[string[i]] + 1);
        }
        seen[string[i]] = i;
        updateLongest(longest, [startIdx, i]);
      }
      return string.slice(longest[0], longest[1] + 1);
    }

    function updateLongest(currentLongest: number[], newRange: number[]) {
      const [a, b] = currentLongest;
      const [c, d] = newRange;
      if (d - c > b - a) [currentLongest[0], currentLongest[1]] = [c, d];
    }
  }

}

export const __ = '__';