/**
 * sums is an array of max sums at every index, that if the value
 * at that index is included
 *  O(n^3) time | O(n^2) space
 */
export function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
  if (array.length === 0) return [0, []];

  const sums = [...array];
  const seqs: number[][] = [[array[0]]]; // O(n^2) space
  let maxSum = sums[0];
  let maxSequence = [array[0]];
  for (let i = 1; i < array.length; i++) { // O(n) time
    seqs[i] = [array[i]];

    for (let j = 0; j < i; j++) { // O(n) time
      if (array[i] <= array[j]) continue;
      const newSum = sums[j] + array[i];
      if (newSum > sums[i]) {
        sums[i] = newSum;
        seqs[i] = [...seqs[j], array[i]]; // O(n) time
      }
    }
    if (sums[i] > maxSum) {
      maxSum = sums[i];
      maxSequence = seqs[i];
    }
  }
  return [maxSum, maxSequence];
}