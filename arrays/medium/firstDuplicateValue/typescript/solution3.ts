/**
 * Time: O(n)
 * Space: O(1)
 * @param array n
 * @returns number
 */
export function firstDuplicateValue(array: number[]) {
  for (let num of array) {
    const absValue = Math.abs(num);
    if (array[absValue - 1] < 0) return absValue;
    array[absValue - 1] *= -1;
  }
  return -1;
}

// OR
export function firstDuplicateValue2(array: number[]) {
  for (let num of array) {
    const absValue = Math.abs(num);
    const weightedIdx = absValue - 1;
    if (array[weightedIdx] < 0) return absValue;
    array[weightedIdx] *= -1;
  }
  return -1;
}