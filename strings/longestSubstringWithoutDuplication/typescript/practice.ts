{
  {
    // O(n) time | O(n) space
    // n = length of the string
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
    // O(n) time | O(n) space
    // n = length of the string
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
}

export const __ = '__';