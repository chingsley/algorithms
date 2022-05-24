/**
 *  * Analysis:
 *    E.g. for a call bestSum(targetSum, numbers)
 *    Let m = targetSum, n = length of numbers
 *    without memoization:
 *          Time complexity = O((n^m) * m) = O(m*(n^m)) ===> the " * m " is due to the spread operator in [...remainderResult, num]
 *          Space complexity = O(m * m) ===> the " * m " is due the growing length of shortestCombination in the worst case will take length m
 *    with memoization:
 *          Time complexity = O(m * n * m) = O(n * m^2) ===> the " * m " is due to the spread operator in [...remainderResult, num]
 *          Space complexity = O(m * m) = O(m^2)
 *----------------------------------------------------------
 * Check Solution 2 for a better and more perfomant Solution
 *----------------------------------------------------------
 * 
 * @param n number
 * @param denoms number[]
 * @returns number
 */
export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const result = minNumberOfCoinsForChangeHelper(n, denoms);
  return result ? result.length : -1;
}

function minNumberOfCoinsForChangeHelper(n: number, denoms: number[], memo: { [key: number]: number[]; } = {}): number[] {
  if (n in memo) return memo[n];
  if (n === 0) return [];
  if (n < 0) return null;

  let shortestCombination: number[] = null;
  for (let num of denoms) {
    const remainder = n - num;
    const remainderCombination = minNumberOfCoinsForChangeHelper(remainder, denoms, memo);
    if (remainderCombination !== null) {
      const combination: number[] = [...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  memo[n] = shortestCombination;
  return memo[n];
}


// console.log(minNumberOfCoinsForChange(8, [2, 3, 5])); 
console.log(minNumberOfCoinsForChange(7, [1, 5, 10]));
console.log(minNumberOfCoinsForChange(7, [2, 4]));
console.log(minNumberOfCoinsForChange(10000, [7, 14]));