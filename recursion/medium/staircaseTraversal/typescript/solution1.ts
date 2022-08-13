/**
 * O(n) time | O(n) space
 * n = height of the staircase
 */
 export function staircaseTraversal(height: number, maxSteps: number): number {
  let currentNumberOfWays: number = 0;
  const waysToTop: number[] = [1]

  for(let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const startWindow: number = currentHeight - maxSteps - 1;
    const endWindow: number = currentHeight - 1;
    if(startWindow >= 0) {
      currentNumberOfWays -= waysToTop[startWindow]
    }
    currentNumberOfWays += waysToTop[endWindow];
    waysToTop.push(currentNumberOfWays)
  }

  return waysToTop[height]
}