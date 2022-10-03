{
  {// recursion
    // O(log(n)) time | O(log(n)) space;
    // space complexity is due to recursion
    function indexEqualsValue(array: number[]) {
      return traverse(0, array.length - 1, array);
    }

    function traverse(startIdx: number, endIdx: number, array: number[]): number {
      if (startIdx > endIdx) return -1;

      const midIdx = Math.floor((startIdx + endIdx) / 2);
      // console.log({ midIdx, 'array[midIdx]': array[midIdx] })
      if (array[midIdx] === midIdx && midIdx === 0) {
        return midIdx;
      } else if (array[midIdx] === midIdx && array[midIdx - 1] < midIdx - 1) {
        return midIdx;
      } else if (array[midIdx] < midIdx) {
        return traverse(midIdx + 1, endIdx, array);
      } else {
        return traverse(startIdx, midIdx - 1, array);
      }
    }
  }
  {// iteration
    // O(log(n)) time | O(1) space
    function indexEqualsValue(array: number[]) {
      let [left, right] = [0, array.length - 1];
      while (left <= right) {
        const midIdx = Math.floor((left + right) / 2);
        if (array[midIdx] === midIdx && midIdx === 0) {
          return midIdx;
        } else if (array[midIdx] === midIdx && array[midIdx - 1] < midIdx - 1) {
          return midIdx;
        } else if (array[midIdx] < midIdx) {
          left = midIdx + 1;
        } else {
          right = midIdx - 1;
        }
      }

      return -1;
    }
  }
  {
    // O(log(n)) time | O(1) space
    function indexEqualsValue(array: number[]) {
      let [i, j] = [0, array.length - 1];
      while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        if (array[mid] === mid && mid === 0) {
          return mid;
        } else if (array[mid] === mid && array[mid - 1] < mid - 1) {
          return mid;
        } else if (array[mid] < mid) {
          i = mid + 1;
        } else {
          j = mid - 1;
        }
      }

      return -1;
    }
  }
  {
    // O(log(n)) time | O(1) space
    function indexEqualsValue(array: number[]) {
      let [i, j] = [0, array.length - 1];
      while (i <= j) {
        const midIdx = Math.floor((i + j) / 2);
        if (array[midIdx] === midIdx) {
          if (midIdx === 0) return midIdx;
          if (array[midIdx - 1] < midIdx - 1) return midIdx;
          j = midIdx - 1;
        } else if (array[midIdx] < midIdx) {
          i = midIdx + 1;
        } else {
          j = midIdx - 1;
        }
      }

      return -1;
    }
  }
  {
    // O(log(n)) time | O(log(n)) space
    function indexEqualsValue(array: number[]) {
      return bSearch(0, array.length - 1, array);
    }

    function bSearch(startIdx: number, endIdx: number, array: number[]): number {
      if (startIdx > endIdx) return -1;

      const midIdx = Math.floor((startIdx + endIdx) / 2);
      if (array[midIdx] === midIdx && midIdx === 0) return midIdx;
      if (array[midIdx] === midIdx && array[midIdx - 1] < midIdx - 1) return midIdx;
      if (array[midIdx - 1] >= midIdx - 1) return bSearch(startIdx, midIdx - 1, array);
      return bSearch(midIdx + 1, endIdx, array);
    }
  }
  {
    // O(log(n)) time | O(log(n)) space
    function indexEqualsValue(array: number[]) {
      return bSearch(0, array.length - 1, array);
    }

    function bSearch(startIdx: number, endIdx: number, array: number[]): number {
      if (startIdx > endIdx) return -1;

      const midIdx = Math.floor((startIdx + endIdx) / 2);
      if (array[midIdx] === midIdx && midIdx === 0) return midIdx;
      if (array[midIdx] === midIdx && array[midIdx - 1] < midIdx - 1) return midIdx;
      if (array[midIdx] < midIdx) {
        return bSearch(midIdx + 1, endIdx, array);
      } else {
        return bSearch(startIdx, midIdx - 1, array);
      }
    }
  }
  {
    // O(log(n)) time | O(1) space
    function indexEqualsValue(array: number[]) {
      let [leftIdx, rightIdx] = [0, array.length - 1];
      while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (array[midIdx] === midIdx && midIdx === 0) {
          return midIdx;
        } else if (array[midIdx] === midIdx && array[midIdx - 1] < midIdx - 1) {
          return midIdx;
        } else if (array[midIdx] < midIdx) {
          leftIdx = midIdx + 1;
        } else {
          rightIdx = midIdx - 1;
        }
      }

      return -1;
    }
  }
}


export const __ = '__';