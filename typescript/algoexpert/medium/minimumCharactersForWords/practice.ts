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
}

export const ___ = '___';