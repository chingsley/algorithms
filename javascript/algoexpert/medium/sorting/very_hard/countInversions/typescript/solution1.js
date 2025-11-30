// O(nlog(n)) time | o(n) space
export function countInversions(array) {
    const inversion = { count: 0 };
    mergeSort(array, inversion);
    return inversion.count;
}
;
export function mergeSort(array, inversion) {
    if (array.length <= 1)
        return array;
    const [left, right] = split(array);
    const sortedLeft = mergeSort(left, inversion);
    const sortedRight = mergeSort(right, inversion);
    return merge(sortedLeft, sortedRight, inversion);
}
function merge(sortedLeft, sortedRight, inversion) {
    let [i, j] = [0, 0];
    const merged = [];
    while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] <= sortedRight[j]) { // must be <=, just < will fail. B/c the condition is array[i] > array[j] (i.e strictly greater than)
            merged.push(sortedLeft[i]);
            i += 1;
        }
        else {
            inversion.count += sortedLeft.slice(i).length;
            // inversion.count += sortedLeft.length - i; // this is better in terms of time complexity
            merged.push(sortedRight[j]);
            j += 1;
        }
    }
    merged.push(...sortedLeft.slice(i));
    merged.push(...sortedRight.slice(j));
    return merged;
}
function split(array) {
    const midIdx = Math.floor(array.length / 2);
    return [array.slice(0, midIdx), array.slice(midIdx)];
}
console.log(countInversions([2, 3, 3, 1, 9, 5, 6]));
