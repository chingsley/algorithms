{
  {
    interface Memo {
      [key: number]: number;
    }

    // O(n) time | O(n) space (n = length of array)
    function minNumberOfJumps(array: number[]) {
      const memo: Memo = {};
      return getMinJumpsFromIdx(0, array, memo);
    }

    function getMinJumpsFromIdx(i: number, array: number[], memo: Memo) {
      if (i === array.length - 1) return 0;
      if (i in memo) return memo[i];

      let minJumps = Infinity;
      for (let j = 1; j <= array[i]; j++) {
        if (i + j >= array.length) continue;
        minJumps = Math.min(
          minJumps,
          getMinJumpsFromIdx(i + j, array, memo)
        );
      }

      memo[i] = minJumps + 1;
      return minJumps + 1;
    }
  }
}

export const __ = '__';