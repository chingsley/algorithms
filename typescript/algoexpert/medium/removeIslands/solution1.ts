/**
 *  with n = no. of rows
 *       m = no. of columns
 * 
 * Time: O(n x m)
 * Space: O(n x m) (due to the 'visited' and 'stack' data structures
 * )
 * @param matrix number[][]
 * @returns number[][]
 */
export function removeIslands(matrix: number[][]) {
  const visited: Set<string> = new Set();
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[i].length - 1; j++) {
      const locations = traverse(matrix, i, j, visited);
      for (let [row, col] of locations) {
        matrix[row][col] = 0;
      }
    }
  }
  return matrix;
}


function traverse(matrix: number[][], i: number, j: number, visited: Set<string>): number[][] {
  let locations: number[][] = [];
  const stack: number[][] = [[i, j]];


  while (stack.length > 0) {
    const [row, col] = stack.pop()!;
    // const row = current![0];
    // const col = current![1];
    const key = row + ',' + col;

    if (row < 0 || row > matrix.length - 1) continue;
    if (col < 0 || col > matrix[row].length - 1) continue;
    if (matrix[row][col] === 0) continue;
    if (visited.has(key)) continue;

    locations.push([row, col]);
    visited.add(key);

    if ((row === 0 || col === 0) || row === matrix.length - 1 || col === matrix[row].length - 1) {
      locations = [];
      break;
    };

    stack.push([row, col - 1]);
    stack.push([row, col + 1]);
    stack.push([row - 1, col]);
    stack.push([row + 1, col]);
  }


  return locations;
}



const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1]
];

console.log(
  removeIslands(matrix)
);