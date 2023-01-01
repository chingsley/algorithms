// WORK IN PROGRESS

import { print2DArr } from '../../../../utils';

// O(n^3) time | O(n^2) space
export function squareOfZeroes(matrix: number[][]) {
  if (matrix.length < 2) return false;
  if (matrix[0].length < 2) return false;

  const zeroCounts = countZeroes(matrix);
  print2DArr(zeroCounts.map(arr => arr.map(arr => arr.join(','))));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== 0) continue;

      let [r1, c1] = [row, col];
      let [r2, c2] = [row + 1, col + 1];
      while (r2 < matrix.length && c2 < matrix[0].length) {
        if (isSquareOfZeros([r1, c1, r2, c2], zeroCounts)) return true;
        [r2, c2] = [r2 + 1, c2 + 1];
      }
    }
  }

  return false;
}

function isSquareOfZeros([r1, c1, r2, c2]: number[], zeroCounts: number[][][]) {
  const [left, top] = zeroCounts[r1][c1];
  const [, bottom] = zeroCounts[r2][c1];
  const [right,] = zeroCounts[r1][c2];
  return left === right &&
    top === bottom &&
    left === top;
}

function countZeroes(matrix: number[][]) {
  const counts: number[][][] = new Array(matrix.length).fill(0).map(
    () => new Array(matrix[0].length).fill([0, 0])
  );

  const lastRowIdx = counts.length - 1;
  const lastColIdx = matrix[lastRowIdx].length - 1;
  for (let row = lastRowIdx; row >= 0; row--) {
    for (let col = lastColIdx; col >= 0; col--) {
      if (matrix[row][col] === 1) continue;

      const [prevH, prevW] = getPrevCellCounts([row, col], counts);
      counts[row][col] = [prevH + 1, prevW + 1];
    }
  }

  return counts;
}

function getPrevCellCounts([row, col]: number[], counts: number[][][]) {
  let [height, width] = [0, 0];
  if (row + 1 < counts.length) height = counts[row + 1][col][0];
  if (col + 1 < counts[row].length) width = counts[row][col + 1][1];

  return [height, width];
}

const matrix = [
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 1]
];

const result = squareOfZeroes(matrix);
console.log(result); // should return true; fix bug!