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
  {
    function generateDocument(characters: string, document: string) {
      const charsCount: { [key: string]: number; } = {};
      const SPACE = 'SPACE';
      for (let char of characters) {
        char = char === ' ' ? SPACE : char;
        if (char in charsCount) {
          charsCount[char] += 1;
        } else {
          charsCount[char] = 1;
        }
      }

      for (let char of document) {
        char = char === ' ' ? SPACE : char;
        if (!charsCount[char] || charsCount[char] < 1) return false;
        charsCount[char] -= 1;
      }

      return true;
    }
  }
  {
    // O(n + m) time => O(n) :bounded by the length of the characters (n)
    // O(c) space
    // where n = length of 'characters'
    //       m = lenth of 'document'
    //       c = no. of unique letters in 'characters'
    function generateDocument(characters: string, document: string): boolean {
      const SPACE_REP = '__';
      const bank: { [key: string]: number; } = {};
      for (let ch of characters) {
        if (ch === ' ') ch = SPACE_REP;
        if (!(ch in bank)) bank[ch] = 0;
        bank[ch] += 1;
      }

      for (let ch of document) {
        if (ch === ' ') ch = SPACE_REP;
        if (!(ch in bank)) return false;
        if (bank[ch] === 0) return false;
        bank[ch] -= 1;
      }

      return true;
    }
  }
}

export const ___ = '___';







