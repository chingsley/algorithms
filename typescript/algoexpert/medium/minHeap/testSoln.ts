// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    for (let i = array.length - 1; i >= 0; i--) {
      this.siftDown(array, i);
    }
    return array;
  }

  siftDown(heap: number[], idx: number) {
    if (idx < 0 || idx > heap.length - 1) {
      return;
    }
    let done = false;
    let currentIdx = idx;
    while (!done) {
      let childIdx1 = (2 * currentIdx) + 1;
      let childIdx2 = (2 * currentIdx) + 2;
      let minIdx = this.getMinIdx(heap, currentIdx, childIdx1, childIdx2);
      if (minIdx !== currentIdx && currentIdx < heap.length) {
        this.swap(heap, currentIdx, minIdx);
        currentIdx = minIdx;
      } else {
        done = true;
      }
    }
  }

  siftUp(heap: number[], idx: number) {
    let childIdx = idx;
    let parentIdx = Math.floor((childIdx - 1) / 2);
    while (parentIdx >= 0 && heap[childIdx] < heap[parentIdx]) {
      this.swap(heap, childIdx, parentIdx);
      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(this.heap, 0, this.heap.length - 1);
    const result = this.heap.pop();
    this.siftDown(this.heap, 0);
    return result;
  }

  insert(value: number) {
    this.heap.push(value);
    this.siftUp(this.heap, this.heap.length - 1);
  }

  swap(heap: number[], i: number, j: number) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }

  getMinIdx(heap: number[], currentIdx: number, idx2: number, idx3: number) {
    let minIdx: number = currentIdx;
    let minValue: number = Infinity;
    for (let idx of [currentIdx, idx2, idx3]) {
      if (idx < heap.length && heap[idx] < minValue) {
        minIdx = idx;
        minValue = heap[idx];
      }
    }
    return minIdx;
  }
}




// const array = [8, 12, 23, 17, 31, 30, 44, 102, 18];

// const array = [31, 102, 12, 8, 30, 17, 18, 23, 44];
const array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

const minHeap = new MinHeap(array);

minHeap.insert(3);
minHeap.insert(4);
minHeap.insert(2);

console.log(minHeap.heap);


