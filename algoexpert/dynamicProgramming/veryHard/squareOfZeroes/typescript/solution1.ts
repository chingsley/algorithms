// O(n^4) time | O(1) space (n = height and width of an n x n matrix)
export function squareOfZeroes(matrix: number[][]) {
  // matrix must be a minimum of a 2 x 2 matrix
  if (matrix.length < 2) return false;
  if (matrix[0].length < 2) return false;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) continue;

      let [r1, c1] = [row, col];
      let [r2, c2] = [row + 1, col + 1];
      while (r2 < matrix.length && c2 < matrix[0].length) {
        if (isSquareOfZeroes([r1, c1, r2, c2], matrix)) return true;
        c2 += 1;
        r2 += 1;
      }
    }
  }

  return false;
}

function isSquareOfZeroes([r1, c1, r2, c2]: number[], matrix: number[][]) {
  for (let c = c1; c <= c2; c++) {
    if (matrix[r1][c] !== 0) return false;
  }
  for (let r = r1 + 1; r <= r2; r++) {
    if (matrix[r][c2] !== 0) return false;
  }
  for (let c = c2 - 1; c >= c1; c--) {
    if (matrix[r2][c] !== 0) return false;
  }
  for (let r = r2 - 1; r > r1; r--) {
    if (matrix[r][c1] !== 0) return false;
  }

  return true;
}