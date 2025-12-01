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
  {
    // O(n) time | O(1) space
    function findThreeLargestNumbers(array: number[]) {
      let result: number[] = new Array(3).fill(-Infinity);
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
  {
    // O(n) time | O(1) space
    function findThreeLargestNumbers(array: number[]) {
      const result = new Array(3).fill(-Infinity);
      for (let num of array) {
        if (num > result[0]) {
          result[0] = num;
          for (let i = 0; i < result.length - 1; i++) {
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
    // O(n) time | O(1) space
    function findThreeLargestNumbers(array: number[]) {
      const res = new Array(3).fill(-Infinity); // O(3) space = O(1) space
      for (let num of array) {
        if (num > res[0]) {
          res[0] = num;
          for (let i = 0; i < res.length; i++) { // O(3) time = O(1) time
            for (let j = res.length - 1; j > i; j--) { // O(3) time = O(1) time
              if (res[j] < res[j - 1]) [res[j], res[j - 1]] = [res[j - 1], res[j]];
            }
          }
        }
      }

      return res;
    }
  }
}

export const __ = '__';