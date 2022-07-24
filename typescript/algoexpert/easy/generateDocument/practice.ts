{
  {
    /**
     * O(n + m) time => O(n) :bounded by the length of the characters (n)
     * O(c) space
     * where n = length of 'characters'
     * m = lenth of 'document'
     * c = no. of unique letters in 'characters'
     * @param characters 
     * @param document 
     * @returns 
     */
    function generateDocument(characters: string, document: string): boolean {
      const chHash: { [key: string]: number; } = {};
      for (let ch of characters) {
        if (!(ch in chHash)) chHash[ch] = 0;
        chHash[ch] += 1;
      }

      for (let ch of document) {
        if (!(ch in chHash) || chHash[ch] < 1) return false;
        chHash[ch] -= 1;
      }

      return true;
    }
  }
}

export const ___ = '___';







