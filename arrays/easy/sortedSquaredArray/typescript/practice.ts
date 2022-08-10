{
  {

    // O(n) time | O(n) space
    // n = length of array
    function sortedSquaredArray(array: number[]) {
      let i = 0;
      let j = array.length - 1;
      const res = new Array(array.length).fill(1);
      let idx = res.length - 1;
      while (i <= j) {
        if (Math.abs(array[i]) > Math.abs(array[j])) {
          res[idx] = array[i] * array[i];
          i += 1;
        } else {
          res[idx] = array[j] * array[j];
          j -= 1;
        }

        idx -= 1;
      }

      return res;
    }




  }
}

export const ___ = '___';