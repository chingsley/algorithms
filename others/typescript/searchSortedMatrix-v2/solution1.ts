// https://www.youtube.com/watch?v=Ber2pi2C0j0

/**
 * NOTE: This is different from the searchInSortedMatrix of algoexpert.
 *       The solution here will not pass for the algoexpert verion. But
 *       the solution in algoexpert will work here
 * Question:
 * Write a efficient algorithm that searches for a value in an m x n matrix.
 * this matrix has the following properties:
 * 1. Integers in each row are sorted from left to right.
 * 2. The first integer of each row is greater than the last integer of the previous row.
 * 
 * 
 * 
 * Time: O(log(n) + log(m))
 * Space: O(1)
 * 
 * @param matrix n x m array
 * @param target number
 * @returns [number, number]
 */
export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  let topRow: number = 0;
  let btmRow: number = matrix.length - 1;
  let row: number = -1;

  while (topRow <= btmRow && row < 0) {
    const midRow = Math.floor((topRow + btmRow) / 2);
    console.log({
      target,
      'matrix[midRow][0]': matrix[midRow][0],
      'matrix[midRow][matrix[midRow].length - 1]': matrix[midRow][matrix[midRow].length - 1]
    });
    if (target < matrix[midRow][0]) {
      btmRow = midRow - 1;
    } else if (target > matrix[midRow][matrix[midRow].length - 1]) {
      topRow = midRow + 1;
    } else {
      row = midRow;
    }
    console.log({ topRow, btmRow });
    console.log({ row, 'topRow <= btmRow && row < 0': topRow <= btmRow && row < 0 });
  }


  console.log({ row });
  if (row < 0) {
    return [-1, -1];
  }

  let leftCol = 0;
  let rightCol = matrix[row].length - 1;
  while (leftCol <= rightCol) {
    const midCol = Math.floor((leftCol + rightCol) / 2);
    if (target < matrix[row][midCol]) {
      rightCol = midCol - 1;
    } else if (target > matrix[row][midCol]) {
      leftCol = midCol + 1;
    } else {
      return [row, midCol];
    }
  }


  return [-1, -1];
}


type Range = [number, number];


const t1 = {
  "matrix": [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
  ],
  "target": 44
};

console.log(
  searchInSortedMatrix(t1.matrix, t1.target)
);