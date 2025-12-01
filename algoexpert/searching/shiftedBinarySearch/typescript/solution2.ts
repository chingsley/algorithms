// O(log(n)) time | O(log(n)) space
export function shiftedBinarySearch(array: number[], target: number) {
  return searchInRange([0, array.length - 1], array, target);
}

function searchInRange([startIdx, endIdx]: number[], array: number[], target: number): number {
  if (startIdx > endIdx) return -1;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  if (array[midIdx] === target) return midIdx;

  if (array[startIdx] < array[midIdx]) {
    if (target >= array[startIdx] && target < array[midIdx]) {
      return searchInRange([startIdx, midIdx - 1], array, target);
    } else {
      return searchInRange([midIdx + 1, endIdx], array, target);
    }
  } else {
    if (target > array[midIdx] && target <= array[endIdx]) {
      return searchInRange([midIdx + 1, endIdx], array, target);
    } else {
      return searchInRange([startIdx, midIdx - 1], array, target);
    }
  }
}