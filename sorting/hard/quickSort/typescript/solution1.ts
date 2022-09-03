// best case: O(nlog(n)) time
// worst case: O(n^2) time
// O(log(n)) space
export function quickSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const lessThanPivot: number[] = [];
  const greaterThanPivot: number[] = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lessThanPivot.push(array[i]);
    } else {
      greaterThanPivot.push(array[i]);
    }
  }

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
}

console.log(
  quickSort([1, 2, 2, 524, 52, 62, 6673, 62, 622, 36, 63, 673, 23, 252, 62])
);