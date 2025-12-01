// O(mn) time | O(mn) space
export function maximumSumSubmatrix(matrix: number[][], size: number) {
  const sums = buildSumsMatrix(matrix);

  // console.log(sums);
  let maxSum = -Infinity;
  for (let i = size - 1; i < sums.length; i++) {
    for (let j = size - 1; j < sums[i].length; j++) {
      const top = i - size >= 0 ? sums[i - size][j] : 0;
      const left = j - size >= 0 ? sums[i][j - size] : 0;
      const diag = i - size >= 0 && j - size >= 0 ? sums[i - size][j - size] : 0;
      const sumAtPosition = sums[i][j] - top - left + diag;
      maxSum = Math.max(maxSum, sumAtPosition);
    }
  }

  return maxSum;
}

function buildSumsMatrix(matrix: number[][]): number[][] {
  const sums = new Array(matrix.length).fill(0).map(
    () => new Array(matrix[0].length).fill(0)
  );
  for (let i = 0; i < sums.length; i++) {
    for (let j = 0; j < sums[i].length; j++) {
      const top = i - 1 >= 0 ? sums[i - 1][j] : 0;
      const left = j - 1 >= 0 ? sums[i][j - 1] : 0;
      const diag = i - 1 >= 0 && j - 1 >= 0 ? sums[i - 1][j - 1] : 0;
      sums[i][j] = matrix[i][j] + top + left - diag;
    }
  }

  return sums;
}