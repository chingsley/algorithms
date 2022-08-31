/**
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
  // console.log(visited);
  const rowInBound = i >= 0 && i < arr.length;
  const colInBound = j >= 0 && j < arr[0].length;

  const key = i + ',' + j;

  if (!rowInBound || !colInBound) return 0;
  if (arr[i][j] === 0) return 0;
  if (visited.has(key)) return 0;

  visited.add(key);

  let count = 1;
  count += explore(arr, i - 1, j, visited); // up
  count += explore(arr, i + 1, j, visited); // down
  count += explore(arr, i, j - 1, visited); // left
  count += explore(arr, i, j + 1, visited); // right


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