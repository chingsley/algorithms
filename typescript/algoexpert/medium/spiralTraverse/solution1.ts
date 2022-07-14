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
  let topRow: number = 0;
  let downRow: number = array.length - 1;
  let leftCol: number = 0;
  let rightCol: number = array[0].length - 1;

  const result: number[] = [];
  while (topRow <= downRow && leftCol <= rightCol) {
    for (let col = leftCol; col <= rightCol; col++) {
      result.push(array[topRow][col]);
    }
    for (let row = topRow + 1; row <= downRow; row++) {
      result.push(array[row][rightCol]);
    }
    for (let col = rightCol - 1; col >= leftCol; col--) {
      if (topRow !== downRow) result.push(array[downRow][col]);
    }
    for (let row = downRow - 1; row > topRow; row--) {
      if (leftCol !== rightCol) result.push(array[row][leftCol]);
    }

    leftCol += 1;
    rightCol -= 1;
    topRow += 1;
    downRow -= 1;
  }
  return result;
}
/**
 *      l         r
 *  t  [1, 2, 3, 4],
       [12, 13, 14, 5],
       [11 , 16, 15, 6],
    b  [10, 9, 8, 7]
 */