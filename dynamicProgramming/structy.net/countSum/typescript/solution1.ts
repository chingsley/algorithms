/***
 * Problem:
 *    Write a function `countSum(targetSum, numbers)` that takes in a
 *    targetSum and an array of numbers as arguments.
 *    The function should return the number of combinations of
 *    elements that add up to exactly the targetSum. If there is no
 *    combination that adds up to the targetSum, then return 0
 *    NOTE: - you may use an element of the array as many times as needed
 *          - you may assume that all input numbers are nonnegative
 *
 *    EXAMPLES: countSum(7, [5, 3, 4, 7]) => 3: [3, 4], [4, 3] and [7]
 *              countSum(8, [2, 3, 5]) => 6: [2, 2, 2, 2], [3, 3, 2], [3, 2, 3], [2, 3, 3], [3, 5], [5, 3]
 *              countSum(7, [2, 4]) => 0
 *              countSum(0, [1, 2, 3]) => 1
 *
 * Analysis:
 *    E.g. for a call countSum(targetSum, numbers)
 *    Let t = targetSum, n = length of numbers
 *    without memoization:
 *          Time complexity = O(n * (n^t))
 *          Space complexity = O(t)
 */
const countSum = (targetSum: number, numbers: number[]): number => {
  if (targetSum === 0) return 1;
  if (targetSum < 0) return 0;

  let count = 0;
  for (let num of numbers) {
    const remainder = targetSum - num;
    count += countSum(remainder, numbers);
  }

  return count;
};

console.log(countSum(7, [2, 3, 4, 1, 7])); // expect: 57
console.log(countSum(7, [5, 3, 4, 7])); // expect: 3: [ 3, 4 ], [4, 3], [7]
console.log(countSum(7, [2, 4])); // expect: 0
console.log(countSum(8, [2, 3, 5])); // expect: 6:
// console.log(countSum(10000, [7, 14]));// times out without memoization


const countSumMemoized = (targetSum: number, numbers: number[], memo: { [key: number]: number; } = {}): number => {
  if (targetSum === 0) return 1;
  if (targetSum < 0) return 0;
  if (targetSum in memo) return memo[targetSum];

  let count = 0;
  for (let num of numbers) {
    const remainder = targetSum - num;
    count += countSumMemoized(remainder, numbers, memo);
  }

  memo[targetSum] = count;
  return count;
};

console.log('\n................................................\n');
console.log(countSumMemoized(7, [2, 3, 4, 1, 7])); // expect: 57
console.log(countSumMemoized(7, [5, 3, 4, 7])); // expect: 3: [ 3, 4 ], [4, 3], [7]
console.log(countSumMemoized(7, [2, 4])); // expect: 0
console.log(countSumMemoized(8, [2, 3, 5])); // expect: 6:
console.log(countSumMemoized(10000, [7, 14]));// expect: 0