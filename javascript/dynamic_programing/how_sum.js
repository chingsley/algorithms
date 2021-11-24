/***
 * Problem:
 *    Write a function `howSum(targetSum, numbers)` that takes in a
 *    targetSum and an array of numbers as arguments.
 *    The function should return an array containing any combination of
 *    elements that add up to exactly the targetSum. If there is no
 *    combination that adds up to the targetSum, then return null
 *    NOTE: - you may use an element of the array as many times as needed
 *          - you may assume that all input numbers are nonnegative
 *          - If there are multiple combinations possible, you may return any single one
 *
 *    EXAMPLES: howSum(7, [5, 3, 4, 7]) => [3, 4] or [7]
 *              howSum(8, [2, 3, 5]) => [2, 2, 2, 2] or [3, 5]
 *              howSum(7, [2, 4]) => null
 *              howSum(0, [1, 2, 3]) => []
 *
 * Analysis:
 *    E.g. for a call howSum(targetSum, numbers)
 *    Let m = targetSum, n = length of numbers
 *    without memoization:
 *          Time complexity = O((n^m)*m)
 *          Space complexity = O(m)
 *    with memoization:
 *          Time complexity = O(m * n * m) = O(n * m^2)
 *          Space complexity = O(m * m) = O(m^2)
 *    NOTE: // the " * m "" in all cases above is due to the spread operator in [...remainderResult, num]
 */
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3, 4, 1, 7])); // expect: [ 1, 2, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); // expect: [ 1, 2, 2, 2 ]
console.log(howSum(7, [2, 4])); // expect: null
console.log(howSum(8, [2, 3, 5])); // expect: [ 2, 2, 2, 2 ]
console.log(howSum(10000, [7, 14]));
