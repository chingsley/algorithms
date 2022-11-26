// O(k * n) time | O(n) space; (n = height, k = maxSteps)
export function staircaseTraversal(height: number, maxSteps: number) {
  const array = new Array(height + 1).fill(0);
  [array[0], array[1]] = [1, 1];
  for (let i = 2; i < array.length; i++) {
    for (let j = 1; j <= maxSteps; j++) {
      if (i - j < 0) continue;
      array[i] += array[i - j];
    }
  }
  return array[height];
}
