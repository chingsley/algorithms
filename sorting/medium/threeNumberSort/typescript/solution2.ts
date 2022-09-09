// O(n) time, O(1) space
export function threeNumberSort(array: number[], order: number[]) {
  let first = 0;
  let current = 0;
  let last = array.length - 1;
  while (current <= last) {
    if (array[current] === order[0]) {
      swap(array, first, current);
      first += 1;
      current += 1;
    } else if (array[current] === order[2]) {
      swap(array, current, last);
      last -= 1;
      // but do increment current here
    } else {
      // ie. array[current] === order[1]
      current += 1;
    }
  }

  return array;
}

function swap(array: number[], m: number, n: number) {
  const temp = array[m];
  array[m] = array[n];
  array[n] = temp;
}
