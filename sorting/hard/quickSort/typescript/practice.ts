{
  {
    // O(nlog(n)) time (best case)
    // O(n^2) time (worst case)
    // O(log(n)) space (all cases)
    function quickSort(array: number[]): number[] {
      if (array.length <= 1) return array;

      const pivot = array[0];
      const lessThanPivot: number[] = [];
      const greaterThanPivot: number[] = [];
      for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          lessThanPivot.push(array[i]);
        } else {
          greaterThanPivot.push(array[i]);
        }
      }

      return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
    }
  }
  {// SORTING THE ARRAY IN-PLACE
    // best case: O(nlog(n)) time | O(log(n)) space
    // worst case: O(n^2) time | O(log(n)) space
    function quickSort(array: number[]) {
      quickSortAtRange(0, array.length - 1, array);
      return array;
    }

    function quickSortAtRange(startIdx: number, endIdx: number, array: number[]) {
      if (startIdx >= endIdx) return;

      let pivot = startIdx;
      let left = startIdx + 1;
      let right = endIdx;
      while (left <= right) {
        if (array[left] > array[pivot] && array[right] < array[pivot]) {
          [array[left], array[right]] = [array[right], array[left]];
        }
        if (array[left] <= array[pivot]) left += 1;
        if (array[right] >= array[pivot]) right -= 1;
      }

      [array[pivot], array[right]] = [array[right], array[pivot]];

      const leftSubRange = (right - 1) - startIdx + 1;
      const rightSubRange = endIdx - (right + 1) + 1;
      if (leftSubRange < rightSubRange) {
        quickSortAtRange(startIdx, right - 1, array);
        quickSortAtRange(right + 1, endIdx, array);
      } else {
        quickSortAtRange(right + 1, endIdx, array);
        quickSortAtRange(startIdx, right - 1, array);
      }
    }
  }
  {// Choosing the First element as pivot
    // best case: O(nlog(n)) time | O(log(n)) space
    // worst case: O(n^2) time | O(log(n)) space
    function quickSort(array: number[]): number[] {
      quickSortRange([0, array.length - 1], array);
      return array;
    }

    function quickSortRange([startIdx, endIdx]: number[], array: number[]) {
      if (startIdx >= endIdx) return;

      const pivot = array[startIdx];
      let left = startIdx + 1;
      let right = endIdx;
      while (left <= right) {
        if (array[left] > pivot && array[right] < pivot) {
          [array[left], array[right]] = [array[right], array[left]];
        }
        if (array[left] <= pivot) left += 1;
        if (array[right] >= pivot) right -= 1;
      }

      [array[startIdx], array[right]] = [array[right], array[startIdx]];

      quickSortRange([startIdx, right - 1], array);
      quickSortRange([right + 1, endIdx], array);
    }
  }
  {// Choosing the Last Element as pivot
    // best case: O(nlog(n)) time | O(log(n)) space
    // worst case: O(n^2) time | O(log(n)) space
    function quickSort(array: number[]): number[] {
      quickSortRange([0, array.length - 1], array);
      return array;
    }

    function quickSortRange([startIdx, endIdx]: number[], array: number[]) {
      if (startIdx >= endIdx) return;

      const pivot = array[endIdx];

      let left = startIdx;
      let right = endIdx - 1;

      while (left <= right) {
        if (array[left] > pivot && array[right] < pivot) {
          [array[left], array[right]] = [array[right], array[left]];
        }
        if (array[left] <= pivot) left += 1;
        if (array[right] >= pivot) right -= 1;
      }

      [array[endIdx], array[left]] = [array[left], array[endIdx]];

      quickSortRange([startIdx, left - 1], array);
      quickSortRange([left + 1, endIdx], array);
    }
  }
  {
    // worst case: O(n^2) time | O(nlog(n)) space
    // best case: O(nlog(n)) time | O(nlog(n)) space
    function quickSort(array: number[]): number[] {
      if (array.length <= 1) return array;

      const pivot = array[0];
      const greaterThanPivot: number[] = [];
      const lessThanPivot: number[] = [];
      for (let i = 1; i < array.length; i++) {
        if (array[i] <= pivot) {
          lessThanPivot.push(array[i]);
        } else {
          greaterThanPivot.push(array[i]);
        }
      }

      return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
    }
  }
}

export const __ = '__';