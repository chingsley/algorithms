// O(k^n) time | O(n) space; (n = height, k = maxSteps)
export function staircaseTraversal(height: number, maxSteps: number) {
  if (height < 0) return 0;
  if (height <= 1) return 1;

  let numOfWays = 0;
  for (let j = 1; j <= maxSteps; j++) {
    numOfWays += staircaseTraversal(height - j, maxSteps);
  }
  return numOfWays;
}