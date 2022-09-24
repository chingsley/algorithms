{
  {
    function firstNonRepeatingCharacter(string: string) {
      const hash: { [key: string]: number; } = {};

      for (let ch of string) {
        if (!(ch in hash)) hash[ch] = 0;
        hash[ch] += 1;
      }

      for (let i = 0; i < string.length; i++) {
        if (hash[string[i]] === 1) return i;
      }

      return -1;
    }
  }
  {
    /**
     * O(n) time | O(1) space
     * n = no. of characters in the string
     * The constant space is b/c the input staring only has
     * lowercase English-alphabet letters; thus, the counts object
     * will never have more than 26 character frequencies
     */
    function firstNonRepeatingCharacter(string: string) {
      const counts: { [key: string]: number; } = {};
      for (let ch of string) {
        if (!(ch in counts)) counts[ch] = 0;
        counts[ch] += 1;
      }

      for (let i = 0; i < string.length; i++) {
        if (counts[string[i]] === 1) return i;
      }

      return -1;
    }

  }
}

export const __ = '__';