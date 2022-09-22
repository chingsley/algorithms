
export type Range = [number, number];

/**
 * Starting from the Lower-Left Corner
 * Time: O(n + m) time
 * Space: O(1) space
 * @param matrix m x n matrix
 * @param target number 
 * @returns Range (array of 2 rowIdx, colIdx )
 */
export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && col < matrix[row].length) // note col < matrix[row].length (NOT matrix[0].length)
    if (target < matrix[row][col]) {
      row -= 1;
    } else if (target > matrix[row][col]) {
      col += 1;
    } else {
      return [row, col];
    }

  return [-1, -1];
}




{ // RECURSIVELY
  // export type Range = [number, number];

  // // O(n+m) time, O(n+m) space
  // export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  //   return search(matrix, target, matrix.length - 1, 0);
  // }

  // function search(matrix: number[][], target: number, row: number, col: number): Range {
  //   if (row < 0 || col > matrix[row].length - 1) return [-1, -1];
  //   if (target === matrix[row][col]) return [row, col];

  //   if (target < matrix[row][col]) {
  //     return search(matrix, target, row - 1, col);
  //   } else {
  //     return search(matrix, target, row, col + 1);
  //   }
  // }

}