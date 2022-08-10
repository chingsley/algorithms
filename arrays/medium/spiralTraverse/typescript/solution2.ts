/**
 * Question:
 * Write a function that takes in an n x m two-dimensional array (that can
 * be square-shaped when n === m) and returns a one-dimensional array of all
 * the array's elements in spiral order.
 * Spiral order starts at the top left corner of the two-dimensional array,
 * goes to the right, and proceeds in a spiral pattern all the way until every
 * element has been visited.
 * 
 * Solution1: ITERATION
 * Time: O(n * m);
 * Space: O(n * m)
 * Where n = number of rows, m = number of columns
 * 
 * @param array 
 * @returns 
 */
export function spiralTraverse(array: number[][]) {
  const result: number[] = [];
  traverseSpiral(array, 0, array[0].length - 1, 0, array.length - 1, result);
  return result;
}

function traverseSpiral(array: number[][], leftCol: number, rightCol: number, topRow: number, bttmRow: number, result: number[]) {
  if (leftCol > rightCol || topRow > bttmRow) return;

  for (let col = leftCol; col <= rightCol; col++) {
    result.push(array[topRow][col]);
  }
  for (let row = topRow + 1; row <= bttmRow; row++) {
    result.push(array[row][rightCol]);
  }
  for (let col = rightCol - 1; col >= leftCol; col--) {
    if (topRow !== bttmRow) result.push(array[bttmRow][col]);
  }
  for (let row = bttmRow - 1; row > topRow; row--) {
    if (leftCol !== rightCol) result.push(array[row][leftCol]);
  }
  traverseSpiral(array, leftCol + 1, rightCol - 1, topRow + 1, bttmRow - 1, result);
}