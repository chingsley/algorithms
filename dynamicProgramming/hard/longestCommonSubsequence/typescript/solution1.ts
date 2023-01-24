// O(m * n) time | O(m * n) space (m = length of str1, n = length of str2)
export function longestCommonSubsequence(str1: string, str2: string) {
  const matrix: number[][] = new Array(str1.length + 1).fill(0).map(
    () => new Array(str2.length + 1).fill(0)
  );

  for (let row = 1; row < matrix.length; row++) { // O(m * n) time
    for (let col = 1; col < matrix[row].length; col++) {
      const [ch1, ch2] = [str1[row - 1], str2[col - 1]];
      if (ch1 === ch2) {
        matrix[row][col] = 1 + matrix[row - 1][col - 1];
      } else {
        matrix[row][col] = Math.max(
          matrix[row - 1][col],
          matrix[row][col - 1]
        );
      }
    }
  }

  let row = matrix.length - 1;
  let col = matrix[row].length - 1;
  let longestSubseq: string[] = [];
  while (row > 0 && col > 0) { // O(m + n) time (overshadowed by m * n time of first loop)
    const left = matrix[row][col - 1];
    const top = matrix[row - 1][col];
    const diag = matrix[row - 1][col - 1];
    if (left === top && left === diag) {
      if (str1[row - 1] === str2[col - 1]) longestSubseq.push(str1[row - 1]);
      [row, col] = [row - 1, col - 1];
    } else {
      if (left > top) {
        col = col - 1;
      } else {
        row = row - 1;
      }
    }
  };

  return longestSubseq.reverse();
}