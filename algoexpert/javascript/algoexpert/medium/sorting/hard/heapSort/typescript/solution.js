// O(nlog(n)) time
// O(log(n)) space (b/c swiftDown is implemented recursively)
export function heapSort(array) {
    buildMaxHeap(array);
    let endIdx = array.length - 1;
    while (endIdx > 0) {
        swap(0, endIdx, array);
        swiftDown(0, array, endIdx);
        endIdx -= 1;
    }
    return array;
}
function buildMaxHeap(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        swiftDown(i, array, array.length);
    }
}
function swiftDown(i, array, endIdx) {
    const j = (2 * i) + 1;
    const k = (2 * i) + 2;
    const maxIdx = getMaxIdx([i, j, k], array, endIdx);
    if (maxIdx === i)
        return;
    swap(i, maxIdx, array);
    swiftDown(maxIdx, array, endIdx);
}
function getMaxIdx([i, j, k], array, endIdx) {
    let maxIdx = i;
    if (j < endIdx && array[j] > array[maxIdx])
        maxIdx = j;
    if (k < endIdx && array[k] > array[maxIdx])
        maxIdx = k;
    return maxIdx;
}
function swap(a, b, array) {
    [array[a], array[b]] = [array[b], array[a]];
}
console.log(heapSort([8, 5, 2, 9, 5, 6, 3]));
