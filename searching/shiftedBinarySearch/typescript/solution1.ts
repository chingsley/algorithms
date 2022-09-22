// O(log(n)) time | O(1) space
export function shiftedBinarySearch(array: number[], target: number) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (array[midIdx] === target) {
      return midIdx;
    } else if (array[leftIdx] < array[midIdx]) {
      // search left-sub if target is in left sub, else search right-sub
      if (target >= array[leftIdx] && target < array[midIdx]) {
        rightIdx = midIdx - 1;
      } else {
        leftIdx = midIdx + 1;
      }
    } else {
      // search  right-sub if target is in right sbu, else search right-sub
      if (target > array[midIdx] && target <= array[rightIdx]) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
      }
    }
  }

  return -1;
}