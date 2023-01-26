/**
 * sums is an array of max sums at every index, that if the value
 * at that index is included
 *  O(n^2) time | O(n) space
 */
export function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
  if (array.length === 0) return [0, []];

  const sums = [...array];
  const seqs: null[] | number[] = new Array(array.length).fill(null);
  let maxSum = sums[0];
  let idxOfMax = 0;
  for (let i = 1; i < array.length; i++) { // O(n) time

    for (let j = 0; j < i; j++) { // O(n) time
      if (array[i] <= array[j]) continue;
      const newSum = sums[j] + array[i];
      if (newSum > sums[i]) {
        sums[i] = newSum;
        seqs[i] = j;
      }
    }
    if (sums[i] > maxSum) {
      maxSum = sums[i];
      idxOfMax = i;
    }
  }

  let maxSeq = [array[idxOfMax]];
  let i = seqs[idxOfMax];
  while (i !== null) {
    maxSeq.push(array[i]);
    i = seqs[i];
  }

  const result = maxSeq.reverse();
  result.push();
  return [maxSum, maxSeq];
}