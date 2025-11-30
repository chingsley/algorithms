// Least Acceptable Solution: *
// O(log(n)) time (n = no. of items in the array)
// O(n) space (the .map creates a new array, same length as n)
export function binarySearch(array, target) {
    return performBinSearch(array.map((value, idx) => ({ value, idx })), target);
}
function performBinSearch(array, target) {
    if (array.length === 0)
        return -1;
    const midIdx = Math.floor((array.length - 1) / 2);
    // console.log({ midIdx })
    if (target < array[midIdx].value) {
        return performBinSearch(array.slice(0, midIdx), target);
    }
    else if (target > array[midIdx].value) {
        return performBinSearch(array.slice(midIdx + 1, array.length), target);
    }
    else {
        return array[midIdx].idx;
    }
}
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
