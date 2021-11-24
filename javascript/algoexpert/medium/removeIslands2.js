// Time: O(wh) | Space: O(wh)
// w = width of the input matrix
// h = height 0f the input matrix
function removeIslands(matrix) {

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      const rowIsBorder = rowIdx === 0 || rowIdx === matrix.length - 1;
      const colIsBorder = colIdx === 0 || colIdx === matrix[rowIdx].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if (!isBorder) {
        continue;
      }
      if (matrix[rowIdx][colIdx] !== 1) {
        continue;
      }
      changeBorderConnectedOnesToTwos(matrix, rowIdx, colIdx);
    }
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      if (matrix[rowIdx][colIdx] === 1) {
        matrix[rowIdx][colIdx] = 0;
      } else if (matrix[rowIdx][colIdx] === 2) {
        matrix[rowIdx][colIdx] = 1;
      }
    }
  }

  return matrix;
}

function changeBorderConnectedOnesToTwos(matrix, startingRowIdx, startingColIdx) {
  const stack = [[startingRowIdx, startingColIdx]];

  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRowIdx, currentColIdx] = currentPosition;

    matrix[currentRowIdx][currentColIdx] = 2;

    const neighbors = getNeighbors(matrix, currentRowIdx, currentColIdx);
    for (let neighbor of neighbors) {
      const [rowIdx, colIdx] = neighbor;

      if (matrix[rowIdx][colIdx] !== 1) {
        continue;
      }

      stack.push(neighbor);
    }
  }

}

function getNeighbors(matrix, rowIdx, colIdx) {
  const neighbors = [];

  const numRows = matrix.length;
  const numCols = matrix[rowIdx].length;

  if (rowIdx - 1 >= 0) { // UP
    neighbors.push([rowIdx - 1, colIdx]);
  }
  if (rowIdx + 1 < numRows) { // DOWN
    neighbors.push([rowIdx + 1, colIdx]);
  }
  if (colIdx - 1 >= 0) { // LEFT
    neighbors.push([rowIdx, colIdx - 1]);
  }
  if (colIdx + 1 < numCols) { // RIGHT
    neighbors.push([rowIdx, colIdx + 1]);
  }

  return neighbors;
}

const ts1 = {
  "matrix": [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
  ]
};

console.log(removeIslands(ts1.matrix));

// Do not edit the line below.
exports.removeIslands = removeIslands;