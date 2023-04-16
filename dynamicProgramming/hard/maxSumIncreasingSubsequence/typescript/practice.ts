{
  {
    function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
      const sums: number[][] = new Array(array.length).fill(0).map((_, i) => [array[i], -1]);

      console.log(sums);
      let maxSumIdx = 0;
      for (let i = 1; i < sums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
          if (array[i] > array[j] && array[i] + sums[j][0] > sums[i][0]) {
            sums[i][0] = array[i] + sums[j][0];
            sums[i][1] = j;
          }
        }
        // maxSum = Math.max(maxSum, sums[i][0])
        if (sums[i][0] > sums[maxSumIdx][0]) {
          maxSumIdx = i;
        }
      }

      const subSeq: number[] = [];
      let k = maxSumIdx;
      while (k >= 0) {
        subSeq.push(array[k]);
        k = sums[k][1];
      }

      return [sums[maxSumIdx][0], subSeq.reverse()];
    }
  }
  {
    function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
      let maxSeq: number[] = [];
      let sumMaxSeq = -Infinity;
      const memo: Memo = {};
      for (let i = 0; i < array.length; i++) {
        const maxSeqAtIdx = getMaxSeqAtIdx(i, array, memo);
        const sumMaxSeqAtIdx = maxSeqAtIdx.reduce((sum, n) => sum + n, 0);
        if (sumMaxSeqAtIdx > sumMaxSeq) {
          maxSeq = maxSeqAtIdx;
          sumMaxSeq = sumMaxSeqAtIdx;

        }
      }
      return [sumMaxSeq, maxSeq];
    }

    function getMaxSeqAtIdx(i: number, array: number[], memo: Memo): number[] {
      if (i in memo) return JSON.parse(memo[i]);
      // console.log(i)

      let maxSeq: number[] = [];
      let sumMaxSeq = -Infinity;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] <= array[i]) continue;
        const maxSeqAtJ = getMaxSeqAtIdx(j, array, memo);
        const sumMaxSeqAtJ = maxSeqAtJ.reduce((sum, n) => sum + n, 0);
        if (sumMaxSeqAtJ > sumMaxSeq) {
          maxSeq = maxSeqAtJ;
          sumMaxSeq = sumMaxSeqAtJ;
        }
      }

      memo[i] = JSON.stringify([array[i], ...maxSeq]);
      return [array[i], ...maxSeq];
    }

    type Memo = { [key: number]: string; };

  }
  {
    // O(n^2) time | O(n^2) space
    function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
      let maxSeq: number[] = [];
      let sumMaxSeq = -Infinity;
      const memo: Memo = {};
      for (let i = 0; i < array.length; i++) {
        const { seq, sum } = getMaxSeqAtIdx(i, array, memo);
        if (sum > sumMaxSeq) {
          maxSeq = seq;
          sumMaxSeq = sum;
        }
      }
      return [sumMaxSeq, maxSeq];
    }

    function getMaxSeqAtIdx(i: number, array: number[], memo: Memo): { seq: number[], sum: number; } {
      if (i in memo) return JSON.parse(memo[i]);

      let maxSeq: number[] = [];
      let sumMaxSeq = -Infinity;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] <= array[i]) continue;
        const { seq, sum } = getMaxSeqAtIdx(j, array, memo);
        if (sum > sumMaxSeq) {
          maxSeq = seq;
          sumMaxSeq = sum;
        }
      }

      if (sumMaxSeq === -Infinity) sumMaxSeq = 0;
      const result = { seq: [array[i], ...maxSeq], sum: sumMaxSeq + array[i] };
      memo[i] = JSON.stringify(result);
      return result;
    }

    type Memo = { [key: number]: string; };
  }
}

export const __ = '__';