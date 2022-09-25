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
}

export const __ = '__';