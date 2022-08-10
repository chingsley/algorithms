/**
 * Question:
 * Wrtie a function that takes in a non-empty array of distinct integers and an integer
 * representing a target sum. The function should find all triplets in the array that sum 
 * up to the target sum and return a two-dimensional array of all these triplets.
 * The numbers in each triplet should be ordered in ascending order, and the triplets
 * themselves should be ordered in ordered in ascending order with respect to the
 * numbers they hold.
 * If no three numbers sum up to the target sum, the function should return an empty array.
 * 
 * Solution:
 * Time: O(n^2 + nlog(n)) = O(n{n + log(n)}) ----> O(n^2)
 * Space: O(n) space
 * @param array n
 * @param targetSum number
 */
export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array.sort((a, b) => a - b); // n log(n)

  const result: Triplet[] = [];
  for (let i = 0; i < array.length - 2; i++) { // n^2
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const sum: number = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left += 1;
        right -= 1;
      } else if (sum < targetSum) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return result;
}
type Triplet = [number, number, number];


/**
 * [ -8, -6, 1, 2, 3, 5, 6, 12 ]
 * [
 *  [ -8, ]
 * ]
 *
 *
 *
 * -8+2+6=--8, 2, 6
 * -8+3+5
 */