// O(3n)time = O(n) time
// O(1) space
export function findThreeLargestNumbers(array) {
    const sortedOutput = [-Infinity, -Infinity, -Infinity];
    for (let num of array) { // xn
        if (num > sortedOutput[0]) {
            sortedOutput[0] = num;
            bubbleSort(sortedOutput); // x3 (by implementing the sort. In the next solution we use the in-built sort() function)
        }
    }
    return sortedOutput;
}
function bubbleSort(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            swap(array, i, i - 1);
        }
    }
}
function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
