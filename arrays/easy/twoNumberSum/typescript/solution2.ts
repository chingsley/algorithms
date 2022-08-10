/**
 * Solution:
 * Time: O(n) time - for (let num of array) ...
 * space: O(n) space - due to the complements set
 * @param array n
 * @param targetSum number
 * @returns [num1, num2]
 */
export function twoNumberSum(array: number[], targetSum: number) {
  const complements: Set<number> = new Set();

  for (let num of array) {
    const complement = targetSum - num;
    if (complements.has(complement)) {
      return [num, complement];
    } else {
      complements.add(num);
    }
  }

  return [];
}



const result = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
console.log(result); // expect [-1, 11]