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
 *          Time complexity = O((n^t)*m)
 *          Space complexity = O(t)
 */
export function allSum(target: number, array: number[]): number[][] {
  const result: number[][] = [];
  allSumHelper(target, array, [], result);
  return result;
}

function allSumHelper(target: number, array: number[], currNumbers: number[], result: number[][]) {
  if (target === 0) return result.push(currNumbers);
  if (target < 0) return;

  for (const num of array) {
    const rem = target - num;
    allSumHelper(rem, array, [...currNumbers, num], result);
  }
}


console.log(allSum(7, [2, 3, 4, 1, 7])); // expect: 57 different combinations (use .length to check)
console.log(allSum(7, [5, 3, 4, 7])); // expect: [ [ 3, 4 ], [ 4, 3 ], [ 7 ] ]
console.log(allSum(7, [2, 4])); // expect: []
console.log(allSum(8, [2, 3, 5])); // expect: [ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 2, 3 ], [ 3, 3, 2 ], [ 3, 5 ], [ 5, 3 ] ]
// console.log(allSum(10000, [7, 14])); // will take to long to run without memoization. Try implementing a memoized solution


