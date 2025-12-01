/** SOLUTION 2: USING RECURSION
 * Time: O(N) where N = total no. of
 *       elements in the 2D array
 * Space: (N) due to returned 1D array
 *        containing the total no. of
 *        elements
 * @param {Array} array 2D array
 */
function spiralTraverse(array) {
  const result = [];
  let [startRow, endRow] = [0, array.length - 1];
  let [startCol, endCol] = [0, array[0].length - 1];
  spiralFill(array, startRow, endRow, startCol, endCol, result);
  return result;
}

function spiralFill(array, startRow, endRow, startCol, endCol, result) {
  if (startRow <= endRow && startCol <= endCol) {
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
    startRow = startRow + 1;
    endRow = endRow - 1;
    startCol = startCol + 1;
    endCol = endCol - 1;
    spiralFill(array, startRow, endRow, startCol, endCol, result);
  } else {
    return;
  }
}

// const testArray = [
//   [1, 2, 3, 4], // first row
//   [12, 13, 14, 5], // second row
//   [11, 16, 15, 6], // third row
//   [10, 9, 8, 7], // fourth row
// ];
const testArray = [
  [1, 2, 3, 4], // first row
  [10, 11, 12, 5], // second row
  [9, 8, 7, 6], // third row
];
const res = spiralTraverse(testArray);
console.log(res);

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
