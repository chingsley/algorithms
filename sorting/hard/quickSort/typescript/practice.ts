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
  {
    // SORTING THE ARRAY IN-PLACE
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
  {// PIVOT INDEX = END INDEX
    // worst case: O(n^2) time | O(log(n)) space
    // best case: O(nlog(n)) time | O(log(n)) space
    // (space complexity in both cases is due to recursion)
    function quickSort(array: number[]): number[] {
      quickSortInRange(0, array.length - 1, array);
      return array;
    }

    function quickSortInRange(startIdx: number, endIdx: number, array: number[]) {
      if (startIdx >= endIdx) return;

      const pivot = array[endIdx];
      let leftIdx = startIdx;
      let rightIdx = endIdx - 1;
      while (leftIdx <= rightIdx) {
        if (array[leftIdx] > pivot && array[rightIdx] < pivot) {
          [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
        }
        if (array[leftIdx] <= pivot) leftIdx += 1;
        if (array[rightIdx] >= pivot) rightIdx -= 1;
      }
      [array[leftIdx], array[endIdx]] = [array[endIdx], array[leftIdx]]; // recall: we chose endIdx as the pivot index

      quickSortInRange(startIdx, leftIdx - 1, array);
      quickSortInRange(leftIdx + 1, endIdx, array);
    }
  }
  {// PIVOT INDEX = START INDEX
    // worst case: O(n^2) time | O(log(n)) space
    // best case: O(nlog(n)) time | O(log(n)) space
    // (space complexity in both cases is due to recursion)
    function quickSort(array: number[]): number[] {
      quickSortInRange(0, array.length - 1, array);
      return array;
    }

    function quickSortInRange(startIdx: number, endIdx: number, array: number[]) {
      if (startIdx >= endIdx) return;

      const pivot = array[startIdx];
      let leftIdx = startIdx + 1;
      let rightIdx = endIdx;
      while (leftIdx <= rightIdx) {
        if (array[leftIdx] > pivot && array[rightIdx] < pivot) {
          [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
        }
        if (array[leftIdx] <= pivot) leftIdx += 1;
        if (array[rightIdx] >= pivot) rightIdx -= 1;
      }
      [array[rightIdx], array[startIdx]] = [array[startIdx], array[rightIdx]]; // recall: we chose startIdx as the pivot index

      quickSortInRange(startIdx, rightIdx - 1, array);
      quickSortInRange(rightIdx + 1, endIdx, array);
    }
  }
  {
    // Worst case: O(n^2) time | O(1) space;
    // best case: O(nlog(n)) time | O(1) space
    function quickSort(array: number[]): number[] {
      quickSortInRange(0, array.length - 1, array);
      return array;
    }

    function quickSortInRange(start: number, end: number, array: number[]) {
      if (start >= end) return;

      let pivot = array[end];
      let right = end - 1;
      let left = start;
      while (left <= right) {
        if (array[left] > pivot && array[right] < pivot) {
          [array[left], array[right]] = [array[right], array[left]];
        }
        if (array[left] <= pivot) left += 1;
        if (array[right] >= pivot) right -= 1;
      }

      [array[left], array[end]] = [array[end], array[left]];
      quickSortInRange(start, left - 1, array);
      quickSortInRange(left + 1, end, array);
    }
  }
  {
    // worst case: O(n^2) time | O(log(n)) space
    // best/avg. case: O(nlog(n)) time | O(log(n)) space
    function quickSort(array: number[]): number[] {
      quickSortInRange([0, array.length - 1], array);
      return array;
    }

    function quickSortInRange([startIdx, endIdx]: number[], array: number[]) {
      if (startIdx >= endIdx) return;

      const pivot = array[endIdx];
      let [leftIdx, rightIdx] = [startIdx, endIdx - 1];
      while (leftIdx <= rightIdx) {
        if (array[leftIdx] > pivot && array[rightIdx] < pivot) {
          [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
        }
        if (array[leftIdx] <= pivot) leftIdx += 1;
        if (array[rightIdx] >= pivot) rightIdx -= 1;
      }

      [array[leftIdx], array[endIdx]] = [array[endIdx], array[leftIdx]];
      quickSortInRange([startIdx, leftIdx - 1], array);
      quickSortInRange([leftIdx + 1, endIdx], array);
    }
  }
  {

    // worst case: O(n^2) time | O(1) space;
    // avg. case:  O(nlog(n)) time | O(1) space;
    // best case:  O(nlog(n)) time | O(1) space;
    function quickSort(array: number[]): number[] {
      quickSortInRange([0, array.length - 1], array);
      return array;
    }

    function quickSortInRange([startIdx, endIdx]: number[], array: number[]) {
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

      [array[left], array[endIdx]] = [array[endIdx], array[left]];

      quickSortInRange([startIdx, left - 1], array);
      quickSortInRange([left + 1, endIdx], array);
    }
  }
  {
    // worst case: O(n^2) time | O(log(n)) space
    // best case: O(nlog(n)) time | O(log(n)) space
    // average case: O(nlog(n)) time | O(log(n)) space
    function quickSort(array: number[]): number[] {
      quickSortInRange(0, array.length - 1, array);
      return array;
    }

    function quickSortInRange(startIdx: number, endIdx: number, array: number[]) {
      if (startIdx >= endIdx) return;

      const pivot = array[startIdx];
      let [leftIdx, rightIdx] = [startIdx + 1, endIdx];
      while (leftIdx <= rightIdx) {
        if (array[leftIdx] > pivot && array[rightIdx] < pivot) {
          [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
        }
        if (array[leftIdx] <= pivot) leftIdx += 1;
        if (array[rightIdx] >= pivot) rightIdx -= 1;
      }
      [array[startIdx], array[rightIdx]] = [array[rightIdx], array[startIdx]];

      const leftIsSmaller = ((rightIdx - 1) - startIdx) > ((endIdx) - (rightIdx + 1));
      if (leftIsSmaller) {
        quickSortInRange(startIdx, rightIdx - 1, array);
        quickSortInRange(rightIdx + 1, endIdx, array);
      } else {
        quickSortInRange(startIdx, rightIdx - 1, array);
        quickSortInRange(rightIdx + 1, endIdx, array);
      }
    }
  }
}

export const __ = '__';