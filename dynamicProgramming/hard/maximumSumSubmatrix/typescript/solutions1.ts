// O(mn) time | O(mn) space (mn = size of an m x n matrix)
export function maximumSumSubmatrix(matrix: number[][], size: number) {
  const sums = buildSumsMatrix(matrix);

  let maxSum = -Infinity;
  for (let row = size - 1; row < sums.length; row++) {
    for (let col = size - 1; col < sums[row].length; col++) {
      if (row - size + 1 === 0) {
        const x = (sums[row][col - size] || 0);
        maxSum = Math.max(maxSum, sums[row][col] - x);
      } else if (col - size + 1 === 0) {
        const x = row - size < 0 ? 0 : sums[row - size][col];
        maxSum = Math.max(maxSum, sums[row][col] - x);
      } else {
        maxSum = Math.max(
          maxSum,
          (sums[row][col] - sums[row - size][col]
            - sums[row][col - size] + sums[row - size][col - size])
        );
      }
    }
  }

  return maxSum;
}

function buildSumsMatrix(matrix: number[][]) {
  const sums = new Array(matrix.length).fill(0).map(
    (_, idx) => new Array(matrix[idx].length).fill(0)
  );
  sums[0][0] = matrix[0][0];

  for (let col = 1; col < sums[0].length; col++) {
    sums[0][col] = sums[0][col - 1] + matrix[0][col];
  }
  for (let row = 1; row < sums.length; row++) {
    sums[row][0] = sums[row - 1][0] + matrix[row][0];
  }
  for (let row = 1; row < sums.length; row++) {
    for (let col = 1; col < sums[row].length; col++) {
      sums[row][col] = matrix[row][col] +
        sums[row - 1][col] +
        sums[row][col - 1] -
        sums[row - 1][col - 1];
    }
  }
  return sums;
}


// (Also, check out algoexpert's solution, same approach but easy to understand)