/**
 * Time: O(n^2) (worst case; better in practice b/c of the use of the 'upperBound' control) 
 * Space: O(n) space (due to recursion)
 * 
 * @param array n
 * @param upperBound 
 * @param sorted 
 * @returns number[]
 */
export function bubbleSort(array: number[], upperBound: number, sorted: boolean = false) {
  if (sorted) return;

  upperBound = upperBound || array.length;

  sorted = true;
  for (let i = 1; i < upperBound; i++) {
    if (array[i - 1] > array[i]) {
      swap(array, i - 1, i);
      sorted = false;
    }
  }

  bubbleSort(array, upperBound - 1, sorted);

  return array;
}


function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}