export function getPermutations(array: number[]) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i: number, array: number[], permutations: number[][]) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(array, i, j);
      permutationsHelper(i + 1, array, permutations);
      swap(array, i, j);
    }
  }
}

function swap(array: number[], i: number, j: number) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


// console.log(
//   getPermutations([1, 2, 3])
// )