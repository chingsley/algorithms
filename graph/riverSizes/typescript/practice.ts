{
  {// RECURSION
    /**
     * Time: O(n x m) time | O(n x m) space
     * n = no. of columns | m = no. of rows
     * @param matrix number[][]
     * @returns number[]
     */
    function riverSizes(matrix: number[][]) {
      const sizes: number[] = [];
      const visited: Set<string> = new Set();

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) continue;

          const size = countRiverSize(matrix, [i, j], visited);
          if (size > 0) sizes.push(size);
        }
      }

      return sizes;
    }

    function countRiverSize(matrix: number[][], pos: number[], visited: Set<string>) {
      const key = pos.join(',');
      if (visited.has(key)) return 0;
      visited.add(key);

      const [row, col] = pos;
      if (row < 0 || row >= matrix.length) return 0;
      if (col < 0 || col >= matrix[row].length) return 0;

      if (matrix[row][col] === 0) return 0;

      let size = 1;
      size += countRiverSize(matrix, [row - 1, col], visited);
      size += countRiverSize(matrix, [row + 1, col], visited);
      size += countRiverSize(matrix, [row, col - 1], visited);
      size += countRiverSize(matrix, [row, col + 1], visited);

      return size;
    }

  }
  {// ITERATION
    /**
     * Time: O(n x m) time | O(n x m) space
     * n = no. of columns | m = no. of rows
     * @param matrix  number[][]
     * @returns number[] 
     */
    function riverSizes(matrix: number[][]) {
      const sizes: number[] = [];
      const visited: Set<string> = new Set();

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) continue;

          const size = countRiverSize(matrix, [i, j], visited);
          if (size > 0) sizes.push(size);
        }
      }

      return sizes;
    }

    function countRiverSize(matrix: number[][], pos: number[], visited: Set<string>) {

      let size = 0;
      const stack: number[][] = [pos];
      while (stack.length > 0) {
        const current = stack.pop()!;

        const [row, col] = current;
        if (row < 0 || row >= matrix.length) continue;
        if (col < 0 || col >= matrix[row].length) continue;

        if (matrix[row][col] === 0) continue;

        const key = current.join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        stack.push([row - 1, col]);
        stack.push([row + 1, col]);
        stack.push([row, col - 1]);
        stack.push([row, col + 1]);

        size += 1;
      }

      return size;
    }
  }
  {
    function riverSizes(matrix: number[][]) {
      const sizes: number[] = [];
      const visited: Set<string> = new Set();

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) continue;

          const size = getRiverSize([i, j], matrix, visited);
          if (size > 0) sizes.push(size);
        }
      }

      return sizes;
    }

    function getRiverSize([x, y]: number[], matrix: number[][], visited: Set<string>): number {
      let size = 0;
      const stack = [[x, y]];
      while (stack.length > 0) {
        const [i, j] = stack.pop()!;
        const key = [i, j].join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        if (i < 0 || i >= matrix.length) continue;
        if (j < 0 || j >= matrix[i].length) continue;

        if (matrix[i][j] === 0) continue;

        size += 1;
        stack.push([i - 1, j]);
        stack.push([i + 1, j]);
        stack.push([i, j - 1]);
        stack.push([i, j + 1]);
      }

      return size;
    }
  }
  {
    // O(m * n) time | O(m * n) space
    // m = no. of rows | n = no. of cols
    function riverSizes(matrix: number[][]) {
      const visited: Set<string> = new Set();
      const sizes: number[] = [];

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) continue;
          if (visited.has([i, j].join(','))) continue;

          const size = countRivers([i, j], matrix, visited);
          sizes.push(size);
        }
      }

      return sizes;
    }

    function countRivers([row, col]: [number, number], matrix: number[][], visited: Set<string>): number {
      let size = 0;
      const stack = [[row, col]];
      while (stack.length > 0) {
        const [i, j] = stack.pop()!;

        if (i < 0 || i >= matrix.length) continue;
        if (j < 0 || j >= matrix[i].length) continue;

        if (matrix[i][j] === 0) continue;
        if (visited.has([i, j].join(','))) continue;
        visited.add([i, j].join(','));

        stack.push([i - 1, j]);
        stack.push([i + 1, j]);
        stack.push([i, j - 1]);
        stack.push([i, j + 1]);

        size += 1;
      }

      return size;
    }

  }
  {
    // O(m * n) time | O(m * n) space
    // m = no. of rows | n = no. of cols
    function riverSizes(matrix: number[][]) {
      const visited: Set<string> = new Set();
      const sizes: number[] = [];

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) continue;
          if (visited.has([i, j].join(','))) continue;

          const size = countRivers([i, j], matrix, visited);
          sizes.push(size);
        }
      }

      return sizes;
    }

    function countRivers([i, j]: [number, number], matrix: number[][], visited: Set<string>): number {
      if (i < 0 || i >= matrix.length) return 0;
      if (j < 0 || j >= matrix[i].length) return 0;

      if (matrix[i][j] === 0) return 0;

      const key = [i, j].join(',');
      if (visited.has(key)) return 0;
      visited.add(key);

      let size = 1;
      size += countRivers([i - 1, j], matrix, visited);
      size += countRivers([i + 1, j], matrix, visited);
      size += countRivers([i, j - 1], matrix, visited);
      size += countRivers([i, j + 1], matrix, visited);

      return size;
    }

  }
}

export const ___ = '___';