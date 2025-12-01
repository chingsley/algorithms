{
  {
    /**
     * Time: O( wnlog(n) )
     * Space: O(wn)
     *       w = no. of words on the words array
     *       n = the no. of characters in the longest word
     * @param words w
     * @returns string[][]
     */
    function groupAnagrams(words: string[]) {
      const groups: { [key: string]: string[]; } = {};

      for (let word of words) {
        const sorted = word.split('').sort().join('');
        sorted in groups ? groups[sorted].push(word) : groups[sorted] = [word];
      }

      return Object.values(groups);
    }

    /**
     * Prove of Time complexity
     *    w * ( n + nlog(n) )  w is due to the 'for loop'; n is due to the 'split' and 'join'; nlog(n) is due to the sort
     *  = w * n( 1 + log(n) ); We can drop the 1 to have:
     *  = w * n( log(n) )
     *  = w * nlog(n)
     *  = wnlog(n)
     */
  }
  {
    function groupAnagrams(words: string[]) {
      const groups: { [key: string]: string[]; } = {};

      for (let word of words) {
        const sortedWd = word.split('').sort().join();
        if (!(sortedWd in groups)) groups[sortedWd] = [];
        groups[sortedWd].push(word);
      }

      return Object.values(groups);
    }
  }
  {
    // O(w * nlog(n)) time | O(wn) space
    // w = no. of words | n = length of the longest word
    function groupAnagrams(words: string[]) {
      const outputHash: { [key: string]: string[]; } = {};

      words.forEach((word) => {
        const sortedWord = word.split('').sort().join('');
        if (sortedWord in outputHash) {
          outputHash[sortedWord].push(word);
        } else {
          outputHash[sortedWord] = [word];
        }
      });
      return Object.values(outputHash);
    }
  }
  {

    // O(w * nlog(n)) time | O(wn) space
    // w = no. of words | n = length of the longest word
    function groupAnagrams(words: string[]) {
      const groups: { [key: string]: string[]; } = {};
      for (let word of words) {
        const sortedWd = word.split('').sort().join('');
        if (!(sortedWd in groups)) groups[sortedWd] = [];
        groups[sortedWd].push(word);
      }

      return Object.values(groups);
    }
  }
  {
    function groupAnagrams(words: string[]) {
      const groups: { [key: string]: string[]; } = {};

      for (let word of words) {
        const sortedWd = word.split('').sort().join();
        if (!(sortedWd in groups)) groups[sortedWd] = [];
        groups[sortedWd].push(word);
      }

      return Object.values(groups);
    }
  }
  {
    // O(w * clog(c)) time | O(wc) space
    // w = length of the words list | c = lenght of the longest-character word in the words list
    function groupAnagrams(words: string[]) {
      const wordGroup: { [key: string]: string[]; } = {};
      for (let word of words) {
        const sw = word.split('').sort().join('');
        wordGroup[sw] ? wordGroup[sw].push(word) : wordGroup[sw] = [word];
      }
      return Object.values(wordGroup);
    }
  }
}

export const __ = '__';