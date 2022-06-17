export function riverSizes(matrix: number[][]) {
  const visited: Set<string> = new Set();
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (explore(matrix, i, j, visited) === true) {
        count += 1;
      }
    }
  }
  return count;
}


function explore(arr: number[][], i: number, j: number, visited: Set<string>) {
  console.log(visited);
  const rowInBound = i >= 0 && i < arr.length;
  const colInBound = j >= 0 && j < arr[0].length;

  if (!rowInBound || !colInBound) return false;

  const key = i + ',' + j;

  if (arr[i][j] === 0) return false;
  if (visited.has(key)) return false;

  visited.add(key);


  explore(arr, i - 1, j, visited); // up
  explore(arr, i + 1, j, visited); // down
  explore(arr, i, j - 1, visited); // left
  explore(arr, i, j + 1, visited); // right


  return true;
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