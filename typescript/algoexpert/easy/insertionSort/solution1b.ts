// O(n^2) time
// O(1) space
export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
    }
  }

  return array;
}

function swap(array: number[], m: number, n: number) {
  const temp = array[m];
  array[m] = array[n];
  array[n] = temp;
}