/**
 * // O(k * n) time, O(n) space
 * 
 * @param height (n) number
 * @param maxSteps (k) number
 * @param memo Memo
 * @returns number
 */
export function staircaseTraversal(
  height: number,
  maxSteps: number,
  memo: Memo = { 0: 1, 1: 1 }
) {
  if (height in memo) return memo[height];

  let numWaysToTop = 0;
  for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
    numWaysToTop += staircaseTraversal(height - step, maxSteps, memo);
  }

  memo[height] = numWaysToTop;
  return memo[height];
}

type Memo = { [key: number]: number; };