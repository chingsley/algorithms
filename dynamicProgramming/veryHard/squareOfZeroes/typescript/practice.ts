import { print2DArr } from "../../../../utils";

{
  {
    // O(n^3) time | O(n^2) space (n = length of the n x n matrix)
    function squareOfZeroes(matrix: number[][]) {
      if (matrix.length < 2) return false;
      if (matrix[0].length < 2) return false;

      const counts = countZeroes(matrix);

      // print2DArr(counts.map((row) => row.map((cord) => cord.join(', '))));

      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
          if (matrix[row][col] === 1) continue;

          let [r2, c2] = [row + 1, col + 1];
          while (r2 < matrix.length && c2 < matrix[r2].length) {
            if (isSquareZeroes([row, col, r2, c2], counts)) return true;

            [r2, c2] = [r2 + 1, c2 + 1];
          }
        }
      }

      return false;
    }

    function isSquareZeroes([r1, c1, r2, c2]: number[], counts: number[][][]) {
      const size = c2 - c1 + 1; // or r2 - r1 + 1;
      const [leftB, topB] = counts[r1][c1];
      const [, btmB] = counts[r2][c1];
      const [rightB] = counts[r1][c2];

      return (
        leftB >= size &&
        rightB >= size &&
        topB >= size &&
        btmB >= size
      );
    }

    function countZeroes(matrix: number[][]) {
      const counts: number[][][] = new Array(matrix.length).fill(0).map(
        () => new Array(matrix[0].length).fill([0, 0])
      );

      const lastRowIdx = counts.length - 1;
      const lastColIdx = counts[0].length - 1;
      for (let row = lastRowIdx; row >= 0; row--) {
        for (let col = lastColIdx; col >= 0; col--) {
          if (matrix[row][col] === 1) continue;

          const [prevH, prevW] = getPrevCellCounts([row, col], counts);
          counts[row][col] = [prevH + 1, prevW + 1];
        }
      }

      return counts;
    }

    function getPrevCellCounts([row, col]: number[], counts: number[][][]): number[] {
      let [height, width] = [0, 0];

      if (row + 1 < counts.length) height = counts[row + 1][col][0];
      if (col + 1 < counts[0].length) width = counts[row][col + 1][1];

      return [height, width];
    }
  }
}

export const __ = '__';