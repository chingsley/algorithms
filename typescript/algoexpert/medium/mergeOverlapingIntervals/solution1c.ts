/**
 * Time: O(nlog(n)) time
 * Space: O(n) space
 * @param array n
 * @returns number[][]
 */
export function mergeOverlappingIntervals(array: number[][]) {
  array.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const [resultLower, resultUpper] = result[result.length - 1];
    const [currentLower, currentUpper] = array[i];
    if (resultUpper >= currentLower) {
      result[result.length - 1] = [resultLower, Math.max(resultUpper, currentUpper)];
    } else {
      result.push(array[i]);
    }
  }
  return result;
}