{
  { // SOLUTION 1 (VERBOSE)
    function minimumCharactersForWords(words: string[]): string[] {
      const charsBank: { [key: string]: number; } = {};
      for (let word of words) {
        const requiredChars = getRequiredChars(word);
        for (let ch in requiredChars) {
          if (ch in charsBank) {
            charsBank[ch] = Math.max(charsBank[ch], requiredChars[ch]);
          } else {
            charsBank[ch] = requiredChars[ch];
          }
        }
      }

      return Object.entries(charsBank).reduce((acc: string[], [key, count]: [string, number]) => {
        while (count-- > 0) acc.push(key);
        return acc;
      }, []);
    }

    function getRequiredChars(word: string) {
      const requiredChars: { [key: string]: number; } = {};
      for (let ch of word) {
        if (ch in requiredChars) {
          requiredChars[ch] += 1;
        } else {
          requiredChars[ch] = 1;
        }
      }
      return requiredChars;
    }
  }
  { // SOLUTION 1 (TERSE)
    function minimumCharactersForWords(words: string[]): string[] {
      const chFreq: { [key: string]: number; } = {};
      for (let word of words) {
        const wChFreq = getRequiredChars(word);
        for (let ch in wChFreq) {
          chFreq[ch] = Math.max(chFreq[ch] || wChFreq[ch], wChFreq[ch]);
        }
      }

      return Object.entries(chFreq)
        .reduce((acc: string[], [key, count]: [string, number]) => {
          while (count-- > 0) acc.push(key);
          return acc;
        }, []);
    }

    function getRequiredChars(word: string) {
      const wordCharsFreq: { [key: string]: number; } = {};
      for (let ch of word) {
        ch in wordCharsFreq ? wordCharsFreq[ch] += 1 : wordCharsFreq[ch] = 1;
      }
      return wordCharsFreq;
    }
  }
  {
    // O(wc) time | o(nd) time
    // w = no. of words in "words" array
    // c = length of longest-character word
    // d = no. of distinct chars in "words" array
    // n = no. of duplicates of the most occurred chars
    function minimumCharactersForWords(words: string[]): string[] {
      const chBank: { [key: string]: number; } = {};
      for (let word of words) {// O(w) time
        updateChBank(word, chBank); // O(c) time
      }

      const result: string[] = [];
      for (let ch in chBank) {// O(d) time
        while (chBank[ch]-- > 0) result.push(ch); // O(n) time
      }

      return result;
    }

    function updateChBank(word: string, chBank: { [key: string]: number; }) {
      let wordChars: { [key: string]: number; } = {};
      for (let ch of word) {
        if (!(ch in wordChars)) wordChars[ch] = 0;
        wordChars[ch] += 1;
      }

      for (let key in wordChars) {
        if (!(key in chBank)) chBank[key] = 0;
        chBank[key] = Math.max(chBank[key], wordChars[key]);
      }
    }
  }
}

export const ___ = '___';