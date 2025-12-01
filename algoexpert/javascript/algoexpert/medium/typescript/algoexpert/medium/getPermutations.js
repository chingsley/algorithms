export function getPermutations(array) {
    const permutations = [];
    permutationsHelper(0, array, permutations);
    return permutations;
}
function permutationsHelper(i, array, permutations) {
    if (i === array.length - 1) {
        permutations.push(array.slice());
    }
    else {
        for (let j = i; j < array.length; j++) {
            swap(array, i, j);
            permutationsHelper(i + 1, array, permutations);
            swap(array, i, j);
        }
    }
}
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
// console.log(
//   getPermutations([1, 2, 3])
// )
