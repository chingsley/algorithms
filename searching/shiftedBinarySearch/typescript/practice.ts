{
  {
    // O(log(n)) time | O(1) space
    function shiftedBinarySearch(array: number[], target: number) {
      let [i, j] = [0, array.length - 1];
      while (i <= j) {
        const midIdx = Math.floor((i + j) / 2);
        if (array[midIdx] === target) {
          return midIdx;
        } else if (array[i] < array[midIdx]) {
          if (target >= array[i] && target < array[midIdx]) {
            j = midIdx - 1;
          } else {
            i = midIdx + 1;
          }
        } else {
          if (target > array[midIdx] && target <= array[j]) {
            i = midIdx + 1;
          } else {
            j = midIdx - 1;
          }
        }
      }

      return -1;
    }

  }
}

export const __ = '__';