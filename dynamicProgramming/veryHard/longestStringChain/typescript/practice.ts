{
  {
    // WITHOUT MEMOIZATION
    // O(m * n^n) time | O(n) space
    // m = length of the strings array
    // n = length of the longest word in the strings array
    function longestStringChain(strings: string[]) {
      let longest: string[] = [];
      for (let word of strings) {
        const wordLongest = getLongest(word, strings);
        if (wordLongest.length > longest.length) longest = wordLongest;
      }
      return longest.length < 2 ? [] : longest.reverse();
    }


    function getLongest(word: string, strings: string[]): string[] {
      let longestChain: string[] = [];
      for (let i = 0; i < word.length; i++) {
        const wordLessOneChar = word.slice(0, i) + word.slice(i + 1);
        for (let wd of strings) {
          if (wd === wordLessOneChar) {
            const chain = getLongest(wordLessOneChar, strings);
            if (chain.length > longestChain.length) longestChain = chain;
          }
        }
      }

      longestChain.push(word);
      return longestChain;
    }
  }
}


/**
 * Any solution you implement must pass this test case:
 * ["abdec", "abdc", "abde", "abc", "abd", "ade", "ae"]
 */

export const __ = '__';