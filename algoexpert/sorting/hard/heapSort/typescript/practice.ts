{
  {
    // O(nlog(n)) time | O(1) space
    function heapSort(array: number[]) {
      buildMaxHeap(array);
      let endIdx = array.length - 1;
      while (endIdx > 0) {
        siftDown(0, array, endIdx);
        [array[0], array[endIdx]] = [array[endIdx], array[0]];
        endIdx -= 1;
      }

      return array;
    }

    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown(i, array, array.length - 1);
      }
    }

    function siftDown(i: number, array: number[], endIdx: number) {
      while (true) {
        const [j, k] = [(2 * i) + 1, (2 * i) + 2];
        const maxIdx = getMaxIdx([i, j, k], array, endIdx);
        if (maxIdx === i) break;
        [array[i], array[maxIdx]] = [array[maxIdx], array[i]];
        i = maxIdx;
      }
    }

    function getMaxIdx([i, j, k]: number[], array: number[], endIdx: number) {
      let maxIdx = i;
      if (j <= endIdx && array[j] > array[maxIdx]) maxIdx = j;
      if (k <= endIdx && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }
  }
  {// O(nlog(n)) time
    // O(log(n)) space (because siftDown is implemented recursively)
    function heapSort(array: number[]) {
      buildMaxHeap(array);
      for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        siftDown(0, endIdx, array);
        swap(0, endIdx, array);
      }

      return array;
    }


    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown(i, array.length - 1, array);
      }
    }

    function siftDown(currentIdx: number, endIdx: number, array: number[]) {
      const childOneIdx = (currentIdx * 2) + 1;
      const childTwoIdx = (currentIdx * 2) + 2;
      const maxIdx = getMaxIdx([currentIdx, childOneIdx, childTwoIdx], endIdx, array);
      if (maxIdx === currentIdx) return;
      swap(currentIdx, maxIdx, array);
      siftDown(maxIdx, endIdx, array);
    }

    function getMaxIdx([i, j, k]: number[], endIdx: number, array: number[]) {
      let maxIdx = i;
      if (j <= endIdx && array[j] > array[maxIdx]) maxIdx = j;
      if (k <= endIdx && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }

    function swap(i: number, j: number, array: number[]) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  {
    // O(nlog(n)) time
    // O(1) space (because siftDown is implemented iteratively)
    function heapSort(array: number[]) {
      buildMaxHeap(array);
      for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        siftDown(0, endIdx, array);
        swap(0, endIdx, array);
      }

      return array;
    }


    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown(i, array.length - 1, array);
      }
    }

    function siftDown(currentIdx: number, endIdx: number, array: number[]) {
      while (true) {
        const childOneIdx = (currentIdx * 2) + 1;
        const childTwoIdx = (currentIdx * 2) + 2;
        const maxIdx = getMaxIdx([currentIdx, childOneIdx, childTwoIdx], endIdx, array);
        if (maxIdx === currentIdx) break;
        swap(currentIdx, maxIdx, array);
        currentIdx = maxIdx;
      }
    }

    function getMaxIdx([i, j, k]: number[], endIdx: number, array: number[]) {
      let maxIdx = i;
      if (j <= endIdx && array[j] > array[maxIdx]) maxIdx = j;
      if (k <= endIdx && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }

    function swap(i: number, j: number, array: number[]) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  {
    // O(nlog(n)) time
    // O(1) space (because siftDown is implemented iteratively)
    function heapSort(array: number[]) {
      buildMaxHeap(array);
      for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        siftDown(0, endIdx, array);
        swap(0, endIdx, array);
      }

      return array;
    }


    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown(i, array.length - 1, array);
      }
    }

    function siftDown(currentIdx: number, endIdx: number, array: number[]) {
      let maxIdx = Infinity;
      while (maxIdx !== currentIdx) {
        currentIdx = maxIdx < Infinity ? maxIdx : currentIdx;
        const childOneIdx = (currentIdx * 2) + 1;
        const childTwoIdx = (currentIdx * 2) + 2;
        maxIdx = getMaxIdx([currentIdx, childOneIdx, childTwoIdx], endIdx, array);
        swap(currentIdx, maxIdx, array);
      }
    }

    function getMaxIdx([i, j, k]: number[], endIdx: number, array: number[]) {
      let maxIdx = i;
      if (j <= endIdx && array[j] > array[maxIdx]) maxIdx = j;
      if (k <= endIdx && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }

    function swap(i: number, j: number, array: number[]) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  {
    // O(nlog(n)) time | O(log(n)) space
    function heapSort(array: number[]) {
      buildMaxHeap(array);
      for (let i = array.length - 1; i > 0; i--) {// n
        [array[0], array[i]] = [array[i], array[0]];
        siftDown([0, i], array); // log(n)
      }

      return array;
    }

    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown([i, array.length], array);
      }
    }

    function siftDown([start, end]: number[], array: number[]) {
      const [child1, child2] = [(2 * start) + 1, (2 * start) + 2];
      const maxIdx = getMaxIdx([start, child1, child2], end, array);
      if (maxIdx === start) return;
      [array[start], array[maxIdx]] = [array[maxIdx], array[start]];
      siftDown([maxIdx, end], array);// causes the O(log(n)) space
    }

    function getMaxIdx([i, j, k]: number[], limit: number, array: number[]) {
      let maxIdx = i;
      if (j < limit && array[j] > array[maxIdx]) maxIdx = j;
      if (k < limit && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }
  }
  {
    // O(nlog(n)) time | O(1) space
    function heapSort(array: number[]) {
      buildMaxHeap(array);
      for (let i = array.length - 1; i > 0; i--) {// n
        [array[0], array[i]] = [array[i], array[0]];
        siftDown([0, i], array); // log(n)
      }

      return array;
    }

    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown([i, array.length], array);
      }
    }

    function siftDown([start, end]: number[], array: number[]) {
      while (true) {
        const [child1, child2] = [(2 * start) + 1, (2 * start) + 2];
        const maxIdx = getMaxIdx([start, child1, child2], end, array);
        if (maxIdx === start) break;
        [array[start], array[maxIdx]] = [array[maxIdx], array[start]];
        start = maxIdx;
      }
    }

    function getMaxIdx([i, j, k]: number[], limit: number, array: number[]) {
      let maxIdx = i;
      if (j < limit && array[j] > array[maxIdx]) maxIdx = j;
      if (k < limit && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }
  }
  {
    // O(nlog(n)) time | O(1) space
    function heapSort(array: number[]) {
      buildMaxHeap(array);
      for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        [array[0], array[endIdx]] = [array[endIdx], array[0]];
        siftDown(0, endIdx, array);
      }

      return array;
    }

    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown(i, array.length, array);
      }
    }

    function siftDown(i: number, endIdx: number, array: number[]) {
      while (true) {
        const [j, k] = [(2 * i) + 1, (2 * i) + 2];
        const maxIdx = getMaxIdx([i, j, k], endIdx, array);
        if (maxIdx === i) break;
        [array[i], array[maxIdx]] = [array[maxIdx], array[i]];
        i = maxIdx;
      }
    }

    function getMaxIdx([i, j, k]: number[], endIdx: number, array: number[]): number {
      let maxIdx = i;
      if (j < endIdx && array[j] > array[maxIdx]) maxIdx = j;
      if (k < endIdx && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }
  }
  {
    // O(nlog(n)) time | O(nlog(n)) space
    // space complexity is due to the use of recursion in 'siftDown'
    function heapSort(array: number[]) {
      buildMaxHeap(array);
      for (let i = array.length - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        siftDown(0, i, array);
      }
      return array;
    }

    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown(i, array.length, array);
      }
    }

    function siftDown(startIdx: number, stopIdx: number, array: number[]) {
      const [childOneIdx, childTwoIdx] = [(2 * startIdx) + 1, (2 * startIdx) + 2];
      const maxIdx = getMaxIdx([startIdx, childOneIdx, childTwoIdx], stopIdx, array);
      if (maxIdx === startIdx) return;
      [array[maxIdx], array[startIdx]] = [array[startIdx], array[maxIdx]];
      siftDown(maxIdx, stopIdx, array);
    }

    function getMaxIdx([i, j, k]: number[], stopIdx: number, array: number[]) {
      let maxIdx = i;
      if (j < stopIdx && array[j] > array[maxIdx]) maxIdx = j;
      if (k < stopIdx && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }

    // [8, 5, 2, 9, 5, 6, 3]
  }
  {
    // O(nlog(n)) time | O(1) space
    function heapSort(array: number[]) {
      buildMaxHeap(array);
      for (let i = array.length - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        siftDown(0, i, array);
      }
      return array;
    }

    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown(i, array.length, array);
      }
    }

    function siftDown(startIdx: number, stopIdx: number, array: number[]) {
      while (true) {
        const [childOneIdx, childTwoIdx] = [(2 * startIdx) + 1, (2 * startIdx) + 2];
        const maxIdx = getMaxIdx([startIdx, childOneIdx, childTwoIdx], stopIdx, array);
        if (maxIdx === startIdx) break;
        [array[maxIdx], array[startIdx]] = [array[startIdx], array[maxIdx]];
        startIdx = maxIdx;
      }
    }

    function getMaxIdx([i, j, k]: number[], stopIdx: number, array: number[]) {
      let maxIdx = i;
      if (j < stopIdx && array[j] > array[maxIdx]) maxIdx = j;
      if (k < stopIdx && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }

    // [8, 5, 2, 9, 5, 6, 3]
  }
  {
    // O(n + nlog(n)) time | O(1) space
    // O(n * (1 + log(n))) time | O(1) space
    // O(nlog(n)) time | O(1) space
    function heapSort(array: number[]) {
      buildMaxHeap(array); // O(n) time | O(1) space
      for (let i = array.length - 1; i > 0; i--) { // O(nlog(n)) time | O(1) space
        [array[0], array[i]] = [array[i], array[0]];
        siftDown(0, array, i);
      }
      return array;
    }

    // O(n) time | O(1) space
    function buildMaxHeap(array: number[]) {
      for (let i = array.length - 1; i >= 0; i--) {
        siftDown(i, array, array.length);
      }
    }

    // O(log(n)) time | O(1) space
    function siftDown(currIdx: number, array: number[], stopIdx: number) {
      while (true) {
        const [childOneIdx, childTwoIdx] = [
          (2 * currIdx) + 1,
          (2 * currIdx) + 2,
        ];
        const maxIdx = getMaxIdx([currIdx, childOneIdx, childTwoIdx], array, stopIdx);
        if (maxIdx === currIdx) break;
        [array[maxIdx], array[currIdx]] = [array[currIdx], array[maxIdx]];
        currIdx = maxIdx;
      }
    }

    function getMaxIdx([i, j, k]: number[], array: number[], stopIdx: number) {
      let maxIdx = i;
      if (j < stopIdx && array[j] > array[maxIdx]) maxIdx = j;
      if (k < stopIdx && array[k] > array[maxIdx]) maxIdx = k;
      return maxIdx;
    }
  }
}

export const __ = '__';