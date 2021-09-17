/***
 * Problem:
 *    Write a function `canSum(targetSum, numbers)` that takes in a
 *    targetSum and an array of numbers as arguments.
 *    The function should return a boolean indicating whether or not it
 *    is possible to generate the targetSum using numbers from the array`
 *    NOTE: - you may use an element of the array as many times as needed
 *          - you may assume that all input numbers are nonnegative
 *
 * Analysis:
 *    E.g. for a call canSum(targetSum, numbers)
 *    Let m = targetSum, n = length of numbers
 *    without memoization:
 *          Time complexity = O(n^m)
 *          Space complexity = O(m)
 *    with memoization:
 *          Time complexity = O(m*n)
 *          Space complexity = O(m)
 */
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3, 4, 1, 7]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(10000, [7, 14]));
