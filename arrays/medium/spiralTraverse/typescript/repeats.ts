{ // REPEAT 4 (ITERATION)
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
      for (let col = endCol - 1; col >= startCol; col--) {
        if (startRow !== endRow) {
          result.push(array[endRow][col]);
        }
      }
      for (let row = endRow - 1; row > startRow; row--) {
        if (startCol !== endCol) {
          result.push(array[row][startCol]);
        }
      }

      startCol += 1;
      endCol -= 1;
      startRow += 1;
      endRow -= 1;
    }
    return result;
  }

}
{ // REPEAT 4 (RECURSION)
  function spiralTraverse_(array: number[][]) {
    let startRow = 0;
    let endRow = array.length - 1;
    let startCol = 0;
    let endCol = array[0].length - 1;

    const result: number[] = [];
    traverse(array, startRow, endRow, startCol, endCol, result);
    return result;
  }

  function traverse(array: number[][], startRow: number, endRow: number, startCol: number, endCol: number, result: number[]) {
    if (startRow > endRow || startCol > endCol) return;

    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow !== endRow) {
        result.push(array[endRow][col]);
      }
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol !== endCol) {
        result.push(array[row][startCol]);
      }
    }

    startCol += 1;
    endCol -= 1;
    startRow += 1;
    endRow -= 1;
    traverse(array, startRow, endRow, startCol, endCol, result);
  }

}