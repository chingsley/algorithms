"use strict";
exports.__esModule = true;
exports.MinHeap = void 0;
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
var MinHeap = /** @class */ (function () {
    function MinHeap(array) {
        this.heap = this.buildHeap(array);
    }
    // O(n) time | O(1) space
    MinHeap.prototype.buildHeap = function (array) {
        var lastIdx = array.length - 1;
        var firstParentIdx = Math.floor((lastIdx - 1) / 2);
        for (var currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, lastIdx, array);
        }
        return array;
    };
    // O(log n) time | O(1) space
    MinHeap.prototype.siftDown = function (currentIdx, endIdx, heap) {
        var childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            var childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            var idxToSwap = null;
            if (childTwoIdx != -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                idxToSwap = childTwoIdx;
            }
            else {
                idxToSwap = childOneIdx;
            }
            if (heap[idxToSwap] < heap[currentIdx]) {
                this.swap(currentIdx, idxToSwap, heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            }
            else {
                break;
            }
        }
    };
    // O(log n) time | O(1) space
    MinHeap.prototype.siftUp = function (currentIdx, heap) {
        var parentIdx = Math.floor((currentIdx - 1) / 2);
        while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
    };
    // O(1) time | O(1) space
    MinHeap.prototype.peek = function () {
        return this.heap[0];
    };
    // O(log n) time | O(1) space
    MinHeap.prototype.remove = function () {
        this.swap(0, this.heap.length - 1, this.heap);
        var valueToRemove = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return valueToRemove;
    };
    // O(log n) time | O(1) space
    MinHeap.prototype.insert = function (value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
    };
    // O(1) time | O(1) space
    MinHeap.prototype.swap = function (i, j, heap) {
        var temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    };
    return MinHeap;
}());
exports.MinHeap = MinHeap;
// Do not edit the line below.
// exports.MinHeap = MinHeap;
