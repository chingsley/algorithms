
/**
 * Solution 1: Recursion with memoization
 * Time: O(hw)
 * Space: O(hw)
 * 
 * @param width number w
 * @param height number h
 * @param memo memoization object
 * @returns number
 */
export function numberOfWaysToTraverseGraph(width: number, height: number, memo: Memo = {}): number {
  const key: string = width + ',' + height;
  if (key in memo) return memo[key];

  if (width === 0 || height === 0) return 0;
  if (width === 1 && height === 1) return 1;

  memo[key] = numberOfWaysToTraverseGraph(width - 1, height, memo) + numberOfWaysToTraverseGraph(width, height - 1, memo);
  return memo[key];
}

type Memo = { [key: string]: number; };