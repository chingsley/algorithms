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
 *    Let m = targetSum, n = length of numbers array
 *      Time complexity = O(m * n * m) = O(n * m^2)
 *      Space complexity = O(m * m) = O(m^2)
 */
const howSum = (targetSum, numbers, memo = {}) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
};

console.log(howSum(7, [2, 3])); // expect: [3, 2, 2]
console.log(howSum(7, [2, 3, 4, 1, 7])); // expect: [1, 1, 1, 1, 1, 1, 1]
console.log(howSum(7, [5, 3, 4, 7])); // expect: [ 4, 3 ]
console.log(howSum(7, [2, 4])); // expect: null
console.log(howSum(8, [2, 3, 5])); // expect: [ 2, 2, 2, 2 ]
console.log(howSum(10000, [7, 14])); // null
