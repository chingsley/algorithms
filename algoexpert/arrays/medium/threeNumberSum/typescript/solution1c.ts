export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array.sort((a, b) => a - b);

  const result: Triplet[] = [];
  for (let i = 0; i < array.length - 2; i++) {
    // OPTIMIZATION --------------
    if (array[i] >= targetSum) break;

    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const sum: number = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left += 1;
        right -= 1;
      } else if (sum < targetSum) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return result;
}
type Triplet = [number, number, number];