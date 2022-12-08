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
 *    Let t = targetSum, n = length of numbers
 *    without memoization:
 *          Time complexity = O(n * (n^t))
 *          Space complexity = O(t)
 */
const howSum = (targetSum: number, numbers: number[]): number[] | null => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const result = howSum(targetSum - num, numbers);
    if (result !== null) return [num, ...result];
  }

  return null;
};

console.log(howSum(7, [2, 3, 4, 1, 7])); // expect: [ 1, 2, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); // expect: [ 3, 4 ] or [7]
console.log(howSum(7, [2, 4])); // expect: null
console.log(howSum(8, [2, 3, 5])); // expect: [ 2, 2, 2, 2 ] or [3, 5]
// console.log(howSum(10000, [7, 14]));