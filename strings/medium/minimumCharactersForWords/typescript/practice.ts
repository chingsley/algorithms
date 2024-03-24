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
  {
    /*
* Time: O(w * c) 
* w = no. of words, c = no. of characters in the longest word
*
* Space: O(u * n)
* u = the no. of unique characters across all the words
* n = the frequency of occurrence of the most occurred character
*/
    function minimumCharactersForWords(words: string[]): string[] {
      const charsBank: { [key: string]: number; } = {};
      for (let word of words) {
        const wordCharFreq = getRequiredChars(word);
        updateCharsBank(wordCharFreq, charsBank);
      }

      const res: string[] = [];
      for (const ch in charsBank) {
        while (charsBank[ch]-- > 0) res.push(ch);
      }
      return res;
    }

    function getRequiredChars(word: string): { [key: string]: number; } {
      const chFreq: { [key: string]: number; } = {};
      for (let ch of word) {
        ch in chFreq ? chFreq[ch] += 1 : chFreq[ch] = 1;
      }
      return chFreq;
    }

    function updateCharsBank(wordCharFreq: { [key: string]: number; }, charsBank: { [key: string]: number; }) {
      for (let ch in wordCharFreq) {
        if (ch in charsBank) {
          charsBank[ch] = Math.max(wordCharFreq[ch], charsBank[ch]);
        } else {
          charsBank[ch] = wordCharFreq[ch];
        }
      }
    }
  }
  {
    // O(wc) time | O(u) space
    // w = no. of words in words array
    // c = no. of chars in the longest word
    // u = no. of unique chars accross all words
    function minimumCharactersForWords(words: string[]) {
      const charsCount: { [key: string]: number; } = {};
      for (let word of words) updateCharsCount(charsCount, word);

      const result: string[] = [];
      for (let ch in charsCount) while (charsCount[ch]-- > 0) result.push(ch);
      return result;
    }

    function updateCharsCount(charsCount: { [key: string]: number; }, word: string) {
      const wordCh: { [key: string]: number; } = {};
      for (let ch of word) {
        wordCh[ch] = (wordCh[ch] || 0) + 1;
        charsCount[ch] = Math.max(charsCount[ch] || 0, wordCh[ch]);
      }
    }
  }
  {
    /**
 * O(n * l) time | O(c) space
 * where:
 *    n = the number of words
 *    l = the length of the longest word
 *    c = number of unique characters across all words
 */
    function minimumCharactersForWords(words: string[]) {
      const bank: { [key: string]: number; } = {};
      for (let word of words) {
        const dict: { [key: string]: number; } = {};
        for (let ch of word) {
          if (!dict[ch]) dict[ch] = 0;
          dict[ch] += 1;

          if (!bank[ch]) bank[ch] = 0;
          if (bank[ch] < dict[ch]) bank[ch] += 1;
        }
      }

      const result: string[] = [];
      for (let ch in bank) while (bank[ch]-- > 0) result.push(ch);

      return result;
    }
  }
}

export const ___ = '___';