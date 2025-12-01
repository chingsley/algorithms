/**
 * Method: Recursion (with memoization)
 * Time: O(mn)
 * Space: O(mn)
 *
 * @param m number
 * @param n number
 * @returns number
 */
export function gridTraveller(m: number, n: number, memo: { [key: string]: number; } = {}): number {
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] = gridTraveller(m, n - 1, memo) + gridTraveller(m - 1, n, memo);
  return memo[key];
}


console.log(
  gridTraveller(4, 4)
);