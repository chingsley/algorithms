// O(n^2) time | O(1) space
export function countInversions(array: number[]) {
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) count += 1;
    }
  }

  return count;
}