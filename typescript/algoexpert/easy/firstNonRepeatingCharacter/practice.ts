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
}

export const __ = '__';