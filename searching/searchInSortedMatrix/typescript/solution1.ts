// O(n + m) time | O(1) space
// n = length of matrix row
// m = lenght of matrix column

type Range = [number, number];
export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  let row: number = 0;
  let col: number = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col -= 1;
    } else if (matrix[row][col] < target) {
      row += 1;
    } else {
      return [row, col];
    }
  }
  return [-1, -1];
}