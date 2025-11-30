// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }
    buildHeap(array) {
        // Write your code here.
        return array;
    }
    siftDown(idx) {
        if (idx < 0 || idx > this.heap.length - 1) {
            return;
        }
        let childIdx1 = (2 * idx) + 1;
        let childIdx2 = (2 * idx) + 2;
        let minIdx = this.getMinIdx(idx, childIdx1, childIdx2);
        if (minIdx !== idx) {
            this.swap(idx, minIdx);
            this.siftDown(minIdx);
        }
    }
    siftDown2(idx) {
        if (idx < 0 || idx > this.heap.length - 1)
            return;
        let minIdx = this.getMinIdx(idx, (2 * idx) + 1, (2 * idx) + 2);
        if (minIdx === idx)
            return;
        this.swap(idx, minIdx);
        this.siftDown2(minIdx);
    }
    siftUp(idx) {
        let parentIdx = Math.floor((idx - 1) / 2);
        if (parentIdx < 0 || this.heap[idx] >= this.heap[parentIdx])
            return;
        this.swap(idx, parentIdx);
        this.siftUp(parentIdx);
    }
    peek() {
        // Write your code here.
        return -1;
    }
    remove() {
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.siftDown(0);
    }
    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    }
    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    getMinIdx(idx1, idx2, idx3) {
        let minIdx;
        let minValue = Infinity;
        for (let idx of [idx1, idx2, idx3]) {
            if (idx < this.heap.length && this.heap[idx] < minValue) {
                minIdx = idx;
                minValue = this.heap[idx];
            }
        }
        return minIdx;
    }
}
const array = [8, 12, 23, 17, 31, 30, 44, 102, 18];
const minHeap = new MinHeap(array);
minHeap.insert(3);
minHeap.insert(4);
console.log(minHeap.heap);
minHeap.remove();
console.log(minHeap.heap);
