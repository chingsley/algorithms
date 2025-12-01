// O(n^2) time
// O(1) space
export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        swap(array, i, j);
      }
    }
  }

  return array;
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}