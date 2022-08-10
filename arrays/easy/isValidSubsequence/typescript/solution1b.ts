/**
 * Quesion:
 * Given two non-empty arrays of integers, wrtie a functin
 * that determines whether the secnd array is a subsequence
 * of the first one.
 * A subsequence of an array is a se of numbers that aren't
 * necessarily adjacent in the array but that are in the same
 * order as they appear in the array. For instance, the numbers
 * [1, 2, 4] form a subsequence of the array [1, 2, 3, 4], and so
 * do the numbers [2, 4]. Note that a single number in an array
 * and the array are both valid subsequences of the array.
 * 
 * Solution:
 * Time: O(n) time
 * Space: O91) space
 * @param array n
 * @param sequence array m <= n
 * @returns boolean
 */
export function isValidSubsequence(array: number[], sequence: number[]) {
  let i = 0;
  for (let num of sequence) {
    let found: boolean = false;
    while (i < array.length) {
      if (num === array[i]) {
        found = true;
        i += 1;
        break;
      }
      i += 1;
    }
    if (!found) return false;
  }
  return true;
}