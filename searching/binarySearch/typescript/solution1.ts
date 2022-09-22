// Best Solution * * * * *
// O(log(n)) time
// O(1) space
export function binarySearch(array: number[], target: number): number {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(target < array[mid]) {
      end = mid - 1;
    } else if(target > array[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(
  binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)
);
