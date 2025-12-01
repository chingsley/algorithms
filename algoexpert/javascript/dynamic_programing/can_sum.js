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
      // console.log({ remainder, numbers, memo });
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

// canSum without repetition (ie. a number cannot be repeated)
const canSum1 = (targetSum, numbers, currIdx = 0, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (currIdx >= numbers.length) return false;

  const remainder = targetSum - numbers[currIdx];
  memo[targetSum] = canSum1(remainder, numbers, currIdx + 1, memo);
  return memo[targetSum];
};

// canSum without repetition
const canSum2 = (targetSum, numbers, startIdx = 0, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (startIdx >= numbers.length) return false;

  for (let i = startIdx; i < numbers.length; i++) {
    const remainder = targetSum - numbers[i];
    if (canSum2(remainder, numbers, i + 1, memo) === true) {
      // console.log({ remainder, numbers, memo });
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};


// canSum without repetition
const canSum3 = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (numbers.length === 0) return false;

  const [first, ...rest] = numbers;
  const remainder = targetSum - first;
  memo[targetSum] = canSum3(remainder, rest, memo);
  return memo[targetSum];

  // for (let i = startIdx; i < numbers.length; i++) {
  //   const remainder = targetSum - numbers[i];
  //   if (canSum3(remainder, numbers, i + 1, memo) === true) {
  //     console.log({ remainder, numbers, memo });
  //     memo[targetSum] = true;
  //     return true;
  //   }
  // }
  // memo[targetSum] = false;
  // return false;
};

/**
 * canSum(7, [3, 4])
 *    canSum(4, [3, 4])
 *        canSum(1, [3, 4])
 *             canSum(-2, [3, 4]) -> false
 *        canSum(4, [3, 4]) -> true
 */

console.log(canSum(7, [3, 2]));
console.log(canSum1(7, [3, 2]));
console.log(canSum2(7, [3, 2]));
console.log(canSum3(7, [3, 2]));

// console.log(canSum(7, [2, 3, 4, 1, 7]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(10000, [7, 14]));