// O(log(n)) time | O(log(n)) space;
// space complexity is due to recursion
export function indexEqualsValue(array) {
    const index = { value: -1 };
    traverse(0, array.length - 1, array, index);
    return index.value;
}
;
function traverse(startIdx, endIdx, array, index) {
    if (startIdx > endIdx)
        return;
    if (index.value > -1)
        return;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    // console.log({ midIdx, 'array[midIdx]': array[midIdx ]})
    if (array[midIdx] < midIdx) {
        traverse(midIdx + 1, endIdx, array, index);
    }
    else if (array[midIdx] === midIdx && midIdx === 0) {
        index.value = midIdx;
    }
    else if (array[midIdx] === midIdx && array[midIdx - 1] < midIdx - 1) {
        index.value = midIdx;
    }
    else {
        traverse(startIdx, midIdx - 1, array, index);
    }
}
