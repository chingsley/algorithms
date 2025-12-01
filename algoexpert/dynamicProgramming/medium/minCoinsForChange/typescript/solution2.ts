

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
export function minCoinsForChange(n: number, denoms: number[]) {
  const result = getMincoins(n, denoms);
  return result ? result : [];
}

function getMincoins(n: number, denoms: number[], memo: { [key: number]: number[]; } = {}): number[] | null {
  if (n === 0) return [];
  if (n in memo) return memo[n];

  let minCoins: number[] | null = null;
  for (let coin of denoms) {
    if (coin > n) continue;
    const rem = n - coin;
    const minCoinsRem = getMincoins(rem, denoms, memo);
    if (minCoinsRem === null) continue;
    if (minCoins === null || minCoinsRem.length + 1 < minCoins.length) {
      minCoins = [...minCoinsRem, coin];
    }
  }

  memo[n] = minCoins;
  return memo[n];
}


console.log(minCoinsForChange(8, [2, 3, 5])); // [5, 3]
console.log(minCoinsForChange(7, [1, 5, 10])); // [5, 1, 1]
console.log(minCoinsForChange(7, [2, 4])); // []
console.log(minCoinsForChange(10000, [7, 14])); // []