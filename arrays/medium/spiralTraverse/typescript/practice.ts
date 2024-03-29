{
  {
    function spiralTraverse(array: number[][]) {
      let startRow = 0;
      let endRow = array.length - 1;
      let startCol = 0;
      let endCol = array[0].length - 1;

      const result: number[] = [];
      while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
          result.push(array[startRow][col]);
        }
        for (let row = startRow + 1; row <= endRow; row++) {
          result.push(array[row][endCol]);
        }
        if (startRow !== endRow) { // better than having this inside the loop
          for (let col = endCol - 1; col >= startCol; col--) {
            result.push(array[endRow][col]);
          }
        }
        if (startCol !== endCol) { // better than having this inside the loop
          for (let row = endRow - 1; row > startRow; row--) {
            result.push(array[row][startCol]);
          }
        }

        startRow += 1;
        endRow -= 1;
        startCol += 1;
        endCol -= 1;
      }

      return result;
    }
  }
  {
    // O(n*m) time | O(n*m) space
    // n = no. of columns
    // m = no. of rows
    function spiralTraverse(array: number[][]) {
      let startRow = 0;
      let endRow = array.length - 1;
      let startCol = 0;
      let endCol = array[0].length - 1;

      const result: number[] = [];
      traverse(array, result, startRow, endRow, startCol, endCol);
      return result;
    }

    function traverse(array: number[][], result: number[], startRow: number, endRow: number, startCol: number, endCol: number) {
      if (startRow > endRow || startCol > endCol) return;

      for (let col = startCol; col <= endCol; col++) {
        result.push(array[startRow][col]);
      }
      for (let row = startRow + 1; row <= endRow; row++) {
        result.push(array[row][endCol]);
      }
      if (startRow !== endRow) {
        for (let col = endCol - 1; col >= startCol; col--) {
          result.push(array[endRow][col]);
        }
      }
      if (startCol !== endCol) {
        for (let row = endRow - 1; row > startRow; row--) {
          result.push(array[row][startCol]);
        }
      }

      startRow += 1;
      endRow -= 1;
      startCol += 1;
      endCol -= 1;
      traverse(array, result, startRow, endRow, startCol, endCol);
    }
  }
  {
    // O(nm) time | O(nm) space
    // n = no. of rows in array;
    // m = no. of columns in each row
    function spiralTraverse(array: number[][]) {
      if (array.length === 0) return [];

      const res: number[] = [];

      let [colStart, colEnd] = [0, array[0].length - 1];
      let [rowStart, rowEnd] = [0, array.length - 1];
      while (res.length < array.length * array[0].length) {
        // while(rowStart <= rowEnd && colStart <= colEnd) { // this condition will also work
        for (let col = colStart; col <= colEnd; col++) {
          res.push(array[rowStart][col]);
        }
        for (let row = rowStart + 1; row <= rowEnd; row++) {
          res.push(array[row][colEnd]);
        }
        if (rowStart !== rowEnd) {
          for (let col = colEnd - 1; col >= colStart; col--) {
            res.push(array[rowEnd][col]);
          }
        }
        if (colStart !== colEnd) {
          for (let row = rowEnd - 1; row > rowStart; row--) {
            res.push(array[row][colStart]);
          }
        }

        colStart += 1;
        rowStart += 1;

        colEnd -= 1;
        rowEnd -= 1;
      }

      return res;
    }
  }
  {
    // O(m * n) time | O(m * n) space
    // m = no. of rows | n = no. of colums
    function spiralTraverse(array: number[][]) {
      const result: number[] = [];

      let [startRow, endRow] = [0, array.length - 1];
      let [startCol, endCol] = [0, array[0].length - 1];

      while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
          result.push(array[startRow][col]);
        }
        for (let row = startRow + 1; row <= endRow; row++) {
          result.push(array[row][endCol]);
        }
        if (startRow !== endRow) {
          for (let col = endCol - 1; col >= startCol; col--) {
            result.push(array[endRow][col]);
          }
        }
        if (startCol !== endCol) {
          for (let row = endRow - 1; row > startRow; row--) {
            result.push(array[row][startCol]);
          }
        }

        [startRow, endRow] = [startRow += 1, endRow -= 1];
        [startCol, endCol] = [startCol += 1, endCol -= 1];
      }

      return result;
    }
  }
}

export const __ = '__';