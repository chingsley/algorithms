/**
 * *** WORK IN PROGRESS!! ***
 * 
 * Time: O(n x m)
 * Space: O(n x m)
 *  Where n = no. of rows
 *        m = no. of columns
 * 
 * @param matrix m by n array
 * @returns number[]
 */
export function riverSizes(matrix: number[][]) {
  const visited: Set<string> = new Set();
  const sizes: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const count = explore(matrix, i, j, visited);
      if (count > 0) {
        sizes.push(count);
      }
    }
  }
  return sizes;
}


function explore(arr: number[][], i: number, j: number, visited: Set<string>) {
  const rowInBound = (row: number) => row >= 0 && row < arr.length;
  const colInBound = (col: number) => col >= 0 && col < arr[0].length;

  const stack: number[][] = [[i, j]];
  let count = 0;
  while (stack.length > 0) {
    const [row, col] = stack.pop();
    const key = row + ',' + col;

    let isIsland = true;
    if (!rowInBound(row) || !colInBound(col)) isIsland = false;
    console.log(visited, arr);
    if (arr[row][col] === 0) isIsland = false;
    if (visited.has(key)) isIsland = false;

    if (isIsland) {
      count += 1;
      visited.add(key);

      stack.push([i - 1, j]);
      stack.push([i + 1, j]);
      stack.push([i, j - 1]);
      stack.push([i, j + 1]);
    }
  }

  return count;
}


const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];

console.log(
  riverSizes(matrix)
);