const arr: string[][] = [
  ['w', 'l', 'w', 'l'],
  ['w', 'l', 'w', 'w'],
  ['w', 'l', 'w', 'w'],
  ['w', 'l', 'w', 'w'],
  ['w', 'l', 'w', 'w'],
];

{
  {
    /**
     * Question:
     * 
     * Time: O(e)
     * Space: O(n)
     * Where: e = no. of edges in the graph
     *        n = no. of nodes in the graph
     * 
     * @param arr string[]
     * @returns number
     */
    function countIslands(arr: string[][]): number {
      let count = 0;
      const visited: Visited = {};

      const isWater = (i: number, j: number) => arr[i][j] === 'w';
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (isWater(i, j)) continue;
          if (explore(arr, i, j, visited) > 0) {
            count += 1;
          }
        }
      }

      return count;
    }

    function explore(arr: string[][], i: number, j: number, visited: Visited): number {
      const queue: number[][] = [[i, j]];

      let count = 0;
      while (queue.length > 0) {
        const [row, col] = queue.shift();
        const key = row + ',' + col;

        if (key in visited) continue;
        visited[key] = key;

        if (row < 0 || row >= arr.length) continue;
        if (col < 0 || col >= arr[row].length) continue;

        if (!(arr[row][col] === 'l')) continue;

        queue.push([row, col - 1]); // left
        queue.push([row, col + 1]); // right
        queue.push([row - 1, col]); // top
        queue.push([row + 1, col]); // down

        count += 1;
      }

      return count;
    }

    interface Visited { [key: string]: string; };

    // console.log(
    //   countIslands(arr), // expect 2,
    // );
  }
  {
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
    function countIslands(arr: string[][]): number {
      let islandCount = 0;
      const visited: Visited = {};

      const isWater = (i: number, j: number) => arr[i][j] === 'w';
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (isWater(i, j)) continue;
          if (explore(arr, i, j, visited) > 0) {
            islandCount += 1;
          }
        }
      }

      return islandCount;
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

    // console.log(
    //   countIslands(arr), // expect 2,
    // );
  }
  {// RECURSION (* * * * *)
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
    function countIslands(array: string[][]): number {
      const visited: Visited = new Set();
      let islandsCount = 0;

      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          if (array[i][j] === 'w') continue;

          const islandSize = islandCountHelper(array, [i, j], visited);
          if (islandSize > 0) islandsCount += 1;
        }
      }

      return islandsCount;
    }

    function islandCountHelper(array: string[][], pos: number[], visited: Visited): number {
      const key = pos.join(',');
      if (visited.has(key)) return 0;
      visited.add(key);

      const [row, col] = pos;
      if (row < 0 || row >= array.length) return 0;
      if (col < 0 || col >= array[row].length) return 0;

      if (array[row][col] === 'w') return 0;

      let size = 1;
      size += islandCountHelper(array, [row - 1, col], visited);
      size += islandCountHelper(array, [row + 1, col], visited);
      size += islandCountHelper(array, [row, col - 1], visited);
      size += islandCountHelper(array, [row, col + 1], visited);

      return size;
    }

    type Visited = Set<string>;

    // console.log(
    //   countIslands(arr), // // expect 2
    // );
  }
  {// ITERATION (* * * * *)
    function countIslands(array: string[][]): number {
      const visited: Visited = new Set();
      let islandsCount = 0;

      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          if (array[i][j] === 'w') continue;

          const islandSize = islandCountHelper(array, [i, j], visited);
          if (islandSize > 0) islandsCount += 1;
        }
      }

      return islandsCount;
    }

    function islandCountHelper(array: string[][], pos, visited: Visited): number {
      const stack: number[][] = [pos];

      let size = 0;
      while (stack.length > 0) {
        const [row, col] = stack.pop();
        const key = [row, col].join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        if (row < 0 || row >= array.length) continue;
        if (col < 0 || col >= array[row].length) continue;

        if (array[row][col] === 'w') continue;

        stack.push([row - 1, col]);
        stack.push([row + 1, col]);
        stack.push([row, col - 1]);
        stack.push([row, col + 1]);

        size += 1;
      }

      return size;
    }

    type Visited = Set<string>;

    // console.log(
    //   countIslands(arr), // // expect 2
    // );
  }
}





export const __ = '__';
