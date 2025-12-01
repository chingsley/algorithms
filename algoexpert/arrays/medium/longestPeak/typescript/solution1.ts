/**
 * Question:
 * Write a function that takes in an array of integers and returns the
 * length of the longest peak in the array.
 * A peak is defined as adjacent integers in the array that are strictly
 * increasing until they reach a tip (the highest value in the peak), at which
 * point they become strictly decreasing. /at least three integers are required to
 * form a peak
 * For e.g, the integers 1, 4, 10, 2 form a peak, but the following are not:
 * 4, 0, 10 (this forms a 'V' shape, but we're looking for 'inverted v' shape)
 * 1, 2, 2, 0 (b/c of 2, 2)
 * 1, 2, 3 (b/c thre are no strictly decreasing integers after 3)
 * 
 * 
 * Solution:
 * // O(n) time | O(1) space - where n = array.length
 * 
 * 
 * @param array n
 * @returns number
 */
export function longestPeak(array: number[]) {
  if (array.length < 3) return 0;
  let longestSize: number = 0;

  let idx: number = 1;
  while (idx < array.length - 1) {
    let i = idx - 1;
    let j = idx + 1;
    if (array[i] >= array[idx] || array[j] >= array[idx]) {
      idx += 1;
      continue;
    }
    while ((i >= 0 && j < array.length) && (array[i - 1] < array[i] || array[j + 1] < array[j])) {
      if (array[i - 1] < array[i]) {
        i--;
      }
      if (array[j + 1] < array[j]) {
        j++;
      }
    }

    const peakSize = j - i + 1;
    longestSize = Math.max(longestSize, peakSize);

    idx = j;
  }

  return longestSize;
}
