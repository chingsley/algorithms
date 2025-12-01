// O(n^2) time
// O(1) space
export function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            swap(j, j - 1, array);
            j--;
        }
    }
    return array;
}
function swap(a, b, array) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
