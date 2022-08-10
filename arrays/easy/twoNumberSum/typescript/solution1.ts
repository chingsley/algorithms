// SOLUTION 1
//===============
/**
 * Time: O(n)
 * Space: O(n)
 * @param array array of numbers
 * @param targetSum number
 * @returns array of two numbers that sum to the target sum
 */
export function twoNumberSum(array: number[], targetSum: number) {
  const complements: { [key: string]: number; } = {};
  for (const num of array) {
    if (complements[targetSum - num]) {
      /*
      we return the result instead of pushing it to a result array
      because the question says "...assume that there will
      be at most one pair of numbers summing up to the target
      sum"
      */
      return [num, targetSum - num];
    } else {
      complements[num] = num;
    }
  }
  return [];
}

// SOLUTION 2
//===============

/**
 * Time: O(n log(n) )  => due to the sort
 * Space: O(1)
 * @param array array of numbers
 * @param targetSum number
 * @returns array of two numbers that sum to the target sum
 */
export function twoNumberSum2(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);

  let leftIdx = 0;
  let rightIdx = array.length - 1;
  while (leftIdx !== rightIdx) {
    const num1 = array[leftIdx];
    const num2 = array[rightIdx];
    if (num1 + num2 === targetSum) {
      return [num1, num2];
    } else {
      if (num1 + num2 > targetSum) {
        rightIdx--;
      } else {
        leftIdx++;
      }
    }
  }

  return [];
}

const test1 = {
  array: [3, 5, -4, 8, 11, 1, -1, 6],
  targetSum: 10,
};

console.log(twoNumberSum2(test1.array, test1.targetSum));
