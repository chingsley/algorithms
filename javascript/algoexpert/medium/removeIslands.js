// Time: O(wh) | Space: O(wh)
// w = width of the input matrix
// h = height 0f the input matrix
function removeIslands(matrix) {
  const borderConnectedOnes = [];
  for (let row of matrix) {
    borderConnectedOnes.push(new Array(row.length).fill(false));
  }

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
      findBorderConnectedOnes(matrix, rowIdx, colIdx, borderConnectedOnes);
    }
  }

  for (let rowIdx = 1; rowIdx < matrix.length - 1; rowIdx++) {
    for (let colIdx = 1; colIdx < matrix[rowIdx].length - 1; colIdx++) {
      if (borderConnectedOnes[rowIdx][colIdx]) {
        continue;
      }

      matrix[rowIdx][colIdx] = 0;
    }
  }

  return matrix;
}

function findBorderConnectedOnes(matrix, startingRowIdx, startingColIdx, borderConnectedOnes) {
  const stack = [[startingRowIdx, startingColIdx]];

  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRowIdx, currentColIdx] = currentPosition;

    const alreadyVisited = borderConnectedOnes[currentRowIdx][currentColIdx];
    if (alreadyVisited) {
      continue;
    }

    borderConnectedOnes[currentRowIdx][currentColIdx] = true;

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