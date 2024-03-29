/**
     * Question:
     * 
     * Time: O(e)
     * Space: O(n)
     * Where: e = no. of edges in the graph
     *        n = no. of nodes in the graph
     * 
     * @param graph Grahp
     * @returns number
     */
function smallestIsland(arr: string[][]): number {
  let smallestSize = Infinity;
  const visited: Visited = {};

  const isWater = (i: number, j: number) => arr[i][j] === 'w';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (isWater(i, j)) continue;
      const size = explore(arr, i, j, visited);
      if (size > 0 && size < smallestSize) {
        smallestSize = size;
      }
    }
  }

  return smallestSize;
}

function explore(arr: string[][], row: number, col: number, visited: Visited): number {
  const key = row + ',' + col;

  if (key in visited) return 0;
  visited[key] = key;

  if (row < 0 || row >= arr.length) return 0;
  if (col < 0 || col >= arr[row].length) return 0;

  if (!(arr[row][col] === 'l')) return 0;

  let count = 1;
  count += explore(arr, row, col - 1, visited); // left
  count += explore(arr, row, col + 1, visited); // right
  count += explore(arr, row - 1, col, visited); // top
  count += explore(arr, row + 1, col, visited); // down

  return count;
}

interface Visited { [key: string]: string; };

const arr: string[][] = [
  ['w', 'l', 'w', 'l'],
  ['w', 'l', 'w', 'w'],
  ['w', 'l', 'w', 'w'],
  ['w', 'l', 'w', 'w'],
  ['w', 'l', 'w', 'w'],
];

console.log(
  smallestIsland(arr), // expect 1
);





