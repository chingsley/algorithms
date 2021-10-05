/***
 * Problem:
 *    Write a function `bestSum(targetSum, numbers)` that takes in a
 *    targetSum and an array of numbers as arguments.
 *
 *    The function should return an array containing the SHORTEST combination of
 *    numbers that add up to exactly the targetSum.
 *
 *    If there is no combination that adds up to the targetSum, then return null
 *    If there is a tie for the shortest combination, you may return any one of the shortest
 *
 *    NOTE: - you may use an element of the array as many times as needed
 *          - you may assume that all input numbers are nonnegative
 *          - If there are multiple combinations possible, you may return any single one
 *
 *    EXAMPLES: bestSum(7, [5, 3, 4, 7]) => possible solutions: [3, 4] or [7] => return [7]
 *              bestSum(8, [2, 3, 5]) => possible solutions: [2, 2, 2, 2] or or [2, 3, 3] or [3, 5] => return [3, 5]
 *              bestSum(7, [2, 4]) => return null
 *              bestSum(0, [1, 2, 3]) => return []
 *
 * Analysis:
 *    Time complexity = O(m * n * m) = O(n * m^2) ===> the " * m " is due to the spread operator in [...remainderResult, num]
 *    Space complexity = O(m * m) = O(m^2)
 */
const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || combination.length < table[i + num].length) {
          table[i + num] = combination;
        }
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum(8, [2, 3, 5])); // expect: [5, 3]
console.log(bestSum(8, [1, 4, 5])); // expect: [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // expect: [25, 25, 25, 25]
console.log(bestSum(100, [25, 1, 5, 2])); // expect: [25, 25, 25, 25]
console.log(bestSum(7, [2, 3, 4, 1, 7])); // expect: [7]
console.log(bestSum(7, [5, 3, 4, 7])); // expect: [7]
console.log(bestSum(7, [2, 4])); // expect: null
console.log(bestSum(10000, [7, 14])); // expect: null
