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
        const key = current.join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        const [row, col] = current;
        if (row < 0 || row >= matrix.length) continue;
        if (col < 0 || col >= matrix[row].length) continue;

        if (matrix[row][col] === 0) continue;

        stack.push([row - 1, col]);
        stack.push([row + 1, col]);
        stack.push([row, col - 1]);
        stack.push([row, col + 1]);

        size += 1;
      }

      return size;
    }
  }
}

export const ___ = '___';