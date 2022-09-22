//Avg. case: O(n) time | O(1) space
export function quickselect(array: number[], k: number) {
  return quickSelectInRange(0, array.length - 1, array, k - 1);
}

function quickSelectInRange(startIdx: number, endIdx: number, array: number[], kIdx: number): number {
  let pivot = array[endIdx];
  let left = startIdx;
  let right = endIdx - 1;
  while (left <= right) {
    if (array[left] > pivot && array[right] < pivot) {
      [array[left], array[right]] = [array[right], array[left]];
    }
    if (array[left] <= pivot) left += 1;
    if (array[right] >= pivot) right -= 1;
  }

  [array[left], array[endIdx]] = [array[endIdx], array[left]];

  if (left > kIdx) {
    return quickSelectInRange(startIdx, left - 1, array, kIdx);
  } else if (left < kIdx) {
    return quickSelectInRange(left + 1, endIdx, array, kIdx);
  } else {
    return array[left];
  }
}

