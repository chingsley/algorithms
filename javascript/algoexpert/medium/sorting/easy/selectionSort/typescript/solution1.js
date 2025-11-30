// O(n^2) time
// O(1) space
export function selectionSort(array) {
    let smallestIdx = 0;
    while (smallestIdx < array.length - 1) {
        for (let i = smallestIdx + 1; i < array.length; i++) {
            if (array[i] < array[smallestIdx]) {
                swap(i, smallestIdx, array);
            }
        }
        smallestIdx++;
    }
    return array;
}
function swap(a, b, array) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
