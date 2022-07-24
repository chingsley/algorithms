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
}

export const __ = '__';