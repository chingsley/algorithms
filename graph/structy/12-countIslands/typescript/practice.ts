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
  {
    function countIslands(arr: string[][]): number {
      const visited: Set<string> = new Set();
      let count = 0;

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] === 'w') continue;
          if (exploreIsland([i, j], arr, visited) === true) count += 1;
        }
      }

      return count;
    }


    function exploreIsland(pos: number[], arr: string[][], visited: Set<string>): boolean {
      const [i, j] = pos;
      const key = [i, j].join(',');
      if (visited.has(key)) return false;
      visited.add(key);

      if (i < 0 || i >= arr.length) return false;
      if (j < 0 || j >= arr[i].length) return false;
      if (arr[i][j] === 'w') return false;

      exploreIsland([i - 1, j], arr, visited);
      exploreIsland([i + 1, j], arr, visited);
      exploreIsland([i, j - 1], arr, visited);
      exploreIsland([i, j + 1], arr, visited);

      return true;
    }


    // console.log(
    //   countIslands(arr), // // expect 2
    // );
  }
  {
    function countIslands(arr: string[][]): number {
      const visited: Set<string> = new Set();
      let count = 0;

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] === 'w') continue;
          if (visited.has([i, j].join(','))) continue;  // NOTE THIS ***
          if (exploreIsland([i, j], arr, visited) === true) count += 1;
        }
      }

      return count;
    }

    function exploreIsland(pos: number[], arr: string[][], visited: Set<string>): boolean {
      const stack = [pos];

      while (stack.length > 0) {
        const [i, j] = stack.pop()!;
        const key = [i, j].join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        if (i < 0 || i >= arr.length) continue;
        if (j < 0 || j >= arr.length) continue;
        if (arr[i][j] === 'w') continue;

        stack.push([i - 1, j]);
        stack.push([i + 1, j]);
        stack.push([i, j - 1]);
        stack.push([i, j + 1]);
      }

      return true;
    }

    // console.log(
    //   countIslands(arr), // // expect 2
    // );
  }
  {
    function countIslands(arr: string[][]): number {
      const visited: Set<string> = new Set();
      let count = 0;

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] === 'w') continue;
          if (exploreIsland([i, j], arr, visited) === true) count += 1;
        }
      }

      return count;
    }

    function exploreIsland(pos: number[], arr: string[][], visited: Set<string>): boolean {
      const stack = [pos];
      let hasUnvisitedIsland = false; // NOTE THIS ***

      while (stack.length > 0) {
        const [i, j] = stack.pop()!;
        const key = [i, j].join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        if (i < 0 || i >= arr.length) continue;
        if (j < 0 || j >= arr.length) continue;
        if (arr[i][j] === 'w') continue;

        stack.push([i - 1, j]);
        stack.push([i + 1, j]);
        stack.push([i, j - 1]);
        stack.push([i, j + 1]);

        hasUnvisitedIsland = true; // NOTE THIS ***
      }

      return hasUnvisitedIsland; // NOTE THIS ***
    }

    // console.log(
    //   countIslands(arr), // // expect 2
    // );
  }
  {
    function countIslands(arr: string[][]): number {
      const visited: Set<string> = new Set();
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          // const key = [i, j].join(',');
          // if(visited.has(key)) continue;
          // if(arr[i][j] === 'w') continue;
          if (!isUnvisitedLand(arr, [i, j], visited)) continue;

          traverseIsland(arr, [i, j], visited);
          count += 1;
        }
      }

      return count;
    }

    // O(n * m) time | O(n * m) space
    // n = no. of rows | m = no. of columns
    function traverseIsland(arr: string[][], pos: [number, number], visited: Set<string>) {
      const [i, j] = pos;
      if (!isUnvisitedLand(arr, [i, j], visited)) return;
      visited.add(pos.join(','));
      // const key = [i, j].join(',');
      // if(visited.has(key)) return;
      // if(arr[i][j] === 'w') return;

      // if (i < 0 || i >= arr.length) return;
      // if (j < 0 || j >= arr[i].length) return;

      traverseIsland(arr, [i - 1, j], visited);
      traverseIsland(arr, [i + 1, j], visited);
      traverseIsland(arr, [i, j - 1], visited);
      traverseIsland(arr, [i, j + 1], visited);
    }

    const isUnvisitedLand = (arr: string[][], pos: [number, number], visited: Set<string>) => {
      const [i, j] = pos;
      const key = [i, j].join(',');
      if (visited.has(key)) return false;
      if (i < 0 || i >= arr.length) return false;
      if (j < 0 || j >= arr[i].length) return false;
      if (arr[i][j] === 'w') return false;
      return true;
    };

    // console.log(
    //   countIslands(arr), // // expect 2
    // );
  }
  {// Same solution as the above (but with comments removed)
    // O(n * m) time | O(n * m) space
    // n = no. of rows | m = no. of columns
    function countIslands(arr: string[][]): number {
      const visited: Set<string> = new Set();
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (!isUnvisitedLand(arr, [i, j], visited)) continue;

          traverseIsland(arr, [i, j], visited);
          count += 1;
        }
      }

      return count;
    }

    function traverseIsland(arr: string[][], [i, j]: [number, number], visited: Set<string>) {
      if (!isUnvisitedLand(arr, [i, j], visited)) return;
      visited.add([i, j].join(','));

      traverseIsland(arr, [i - 1, j], visited);
      traverseIsland(arr, [i + 1, j], visited);
      traverseIsland(arr, [i, j - 1], visited);
      traverseIsland(arr, [i, j + 1], visited);
    }

    const isUnvisitedLand = (arr: string[][], [i, j]: [number, number], visited: Set<string>) => {
      if (visited.has([i, j].join(','))) return false;
      if (i < 0 || i >= arr.length) return false;
      if (j < 0 || j >= arr[i].length) return false;
      if (arr[i][j] === 'w') return false;

      return true;
    };

    // console.log(
    //   countIslands(arr), // // expect 2
    // );
  }
  {// Same solution as the above (but change the name of the helper function from 'isUnvisitedLand' to 'unvisitedLand')
    // O(n * m) time | O(n * m) space
    // n = no. of rows | m = no. of columns
    function countIslands(arr: string[][]): number {
      const visited: Set<string> = new Set();
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (!unvisitedLand(arr, [i, j], visited)) continue;

          traverseIsland(arr, [i, j], visited);
          count += 1;
        }
      }

      return count;
    }

    function traverseIsland(arr: string[][], [i, j]: [number, number], visited: Set<string>) {
      if (!unvisitedLand(arr, [i, j], visited)) return;
      visited.add([i, j].join(','));

      traverseIsland(arr, [i - 1, j], visited);
      traverseIsland(arr, [i + 1, j], visited);
      traverseIsland(arr, [i, j - 1], visited);
      traverseIsland(arr, [i, j + 1], visited);
    }

    const unvisitedLand = (arr: string[][], [i, j]: [number, number], visited: Set<string>) => {
      if (visited.has([i, j].join(','))) return false;
      if (i < 0 || i >= arr.length) return false;
      if (j < 0 || j >= arr[i].length) return false;
      if (arr[i][j] === 'w') return false;

      return true;
    };

    console.log(
      countIslands(arr), // // expect 2
    );
  }
  {// ITERATION (WITH STACK)
    // O(n * m) time | O(n * m) space
    // n = no. of rows | m = no. of columns
    function countIslands(arr: string[][]): number {
      let count = 0;
      const visited: Set<string> = new Set();
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (isVisitedLand([i, j], visited)) continue;
          if (isWater(arr, [i, j])) continue;

          traverseIsland(arr, [i, j], visited);
          count += 1;
        }
      }

      return count;
    }

    function traverseIsland(arr: string[][], [row, col]: [number, number], visited: Set<string>) {
      const stack = [[row, col]];
      while (stack.length > 0) {
        const [i, j] = stack.pop()!;

        if (isOutOfBorder(arr, [i, j])) continue;
        if (isWater(arr, [i, j])) continue;
        if (isVisitedLand([i, j], visited)) continue;
        visited.add([i, j].join(','));

        stack.push([i - 1, j]);
        stack.push([i + 1, j]);
        stack.push([i, j - 1]);
        stack.push([i, j + 1]);
      }
    }

    const isVisitedLand = ([i, j]: [number, number], visited: Set<string>): boolean => {
      return visited.has([i, j].join(','));
    };

    const isWater = (arr: string[][], [i, j]: [number, number]): boolean => {
      return arr[i][j] === 'w';
    };

    const isOutOfBorder = (arr: string[][], [i, j]: [number, number]): boolean => {
      if (i < 0 || i >= arr.length) return true;
      if (j < 0 || j >= arr[i].length) return true;

      return false;
    };

    // console.log(
    //   countIslands(arr), // // expect 2
    // );
  }
  {// ITERATION (WITH STACK)
    // O(n * m) time | O(n * m) space
    // n = no. of rows | m = no. of columns
    function countIslands(arr: string[][]): number {
      let count = 0;
      const visited: Set<string> = new Set();
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if (isUnvisitedLand(arr, [i, j], visited)) {
            traverseIsland(arr, [i, j], visited);
            count += 1;
          }

        }
      }

      return count;
    }

    function traverseIsland(arr: string[][], [row, col]: [number, number], visited: Set<string>) {
      const stack = [[row, col]];
      while (stack.length > 0) {
        const [i, j] = stack.pop()!;

        if (isUnvisitedLand(arr, [i, j], visited)) {
          visited.add([i, j].join(','));

          stack.push([i - 1, j]);
          stack.push([i + 1, j]);
          stack.push([i, j - 1]);
          stack.push([i, j + 1]);
        }

      }
    }

    const isUnvisitedLand = (arr: string[][], [i, j]: [number, number], visited: Set<string>): boolean => {
      if (i < 0 || i >= arr.length) return false;
      if (j < 0 || j >= arr[i].length) return false;
      if (arr[i][j] === 'w') return false;
      if (visited.has([i, j].join(','))) return false;

      return true;
    };

    console.log(
      countIslands(arr), // // expect 2
    );
  }
}





export const __ = '__';
