/**
 * Question:
 * Write a function that takes in an array of integers and returns
 * a boolean representing whether the array is monotonic.
 * An array is said to be 'monotonic' if it's elements, from left to
 * right, are entirely non-increasing or entirely non-decreasing.
 * Non-increasing elements aren't necessarily exclusively decreasing;
 * they simple don't increase. Similarly, non-decreasing elements
 * aren't necessarily exclusively increasing; they simple don't decrease.
 * NOTE: empty arrays and arays of one element are monotonic.
 * e.g: [1, 2, 3, 3, 4] true (non-decreasing)
 * e.g: [1, 1, 1, 1]: true (non-decreasing, non-increasing)
 * e.g: [1, 2, 1]: false (neigther non-decreasing nor non-increasing)
 *                       (i.e it both increases and decreases)
 * 
 * Solution:
 * Complexity: O(n) time | O(1) space
 * @param array n
 * @returns boolean
 */
export function isMonotonic(array: number[]) {
  if (array.length < 2) return true;

  let increasing: boolean = false;
  let decreasing: boolean = false;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      increasing = true;
    }
    if (array[i] < array[i - 1]) {
      decreasing = true;
    }
  }

  if (increasing === true && decreasing === true) {
    return false;
  }

  return true;
}
