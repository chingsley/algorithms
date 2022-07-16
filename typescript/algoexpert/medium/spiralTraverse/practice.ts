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
}