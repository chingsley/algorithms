{
  {
    // O(4n) time = O(n) time
    // O(1) space
    function findThreeLargestNumbers(array: number[]) {
      let result = new Array(3).fill(-Infinity);
      for (let num of array) { // O(n) time
        if (num > result[0]) {
          result[0] = num;
          for (let i = 0; i < result.length - 1; i++) { // O(4) time
            if (result[i] > result[i + 1]) {
              [result[i], result[i + 1]] = [result[i + 1], result[i]];
            }
          }
        }
      }

      return result;
    }
  }
  {
    function findThreeLargestNumbers(array: number[]) {
      let result = new Array(3).fill(-Infinity);
      for (let num of array) {
        if (num > result[0]) {
          insertInSortedResult(num, result);
        }
      }

      return result;
    }

    function insertInSortedResult(num: number, result: number[]) {
      result[0] = num;
      for (let i = 0; i < result.length - 1; i++) {
        if (result[i] > result[i + 1]) {
          [result[i], result[i + 1]] = [result[i + 1], result[i]];
        }
      }
    }
  }
}

export const __ = '__';