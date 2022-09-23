{
  {
    // O(log(n)) time | O(1) space
    function binarySearch(array: number[], target: number): number {
      let [i, j] = [0, array.length - 1];
      while (i <= j) {
        const m = Math.floor((i + j) / 2);
        if (array[m] === target) {
          return m;
        } else if (target < array[m]) {
          j = m - 1;
        } else {
          i = m + 1;
        }
      }

      return -1;
    }
  }
  {

    // O(log(n)) time | O(1) space
    function binarySearch(array: number[], target: number): number {
      let [left, right] = [0, array.length - 1];
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
          return mid;
        } else if (target < array[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }

      return -1;
    }
  }
  {
    // O(log(n)) time | O(log(n)) space
    function binarySearch(array: number[], target: number) {
      return searchInRange([0, array.length - 1], array, target);
    }

    function searchInRange([startIdx, endIdx]: [number, number], array: number[], target: number): number {
      if (startIdx > endIdx) return -1;

      const midIdx = Math.floor((startIdx + endIdx) / 2);
      if (array[midIdx] === target) return midIdx;
      if (target < array[midIdx]) return searchInRange([startIdx, midIdx - 1], array, target);
      return searchInRange([midIdx + 1, endIdx], array, target);
    }
  }
  {
    // O(log(n)) time | O(1) sapce
    function binarySearch(array: number[], target: number): number {
      let [leftIdx, rightIdx] = [0, array.length - 1];
      while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (target === array[midIdx]) {
          return midIdx;
        } else if (target < array[midIdx]) {
          rightIdx = midIdx - 1;
        } else {
          leftIdx = midIdx + 1;
        }
      }

      return -1;
    }
  }
}

export const __ = '__';