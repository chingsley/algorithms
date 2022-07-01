export function bubbleSort(array: number[]) {
  let sorted: boolean = false;
  let upperBound = array.length;

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < upperBound; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        sorted = false;
      }
    }
    upperBound -= 1;
  }

  return array;
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


// [ 1, 2, 3, 4 ]
//      *   
console.log(
  bubbleSort([4, 3, 2, 1])
);