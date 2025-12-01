/***
 * Problem:
 *    Write a function `bestSum(targetSum, numbers)` that takes in a
 *    targetSum and an array of numbers as arguments.
 *    The function should return the shortest combination of
 *    elements that add up to exactly the targetSum. If there is no
 *    combination that adds up to the targetSum, then return []
 *    NOTE: - you may use an element of the array as many times as needed
 *          - you may assume that all input numbers are nonnegative
 *          - If there are multiple combinations possible, you may return all
 *
 *    EXAMPLES: bestSum(7, [5, 3, 4, 7]) => [ [ 3, 4 ], [ 4, 3 ], [ 7 ] ] (Answer: [7])
 *              bestSum(7, [2, 4]) => [] (Anser: [])
 *              bestSum(0, [1, 2, 3]) => [] (Anser: [])
 *
 * Analysis:
 *    E.g. for a call bestSum(targetSum, numbers)
 *    Let t = targetSum, n = length of numbers
 *    with memoization:
 *          Time complexity = O((t^2)*n)
 *          Space complexity = O(t^2)
 */

interface Memo { [key: number]: number[] | null; };
export function bestSum(target: number, array: number[], memo: Memo = {}): number[] | null {
  if (target === 0) return [];
  if (target < 0) return null;

  if (target in memo) return memo[target];

  let result = [];
  for (let num of array) {
    let res = bestSum(target - num, array, memo);
    if (res === null) continue;
    res = [...res, num];
    if (result.length === 0 || res.length < result.length) result = res;
  }

  memo[target] = result.length > 0 ? result : null;
  return memo[target];
}


console.log(bestSum(7, [2, 3, 4, 1])); // expect: [3, 4] or [4, 3]
console.log(bestSum(7, [5, 3, 4, 7])); // expect: [7]
console.log(bestSum(7, [2, 4])); // expect: nul
console.log(bestSum(8, [2, 3, 5])); // expect: [3, 5] or [5, 3]
console.log(bestSum(7, [2, 1])); // expect: [1, 2, 2, 2]
console.log(bestSum(10000, [7, 14])); // expect: null


