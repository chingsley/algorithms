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
      if (matrix[i][j] === 0) continue;

      const [locations, hasBorderLand] = getIlandsAt([i, j], matrix, visited);
      if (hasBorderLand) continue;

      for (let [row, col] of locations) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
}

function getIlandsAt(pos: number[], matrix: number[][], visited: Set<string>): [number[][], boolean] {
  const stack: number[][] = [pos];
  const locations: number[][] = [];
  let hasBorderLand = false;

  while (stack.length > 0) {
    const current = stack.pop()!;

    const key = current.join(',');
    if (visited.has(key)) continue;
    visited.add(key);

    const [i, j] = current;
    if (matrix[i][j] === 0) continue;

    if (
      i === 0 || j === 0 ||
      i === matrix.length - 1 ||
      j === matrix[i].length - 1
    ) {
      hasBorderLand = true;
      continue;
    }

    locations.push([i, j]);

    stack.push([i - 1, j]);
    stack.push([i + 1, j]);
    stack.push([i, j - 1]);
    stack.push([i, j + 1]);
  }

  return [locations, hasBorderLand];
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