{
  {
    function isValidSubsequence(array: number[], sequence: number[]) {
      let i = 0;
      for (let num of sequence) {
        let found = false;
        while (i < array.length && !found) {
          if (array[i] === num) {
            found = true;
          }
          i += 1;
        }
        if (!found) return false;
      }
      return true;
    }
  }
  {
    // O(n) time | O(1) space
    // n = length of array
    function isValidSubsequence(array: number[], sequence: number[]) {
      let idx = 0;
      for (let num of sequence) {
        let found: boolean = false;
        while (idx < array.length && !found) {
          if (array[idx] === num) {
            found = true;
          }
          idx += 1;
        }

        if (!found) return false;
      }

      return true;
    }

  }
  {
    // O(n) time | o(1) space
    function isValidSubsequence(array: number[], sequence: number[]) {
      let i = 0;
      for (let num of sequence) {
        let found = false;
        while (i < array.length && !found) {
          if (array[i] === num) found = true;
          i += 1;
        }

        if (!found) return false;
      }

      return true;
    }

  }
}

export const ___ = '___';