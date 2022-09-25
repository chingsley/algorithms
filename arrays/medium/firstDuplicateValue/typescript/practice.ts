{
  {
    // O(n) time | O(n) space (See next solution for const space implementation)
    function firstDuplicateValue(array: number[]) {
      const set: Set<number> = new Set();
      for (let num of array) {
        if (set.has(num)) return num;
        set.add(num);
      }

      return -1;
    }
  }
  {
    // O(n) time | O(1) space
    function firstDuplicateValue(array: number[]) {
      for (let num of array) {
        const absNum = Math.abs(num);
        const numIdx = absNum - 1;
        if (array[numIdx] < 0) return absNum;
        array[numIdx] *= -1;
      }

      return -1;
    }
  }
  {
    // O(n) time | O(1) space
    function firstDuplicateValue(array: number[]) {
      for (let num of array) {
        const absValue = Math.abs(num);
        const weightedIdx = absValue - 1;
        if (array[weightedIdx] < 0) return absValue;
        array[weightedIdx] *= -1;
      }
      return -1;
    }

  }
  {
    // O(n) time | O(1) space
    function firstDuplicateValue(array: number[]) {
      for (let num of array) {
        const abs = Math.abs(num);
        if (array[abs - 1] < 0) return abs;
        array[abs - 1] *= -1;
      }
      return -1;
    }
  }
  {
    // O(n) time | O(1) space
    function firstDuplicateValue(array: number[]) {
      for (let num of array) {
        const absNum = Math.abs(num);
        if (array[absNum - 1] < 0) return absNum;
        array[absNum - 1] *= -1;
      }

      return -1;
    }
  }
}

export const ___ = '___';