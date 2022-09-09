/**
 *
 * O(n^2): time (in practice this solution is better than O(n^2)
 * because with each iteration of the while loop, we reduce the
 * length travelled by the for loop in the array . We achieve this
 * by using the lastSortedIdx value
 *
 *  O(1): space
 */
export function bubbleSort(array: number[]) {
  let sorted: boolean = false;
  let lastSortedIdx = array.length - 1;
  while (!sorted) {
    sorted = true;
    //  ..; i < array.length - 1; b/c we're comparing (array[i] > array[i + 1], so when i is last item, i+1 will exceed the array bound
    for (let i = 0; i < lastSortedIdx; i++) {
      if (array[i] > array[i + 1]) {
        sorted = false;
        swap(i, i + 1, array);
      }
    }
    lastSortedIdx--;
  }
  return array;
}

function swap(i: number, j: number, array: number[]) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
