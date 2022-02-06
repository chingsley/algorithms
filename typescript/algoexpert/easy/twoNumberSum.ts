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
  const complements: { [key: string]: number } = {};
  let result: number[] = [];
  for (const num of array) {
    if (complements[targetSum - num]) {
      /*
			we reassign result instead of pushing to result
			because the question says "...assume that there will
			be at most one pair of numbers summing up to the target
			sum"
			*/
      result = [num, targetSum - num];
    } else {
      complements[num] = num;
    }
  }
  return result;
}

// SOLUTION 2
//===============

/**
 * Time: O(n)
 * Space: O(n)
 * @param array array of numbers
 * @param targetSum number
 * @returns array of two numbers that sum to the target sum
 */
export function twoNumberSum2(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);
  let result: number[] = [];
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  while (leftIdx !== rightIdx) {
    const num1 = array[leftIdx];
    const num2 = array[rightIdx];
    if (num1 + num2 === targetSum) {
      result = [num1, num2];
      return result;
    } else {
      if (num1 + num2 > targetSum) {
        rightIdx--;
      } else {
        leftIdx++;
      }
    }
  }

  return result;
}

const test1 = {
  array: [3, 5, -4, 8, 11, 1, -1, 6],
  targetSum: 10,
};

console.log(twoNumberSum2(test1.array, test1.targetSum));
