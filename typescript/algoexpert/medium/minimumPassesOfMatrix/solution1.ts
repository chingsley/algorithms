/**
 * Time: O(n x m)
 * Space: O(n x m)
 * Where: n = no. of rows
 *        m = no. of columns
 * 
 * @param matrix (2D array )
 * @returns number
 */
export function minimumPassesOfMatrix(matrix: number[][]) {
  // let flipped = true;
  let stack: number[][] = [];
  let keeper: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        stack.push([i, j]);
      }
    }
  }

  let passes = 0;
  console.log(stack);
  while (stack.length > 0) {
    const [row, col] = stack.pop()!;

    if (col - 1 >= 0 && matrix[row][col - 1] < 0) {
      matrix[row][col - 1] *= -1;
      keeper.push([row, col - 1]);
    }
    if (col + 1 < matrix[row].length && matrix[row][col + 1] < 0) {
      matrix[row][col + 1] *= -1;
      keeper.push([row, col + 1]);
    }
    if (row - 1 >= 0 && matrix[row - 1][col] < 0) {
      matrix[row - 1][col] *= -1;
      keeper.push([row - 1, col]);
    }
    if (row + 1 < matrix.length && matrix[row + 1][col] < 0) {
      matrix[row + 1][col] *= -1;
      keeper.push([row + 1, col]);
    }

    if (stack.length === 0) {
      passes += 1;
      stack = keeper;
      keeper = [];

    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        return -1;
      }
    }
  }

  return passes > 0 ? passes - 1 : passes;
}


console.log(
  minimumPassesOfMatrix([
    [0, -1, -3, 2, 0],
    [1, -2, -5, -1, -3],
    [3, 0, 0, -4, -1]
  ])
);
