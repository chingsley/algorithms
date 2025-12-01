/**
 * Starting from the Top-Right Corner
 * 
 * @param matrix m x n matrix
 * @param target number 
 * @returns Range (array of 2 rowIdx, colIdx )
 */
export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  let row = 0;
  let col = row[0].length - 1;

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

export type Range = [number, number];