interface Memo {
  [key: number]: number[];
}

// O(n^2) time | O(n^2) space
export function longestIncreasingSubsequence(array: number[]) {
  let longest: number[] = [];
  const memo: Memo = {};
  for (let i = 0; i < array.length; i++) {
    const subSeq: number[] = getLongestIncSubSeqAt(i, array, memo);
    if (subSeq.length > longest.length) longest = subSeq;
  }
  return longest;
}


function getLongestIncSubSeqAt(i: number, array: number[], memo: Memo): number[] {
  if (i in memo) return memo[i];

  let subSeqAtI: number[] = [];
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] <= array[i]) continue;

    const subSeqAtJ = getLongestIncSubSeqAt(j, array, memo);
    const subSeqIJ = [array[i], ...subSeqAtJ];
    if (subSeqIJ.length > subSeqAtI.length) subSeqAtI = subSeqIJ;
  }

  memo[i] = subSeqAtI.length > 0 ? subSeqAtI : [array[i]];
  return memo[i];
}
