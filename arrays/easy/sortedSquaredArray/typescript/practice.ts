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
  {
    // O(n) time | O(n) space
    function sortedSquaredArray(array: number[]) {
      const result: number[] = new Array(array.length).fill(0);
      let leftIdx = 0;
      let rightIdx = array.length - 1;
      let currentOutputIdx = result.length - 1;
      while (leftIdx < rightIdx) {
        if (Math.abs(array[leftIdx]) > Math.abs(array[rightIdx])) {
          result[currentOutputIdx] = array[leftIdx] * array[leftIdx];
          leftIdx++;
        } else {
          result[currentOutputIdx] = array[rightIdx] * array[rightIdx];
          rightIdx--;
        }
        currentOutputIdx--;
      }
      result[0] = array[leftIdx] * array[leftIdx];

      return result;
    }
  }
  {
    // O(n) time | O(n) space
    function sortedSquaredArray(array: number[]) {
      const result: number[] = new Array(array.length).fill(0);
      let leftIdx = 0;
      let rightIdx = array.length - 1;
      for (let i = result.length - 1; i >= 0; i--) {
        if (Math.abs(array[leftIdx]) > Math.abs(array[rightIdx])) {
          result[i] = array[leftIdx] * array[leftIdx];
          leftIdx++;
        } else {
          result[i] = array[rightIdx] * array[rightIdx];
          rightIdx--;
        }
      }

      return result;
    }
  }
  {
    // O(n) time | O(n) space | n = length of array
    function sortedSquaredArray(array: number[]) {
      const result = new Array(array.length).fill(0);

      let [leftIdx, rightIdx] = [0, array.length - 1];
      for (let i = result.length - 1; i >= 0; i--) {
        const leftVal = Math.abs(array[leftIdx]);
        const rightVal = Math.abs(array[rightIdx]);
        if (leftVal > rightVal) {
          result[i] = leftVal * leftVal;
          leftIdx += 1;
        } else {
          result[i] = rightVal * rightVal;
          rightIdx -= 1;
        }
      }

      return result;
    }

  }
}

export const ___ = '___';