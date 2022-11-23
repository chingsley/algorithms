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
  {
    // O(log(n)) time | O(1) space
    function shiftedBinarySearch(array: number[], target: number) {
      let [leftIdx, rightIdx] = [0, array.length - 1];
      while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (array[midIdx] === target) {
          return midIdx;
        } else if (array[leftIdx] < array[midIdx]) {
          if (target >= array[leftIdx] && target < array[midIdx]) {
            rightIdx = midIdx - 1;
          } else {
            leftIdx = midIdx + 1;
          }
        } else {
          if (target > array[midIdx] && target <= array[rightIdx]) {
            leftIdx = midIdx + 1;
          } else {
            rightIdx = midIdx - 1;
          }
        }
      }

      return -1;
    }
  }
  {
    // O(log(n)) time | O(1) space
    function shiftedBinarySearch(array: number[], target: number) {
      let [leftIdx, rightIdx] = [0, array.length - 1];
      while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (array[midIdx] === target) {
          return midIdx;
        } else if (array[leftIdx] < array[midIdx]) {
          if (array[leftIdx] <= target && target < array[midIdx]) {
            rightIdx = midIdx - 1;
          } else {
            leftIdx = midIdx + 1;
          }
        } else {
          if (target > array[midIdx] && target <= array[rightIdx]) {
            leftIdx = midIdx + 1;
          } else {
            rightIdx = midIdx - 1;
          }
        }
      }
      return -1;
    }

  }
  {
    // O(log(n)) time | O(1) space
    function shiftedBinarySearch(array: number[], target: number) {
      let [leftIdx, rightIdx] = [0, array.length - 1];
      while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (array[midIdx] === target) {
          return midIdx;
        } else if (array[leftIdx] < array[midIdx]) {
          if (array[leftIdx] <= target && target < array[midIdx]) {
            rightIdx = midIdx - 1;
          } else {
            leftIdx = midIdx + 1;
          }
        } else {
          if (array[midIdx] < target && target <= array[rightIdx]) {
            leftIdx = midIdx + 1;
          } else {
            rightIdx = midIdx - 1;
          }
        }
      }

      return -1;
    }

  }
  {
    // O(log(n)) time | O(1) space
    function shiftedBinarySearch(array: number[], target: number) {
      let [startIdx, endIdx] = [0, array.length - 1];
      while (startIdx <= endIdx) {
        const midIdx = Math.floor((startIdx + endIdx) / 2);
        if (array[midIdx] === target) return midIdx;

        if (array[startIdx] < array[midIdx]) {
          if (target >= array[startIdx] && target < array[midIdx]) {
            endIdx = midIdx - 1;
          } else {
            startIdx = midIdx + 1;
          }
        } else {
          if (target > array[midIdx] && target <= array[endIdx]) {
            startIdx = midIdx + 1;
          } else {
            endIdx = midIdx - 1;
          }
        }
      }

      return -1;
    }

  }
}

export const __ = '__';