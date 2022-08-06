const arr: string[][] = [
  ['w', 'l', 'w', 'l'],
  ['w', 'l', 'w', 'w'],
  ['w', 'l', 'w', 'w'],
  ['w', 'l', 'w', 'w'],
  ['w', 'l', 'w', 'w'],
];

{
  {// RECURSION
    function islandSizes(array: string[][]): number[] {
      const sizes: number[] = [];
      const visited: Visited = new Set();

      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          if (array[i][j] === 'w') continue;

          const size = countIslandSize(array, [i, j], visited);
          if (size > 0) sizes.push(size);
        }
      }

      return sizes;
    }

    function countIslandSize(array: string[][], pos: number[], visited: Visited) {
      const key = pos.join(',');
      if (visited.has(key)) return 0;
      visited.add(key);

      const [row, col] = pos;
      if (row < 0 || row >= array.length) return 0;
      if (col < 0 || col >= array[row].length) return 0;

      if (array[row][col] === 'w') return 0;

      let size = 1;
      size += countIslandSize(array, [row - 1, col], visited);
      size += countIslandSize(array, [row + 1, col], visited);
      size += countIslandSize(array, [row, col - 1], visited);
      size += countIslandSize(array, [row, col + 1], visited);

      return size;
    }



    type Visited = Set<string>;


    console.log(
      islandSizes(arr), // // expect [ 5, 1 ]
    );
  }

  {// ITERATION
    function islandSizes(array: string[][]): number[] {
      const sizes: number[] = [];
      const visited: Visited = new Set();

      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          if (array[i][j] === 'w') continue;

          const size = countIslandSize(array, [i, j], visited);
          if (size > 0) sizes.push(size);
        }
      }

      return sizes;
    }

    function countIslandSize(array: string[][], pos: number[], visited: Visited) {

      let size = 0;
      const stack: number[][] = [pos];
      while (stack.length > 0) {
        const current = stack.pop();

        const key = current.join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        const [row, col] = current;
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

    console.log(
      islandSizes(arr), // // expect [ 5, 1 ]
    );
  }
  {
    {
      function islandSizes(array: string[][]): number[] {
        const sizes: number[] = [];
        const visited: Set<string> = new Set();

        for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array[i].length; j++) {
            const size = sizeIsland([i, j], array, visited);
            if (size > 0) sizes.push(size);
          }
        }

        return sizes;
      }

      function sizeIsland(pos: number[], array: string[][], visited: Set<string>): number {
        const [i, j] = pos;
        const key = [i, j].join(',');
        if (visited.has(key)) return 0;
        visited.add(key);

        if (i < 0 || i >= array.length) return 0;
        if (j < 0 || j >= array[i].length) return 0;
        if (array[i][j] === 'w') return 0;

        let size = 1;
        size += sizeIsland([i - 1, j], array, visited);
        size += sizeIsland([i + 1, j], array, visited);
        size += sizeIsland([i, j - 1], array, visited);
        size += sizeIsland([i, j + 1], array, visited);
        return size;
      }

      console.log(
        islandSizes(arr), // // expect 1
      );
    }
    {
      function islandSizes(array: string[][]): number[] {
        const sizes: number[] = [];
        const visited: Set<string> = new Set();

        for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array[i].length; j++) {
            const size = sizeIsland([i, j], array, visited);
            if (size > 0) sizes.push(size);
          }
        }

        return sizes;
      }

      function sizeIsland(pos: number[], array: string[][], visited: Set<string>): number {
        const stack = [pos];
        let size = 0;
        while (stack.length > 0) {
          const [i, j] = stack.pop()!;
          const key = [i, j].join(',');
          if (visited.has(key)) continue;
          visited.add(key);

          if (i < 0 || i >= array.length) continue;
          if (j < 0 || j >= array[i].length) continue;
          if (array[i][j] === 'w') continue;

          stack.push([i - 1, j]);
          stack.push([i + 1, j]);
          stack.push([i, j - 1]);
          stack.push([i, j + 1]);
          size += 1;
        }

        return size;
      }

      console.log(
        islandSizes(arr), // expect [ 5, 1 ]
      );
    }

  }
}

export const __ = '__';