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
}

export const __ = '__';