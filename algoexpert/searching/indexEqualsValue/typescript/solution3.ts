// O(log(n)) time | O(1) space;
export function indexEqualsValue(array: number[]) {
  let startIdx = 0;
  let endIdx = array.length - 1;
  while (startIdx <= endIdx) {
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    if (array[midIdx] === midIdx && midIdx === 0) {
      return midIdx;
    } else if (array[midIdx] === midIdx && array[midIdx - 1] < midIdx - 1) {
      return midIdx;
    } else if (array[midIdx] < midIdx) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx - 1;
    }
  }

  return -1;
}