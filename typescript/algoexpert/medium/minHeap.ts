// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
  heap: number[];
  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  // O(n) time | O(1) space
  buildHeap(array: number[]): number[] {
   const lastIdx = array.length - 1;
   const firstParentIdx = Math.floor((lastIdx - 1) / 2);
   for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
     this.siftDown(currentIdx, lastIdx, array);
   }

    return array;
  }

  // O(log n) time | O(1) space
  siftDown(currentIdx: number, endIdx: number, heap: number[]) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      let childTwoIdx = currentIdx * 2 + 2 <= endIdx ?  currentIdx * 2 + 2  : -1;
      let idxToSwap = null;
      if(childTwoIdx != -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if(heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        break;
      }
    }
  }

   // O(log n) time | O(1) space
  siftUp(currentIdx: number, heap: number[]) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  // O(1) time | O(1) space
  peek() {
    return this.heap[0]
  }

   // O(log n) time | O(1) space
  remove(): number {
   this.swap(0, this.heap.length - 1, this.heap)
   const valueToRemove = this.heap.pop();
   this.siftDown(0, this.heap.length -1, this.heap)
   return valueToRemove;
  }

 // O(log n) time | O(1) space
  insert(value: number) {
   this.heap.push(value);
   this.siftUp(this.heap.length - 1, this.heap)
  }

  // O(1) time | O(1) space
  swap(i: number, j: number, heap: number[]) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

// Do not edit the line below.
// exports.MinHeap = MinHeap;



{
  // JS
  /**
   * 
   * // Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
   const lastIdx = array.length - 1;
   const firstParentIdx = Math.floor((lastIdx - 1) / 2);
   for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
     this.siftDown(currentIdx, lastIdx, array);
   }

    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      let childTwoIdx = currentIdx * 2 + 2 <= endIdx ?  currentIdx * 2 + 2  : -1;
      let idxToSwap = null;
      if(childTwoIdx != -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if(heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        break;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  peek() {
  return this.heap[0]
  }

  remove() {
   this.swap(0, this.heap.length - 1, this.heap)
   const valueToRemove = this.heap.pop();
   this.siftDown(0, this.heap.length -1, this.heap)
   return valueToRemove;
  }

  insert(value) {
   this.heap.push(value);
   this.siftUp(this.heap.length - 1, this.heap)
  }
	
	swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
   */
}