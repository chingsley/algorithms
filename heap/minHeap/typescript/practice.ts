{
  {
    // Do not edit the class below except for the buildHeap,
    // siftDown, siftUp, peek, remove, and insert methods.
    // Feel free to add new properties and methods to the class.
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      // O(log(n)) time | O(log(n)) space
      // space complexity is due to recursion
      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      // O(log(n)) time | O(log(n)) space
      // space complexity is due to recursion
      siftDown(idx: number, heap: number[]) {
        const i = idx;
        const j = (2 * i) + 1;
        const k = (2 * i) + 2;
        const minIdx = this.getMinIdx([i, j, k], heap);
        if (minIdx === i) return;
        [heap[i], heap[minIdx]] = [heap[minIdx], heap[i]];
        this.siftDown(minIdx, heap);
      }

      // O(log(n)) time | O(log(n)) space
      // space complexity is due to recursion
      getMinIdx([i, j, k]: number[], heap: number[]): number {
        let minIdx = i;
        if (heap[j] && heap[j] < heap[minIdx]) minIdx = j;
        if (heap[k] && heap[k] < heap[minIdx]) minIdx = k;
        return minIdx;
      }

      // O(log(n)) time | O(log(n)) space
      // space complexity is due to recursion
      siftUp(i: number, heap: number[]) {
        const parentIdx = Math.floor((i - 1) / 2);
        if (parentIdx < 0 || heap[parentIdx] <= heap[i]) return;
        [heap[parentIdx], heap[i]] = [heap[i], heap[parentIdx]];
        this.siftUp(parentIdx, heap);
      }

      // O(1) time | O(1) space
      peek() {
        return this.heap[0];
      }

      // O(log(n)) time | O(log(n)) space
      // space complexity is due to recursion
      remove() {
        const lastIdx = this.heap.length - 1;
        [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]];
        const min = this.heap.pop();
        this.siftDown(0, this.heap);
        return min;
      }

      // O(log(n)) time | O(log(n)) space
      // space complexity is due to recursion
      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
      }
    }
  }
  {
    // Do not edit the class below except for the buildHeap,
    // siftDown, siftUp, peek, remove, and insert methods.
    // Feel free to add new properties and methods to the class.
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      // O(n) time | O(1) space
      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      // O(log(n)) time | O(1) space
      siftDown(i: number, array: number[]) {
        const j = (2 * i) + 1;
        const k = (2 * i) + 2;
        const minIdx = this.getMinIdx([i, j, k], array);
        if (minIdx === i) return;
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
        this.siftDown(minIdx, array);
      }

      // O(log(n)) time | O(1) space
      siftUp(i: number) {
        const j = Math.floor((i - 1) / 2);
        if (j < 0 || this.heap[j] < this.heap[i]) return;
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        this.siftUp(j);
      }

      // O(1) time | O(1) space
      peek() {
        return this.heap[0];
      }

      // O(log(n)) time | O(1) space
      remove() {
        const [i, j] = [0, this.heap.length - 1];
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        const num = this.heap.pop()!;
        this.siftDown(0, this.heap);
        return num;
      }

      // O(log(n)) time | O(1) space
      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
      }

      // O(1) time | O(1) space
      getMinIdx([i, j, k]: number[], array: number[]): number {
        let minIdx = i;
        if (j < array.length && array[j] < array[minIdx]) minIdx = j;
        if (k < array.length && array[k] < array[minIdx]) minIdx = k;
        return minIdx;
      }
    }
  }
  {
    // Do not edit the class below except for the buildHeap,
    // siftDown, siftUp, peek, remove, and insert methods.
    // Feel free to add new properties and methods to the class.
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      siftDown(i: number, array: number[]) {
        let [j, k] = [(2 * i) + 1, (2 * i) + 2];
        const minIdx = this.getMinIdx([i, j, k], array);
        if (minIdx === i) return;
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
        this.siftDown(minIdx, array);
      }

      siftUp(i: number) {
        const array = this.heap;
        const j = Math.floor((i - 1) / 2);
        if (j < 0 || array[j] <= array[i]) return;
        [array[i], array[j]] = [array[j], array[i]];
        this.siftUp(j);
      }

      getMinIdx([i, j, k]: number[], array: number[]): number {
        let minIdx = i;
        if (j < array.length && array[j] < array[minIdx]) minIdx = j;
        if (k < array.length && array[k] < array[minIdx]) minIdx = k;
        return minIdx;
      }

      peek() {
        return this.heap[0];
      }

      remove() {
        const endIdx = this.heap.length - 1;
        [this.heap[0], this.heap[endIdx]] = [this.heap[endIdx], this.heap[0]];
        const min = this.heap.pop()!;
        this.siftDown(0, this.heap);
        return min;
      }

      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
      }
    }
  }
  {

    // Do not edit the class below except for the buildHeap,
    // siftDown, siftUp, peek, remove, and insert methods.
    // Feel free to add new properties and methods to the class.
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      // O(n) time
      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      // O(log(n)) time | O(log(n)) space (recursive)
      // o(log(n)) time | O(1) space (iteration)
      siftDown(i: number, array: number[]) {
        const [j, k] = [(2 * i) + 1, (2 * i) + 2];
        const minIdx = this.getMinIdx([i, j, k], array);
        if (minIdx === i) return;
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
        this.siftDown(minIdx, array);
      }

      // O(log(n)) time | O(log(n)) space (recursive)
      // o(log(n)) time | O(1) space (iteration)
      siftUp(i: number, array: number[] = this.heap) {
        const j = Math.floor((i - 1) / 2);
        if (j < 0 || array[j] <= array[i]) return;
        [array[i], array[j]] = [array[j], array[i]];
        this.siftUp(j, array);
      }

      peek() {
        return this.heap[0];
      }

      remove() {
        const z = this.heap.length - 1;
        [this.heap[0], this.heap[z]] = [this.heap[z], this.heap[0]];
        const num = this.heap.pop();
        this.siftDown(0, this.heap);
        return num;
      }

      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
      }

      getMinIdx([i, j, k]: number[], array: number[]) {
        let minIdx = i;
        if (j < array.length && array[j] < array[minIdx]) minIdx = j;
        if (k < array.length && array[k] < array[minIdx]) minIdx = k;
        return minIdx;
      }
    }
  }
  {
    // Do not edit the class below except for the buildHeap,
    // siftDown, siftUp, peek, remove, and insert methods.
    // Feel free to add new properties and methods to the class.
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      // O(n) time | O(n) space
      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      // O(log(n)) time | O(log(n)) space
      siftDown(i: number, array: number[]) {
        const [j, k] = [(2 * i) + 1, (2 * i) + 2];
        const minIdx = this.getMinIdx([i, j, k], array);
        if (minIdx === i) return;
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
        this.siftDown(minIdx, array);
      }

      // O(log(n)) time | O(log(n)) space
      siftUp(i: number) {
        const parentIdx = Math.floor((i - 1) / 2);
        if (parentIdx < 0) return;
        if (this.heap[parentIdx] <= this.heap[i]) return;
        [this.heap[parentIdx], this.heap[i]] = [this.heap[i], this.heap[parentIdx]];
        this.siftUp(parentIdx);
      }

      peek() {
        return this.heap[0];
      }

      // O(log(n)) time | O(log(n)) space
      remove() {
        const endIdx = this.heap.length - 1;
        [this.heap[0], this.heap[endIdx]] = [this.heap[endIdx], this.heap[0]];
        const value = this.heap.pop();
        this.siftDown(0, this.heap);
        return value;
      }

      // O(log(n)) time | O(log(n)) space
      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
      }

      getMinIdx([i, j, k]: number[], array: number[]): number {
        let minIdx = i;
        if (j < array.length && array[j] < array[minIdx]) minIdx = j;
        if (k < array.length && array[k] < array[minIdx]) minIdx = k;
        return minIdx;
      }
    }
  }
  {
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      // O(n) time | O(1) space
      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      // O(log(n)) time | O(l) space
      siftDown(i: number, array: number[]) {
        while (true) {
          const [j, k] = [(2 * i) + 1, (2 * i) + 2];
          const minIdx = this.getMinIdx([i, j, k], array);
          if (minIdx === i) break;
          [array[i], array[minIdx]] = [array[minIdx], array[i]];
          i = minIdx;
        }
      }

      // O(log(n)) time | O(1) space
      siftUp(i: number) {
        while (true) {
          const parentIdx = Math.floor((i - 1) / 2);
          if (parentIdx < 0) return;
          if (this.heap[parentIdx] <= this.heap[i]) break;
          [this.heap[parentIdx], this.heap[i]] = [this.heap[i], this.heap[parentIdx]];
          i = parentIdx;
        }
      }

      peek() {
        return this.heap[0];
      }

      // O(log(n)) time | O(1) space
      remove() {
        const endIdx = this.heap.length - 1;
        [this.heap[0], this.heap[endIdx]] = [this.heap[endIdx], this.heap[0]];
        const value = this.heap.pop();
        this.siftDown(0, this.heap);
        return value;
      }

      // O(log(n)) time | O(1) space
      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
      }

      getMinIdx([i, j, k]: number[], array: number[]): number {
        let minIdx = i;
        if (j < array.length && array[j] < array[minIdx]) minIdx = j;
        if (k < array.length && array[k] < array[minIdx]) minIdx = k;
        return minIdx;
      }
    }
  }
  {
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      // o(n) time | O(log(n)) space
      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      // O(log(n)) time | O(log(n)) space
      siftDown(i: number, array: number[]) {
        const [j, k] = [(2 * i) + 1, (2 * i) + 2];
        const minIdx = this.getMinIdx([i, j, k], array);
        if (minIdx === i) return;
        [array[minIdx], array[i]] = [array[i], array[minIdx]];
        this.siftDown(minIdx, array);
      }

      // O(log(n)) time | O(log(n)) space
      siftUp(i: number) {
        const j = Math.floor((i - 1) / 2);
        if (j < 0 || this.heap[j] < this.heap[i]) return;
        [this.heap[j], this.heap[i]] = [this.heap[i], this.heap[j]];
        this.siftUp(j);
      }

      // O(1) time | O(1) space
      peek() {
        return this.heap[0];
      }

      // O(log(n)) time | O(log(n)) space
      remove() {
        const endIdx = this.heap.length - 1;
        [this.heap[0], this.heap[endIdx]] = [this.heap[endIdx], this.heap[0]];
        const minValue = this.heap.pop();
        this.siftDown(0, this.heap);
        return minValue;
      }

      // O(log(n)) time | O(log(n)) space
      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
      }

      // O(1) time | O(1) space
      getMinIdx([i, j, k]: number[], array: number[]): number {
        let minIdx = i;
        if (j < array.length && array[j] < array[minIdx]) minIdx = j;
        if (k < array.length && array[k] < array[minIdx]) minIdx = k;
        return minIdx;
      }
    }
  }
  {
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      // o(n) time | O(1) space
      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      // O(log(n)) time | O(1) space
      siftDown(i: number, array: number[]) {
        while (true) {
          const [j, k] = [(2 * i) + 1, (2 * i) + 2];
          const minIdx = this.getMinIdx([i, j, k], array);
          if (minIdx === i) break;
          [array[minIdx], array[i]] = [array[i], array[minIdx]];
          i = minIdx;
        }
      }

      // O(log(n)) time | O(1) space
      siftUp(i: number) {
        while (true) {
          const j = Math.floor((i - 1) / 2);
          if (j < 0 || this.heap[j] < this.heap[i]) break;
          [this.heap[j], this.heap[i]] = [this.heap[i], this.heap[j]];
          i = j;
        }
      }

      // O(1) time | O(1) space
      peek() {
        return this.heap[0];
      }

      // O(log(n)) time | O(1) space
      remove() {
        const endIdx = this.heap.length - 1;
        [this.heap[0], this.heap[endIdx]] = [this.heap[endIdx], this.heap[0]];
        const minValue = this.heap.pop();
        this.siftDown(0, this.heap);
        return minValue;
      }

      // O(log(n)) time | O(1) space
      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
      }

      // O(1) time | O(1) space
      getMinIdx([i, j, k]: number[], array: number[]): number {
        let minIdx = i;
        if (j < array.length && array[j] < array[minIdx]) minIdx = j;
        if (k < array.length && array[k] < array[minIdx]) minIdx = k;
        return minIdx;
      }
    }
  }
  {
    // with recursive implementation of 'siftDown' and 'siftUp'
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      // O(n) time | O(log(n)) space
      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      // O(log(n)) time | O(log(n)) space
      siftDown(currIdx: number, array: number[]) {
        const [childOneIdx, childTwoIdx] = [
          (2 * currIdx) + 1,
          (2 * currIdx) + 2
        ];
        const minIdx = this.getMinIdx([currIdx, childOneIdx, childTwoIdx], array);
        if (minIdx === currIdx) return;
        [array[minIdx], array[currIdx]] = [array[currIdx], array[minIdx]];
        this.siftDown(minIdx, array);
      }

      // O(log(n)) time | O(log(n)) space
      siftUp(i: number, array: number[]) {
        const parentIdx = Math.floor((i - 1) / 2);
        if (parentIdx < 0) return;
        if (array[parentIdx] > array[i]) {
          [array[parentIdx], array[i]] = [array[i], array[parentIdx]];
        }
        this.siftUp(parentIdx, array);
      }

      // O(1) time | O(1) space
      peek() {
        return this.heap[0];
      }

      // O(log(n)) time | O(log(n)) space
      remove() {
        const endIdx = this.heap.length - 1;
        [this.heap[0], this.heap[endIdx]] = [this.heap[endIdx], this.heap[0]];
        const value = this.heap.pop();
        this.siftDown(0, this.heap);
        return value;
      }

      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
      }

      // O(1) time | O(1) space
      getMinIdx([i, j, k]: number[], array: number[]) {
        let minIdx = i;
        if (j < array.length && array[j] < array[minIdx]) minIdx = j;
        if (k < array.length && array[k] < array[minIdx]) minIdx = k;
        return minIdx;
      }
    }
  }
  {// with iterative implementation of 'siftDown' and 'siftUp'
    class MinHeap {
      heap: number[];

      constructor(array: number[]) {
        this.heap = this.buildHeap(array);
      }

      // O(n) time | O(1) space
      buildHeap(array: number[]) {
        for (let i = array.length - 1; i >= 0; i--) {
          this.siftDown(i, array);
        }
        return array;
      }

      // O(log(n)) time | O(1) space
      siftDown(currIdx: number, array: number[]) {
        while (true) {
          const [childOneIdx, childTwoIdx] = [
            (2 * currIdx) + 1,
            (2 * currIdx) + 2
          ];
          const minIdx = this.getMinIdx([currIdx, childOneIdx, childTwoIdx], array);
          if (minIdx === currIdx) break;

          [array[minIdx], array[currIdx]] = [array[currIdx], array[minIdx]];
          currIdx = minIdx;
        }
      }

      // O(log(n)) time | O(1) space
      siftUp(i: number, array: number[]) {
        while (true) {
          const parentIdx = Math.floor((i - 1) / 2);
          if (parentIdx < 0) break;
          if (array[parentIdx] <= array[i]) break;

          [array[parentIdx], array[i]] = [array[i], array[parentIdx]];
          i = parentIdx;
        }
      }

      // O(1) time | O(1) space
      peek() {
        return this.heap[0];
      }

      // O(log(n)) time | O(1) space
      remove() {
        const endIdx = this.heap.length - 1;
        [this.heap[0], this.heap[endIdx]] = [this.heap[endIdx], this.heap[0]];
        const value = this.heap.pop();
        this.siftDown(0, this.heap);
        return value;
      }

      insert(value: number) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
      }

      // O(1) time | O(1) space
      getMinIdx([i, j, k]: number[], array: number[]) {
        let minIdx = i;
        if (j < array.length && array[j] < array[minIdx]) minIdx = j;
        if (k < array.length && array[k] < array[minIdx]) minIdx = k;
        return minIdx;
      }
    }
  }
}


export const __ = '__';