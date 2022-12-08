/***
 * Problem:
 *    Write a function `allSum(targetSum, numbers)` that takes in a
 *    targetSum and an array of numbers as arguments.
 *    The function should return an array containing all combinations of
 *    elements that add up to exactly the targetSum. If there is no
 *    combination that adds up to the targetSum, then return []
 *    NOTE: - you may use an element of the array as many times as needed
 *          - you may assume that all input numbers are nonnegative
 *          - If there are multiple combinations possible, you may return all
 *
 *    EXAMPLES: allSum(7, [5, 3, 4, 7]) => [ [ 3, 4 ], [ 4, 3 ], [ 7 ] ]
 *              allSum(7, [2, 4]) => []
 *              allSum(0, [1, 2, 3]) => []
 *
 * Analysis:
 *    E.g. for a call allSum(targetSum, numbers)
 *    Let t = targetSum, n = length of numbers
 *    without memoization:
 *          Time complexity = O((n * t))
 *          Space complexity = O(n^2)
 */
export const howSum = (
  targetSum: number,
  numbers: number[],
  memo: { [key: number]: number[]; } = {}
): number[] | null => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) return memo[targetSum];

  for (let num of numbers) {
    const result = howSum(targetSum - num, numbers, memo);
    if (result !== null) {
      result.push(num);
      memo[targetSum] = result;
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return memo[targetSum];
};

console.log(howSum(7, [2, 3, 4, 1, 7])); // expect: [ 1, 2, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); // expect: [ 3, 4 ] or [7]
console.log(howSum(7, [2, 4])); // expect: null
console.log(howSum(8, [2, 3, 5])); // expect: [ 2, 2, 2, 2 ] or [3, 5]
console.log(howSum(10000, [7, 14])); // null
