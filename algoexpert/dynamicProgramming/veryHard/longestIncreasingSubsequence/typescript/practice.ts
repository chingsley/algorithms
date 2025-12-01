{
  {
    /**
     * WITHOUT MEMO
     * O(n^n) time | O(n) space (n = length of array)
     */
    function longestIncreasingSubsequence(array: number[]) {
      let longestSeq: number[] = [];
      for (let i = 0; i < array.length; i++) {
        const longestSeqFromI = getLongestSeqFrom(i, array);
        if (longestSeqFromI.length > longestSeq.length) {
          longestSeq = longestSeqFromI;
        }
      }
      return longestSeq.reverse();
    }

    function getLongestSeqFrom(i: number, array: number[]): number[] {
      let longestSeqFromI: number[] = [];

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] <= array[i]) continue;
        const longestSeqFromJ = getLongestSeqFrom(j, array);
        if (longestSeqFromJ.length > longestSeqFromI.length) {
          longestSeqFromI = longestSeqFromJ;
        }
      }

      longestSeqFromI.push(array[i]);
      return longestSeqFromI;
    }
  }
  {
    /**
     * WITH MEMO
     * O(n^2) time | O(n^2) space
     */
    function longestIncreasingSubsequence(array: number[]) {
      const memo: Memo = {};
      let longestSeq: number[] = [];
      for (let i = 0; i < array.length; i++) {
        const longestSeqFromI = getLongestSeqFrom(i, array, memo);
        if (longestSeqFromI.length > longestSeq.length) {
          longestSeq = longestSeqFromI;
        }
      }
      return longestSeq.reverse();
    }

    function getLongestSeqFrom(i: number, array: number[], memo: Memo): number[] {
      if (i in memo) return JSON.parse(memo[i]);
      let longestSeqFromI: number[] = [];

      for (let j = i + 1; j < array.length; j++) {
        if (array[j] <= array[i]) continue;
        const longestSeqFromJ = getLongestSeqFrom(j, array, memo);
        if (longestSeqFromJ.length > longestSeqFromI.length) {
          longestSeqFromI = longestSeqFromJ;
        }
      }

      longestSeqFromI.push(array[i]);
      memo[i] = JSON.stringify(longestSeqFromI);
      return longestSeqFromI;
    }

    interface Memo {
      [key: number]: string;
    }
  }
}

export const __ = '__';