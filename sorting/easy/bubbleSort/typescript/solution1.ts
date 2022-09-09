// O(n^2) time (in the worst case) [ but O(n) time when given an already sorted array]
// O(1) space
export function bubbleSort(array: number[]) {
  let sorted: boolean = false;
  while (!sorted) {
    sorted = true;
    //  ..; i < array.length - 1; b/c we're comparing (array[i] > array[i + 1], so when i is last item, i+1 will exceed the array bound
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        sorted = false;
        swap(i, i + 1, array);
      }
    }
  }
  return array;
}

function swap(i: number, j: number, array: number[]) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
