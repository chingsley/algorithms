{
  {
    function minimumPassesOfMatrix(matrix: number[][]) {
      let passes = 0;

      let stack: number[][] = [];
      const negatives: number[][] = [];

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] > 0) stack.push([i, j]);
          if (matrix[i][j] < 0) negatives.push([i, j]);
        }
      }

      let keeper: number[][] = [];
      while (stack.length) {
        const [row, col] = stack.pop()!;

        if (row - 1 >= 0 && [col] && matrix[row - 1][col] < 0) {
          matrix[row - 1][col] *= -1;
          keeper.push([row - 1, col]);
        }
        if (row + 1 < matrix.length && matrix[row + 1][col] < 0) {
          matrix[row + 1][col] *= -1;
          keeper.push([row + 1, col]);
        }
        if (col - 1 >= 0 && matrix[row][col - 1] < 0) {
          matrix[row][col - 1] *= -1;
          keeper.push([row, col - 1]);
        }
        if (col + 1 < matrix[row].length && matrix[row][col + 1] < 0) {
          matrix[row][col + 1] *= -1;
          keeper.push([row, col + 1]);
        }

        if (stack.length === 0) {
          passes += 1;
          stack = keeper;
          keeper = [];
        }
      }

      console.log(matrix);
      for (let [i, j] of negatives) {
        if (matrix[i][j] < 0) {
          console.log({ i, j });
          console.log(matrix[i][j]);
          return -1;
        }
      }

      return passes > 0 ? passes - 1 : passes;
    }

    const matrix = [
      [0, -1, -3, 2, 0],
      [1, -2, -5, -1, -3],
      [3, 0, 0, -4, -1]
    ];

    console.log(
      minimumPassesOfMatrix(matrix)
    );
  }
  {
    function minimumPassesOfMatrix(matrix: number[][]) {
      let stack: number[][] = [];
      let keeper: number[][] = [];
      const negatives: number[][] = [];

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] > 0) stack.push([i, j]);
          if (matrix[i][j] < 0) negatives.push([i, j]);
        }
      }

      let passes = 0;
      while (stack.length > 0) {
        const [row, col] = stack.pop()!;
        if (row - 1 >= 0 && matrix[row - 1][col] < 0) {
          matrix[row - 1][col] *= -1;
          keeper.push([row - 1, col]);
        }
        if (row + 1 < matrix.length && matrix[row + 1][col] < 0) {
          matrix[row + 1][col] *= -1;
          keeper.push([row + 1, col]);
        }
        if (col - 1 >= 0 && matrix[row][col - 1] < 0) {
          matrix[row][col - 1] *= -1;
          keeper.push([row, col - 1]);
        }
        if (col + 1 < matrix[row].length && matrix[row][col + 1] < 0) {
          matrix[row][col + 1] *= -1;
          keeper.push([row, col + 1]);
        }
        if (stack.length === 0) {
          passes += 1;
          stack = keeper;
          keeper = [];
        }
      }

      for (let [row, col] of negatives) {
        if (matrix[row][col] < 0) return -1;
      }

      return passes > 0 ? passes - 1 : 0;
    }

    {
      // O(n * m) time | O(n * m) space;
      // n = no. of columns
      // m = no. of rows
      function minimumPassesOfMatrix(matrix: number[][]) {
        let positiveStack: number[][] = [];
        const negativeStack: number[][] = [];

        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) positiveStack.push([i, j]);
            if (matrix[i][j] < 0) negativeStack.push([i, j]);
          }
        }

        let passes = 0;
        let stack = positiveStack;
        positiveStack = [];
        while (stack.length > 0) {
          const [row, col] = stack.pop()!;

          if (row - 1 >= 0 && matrix[row - 1][col] < 0) {
            matrix[row - 1][col] *= -1;
            positiveStack.push([row - 1, col]);
          }
          if (row + 1 < matrix.length && matrix[row + 1][col] < 0) {
            matrix[row + 1][col] *= -1;
            positiveStack.push([row + 1, col]);
          }
          if (col - 1 >= 0 && matrix[row][col - 1] < 0) {
            matrix[row][col - 1] *= -1;
            positiveStack.push([row, col - 1]);
          }
          if (col + 1 < matrix[row].length && matrix[row][col + 1] < 0) {
            matrix[row][col + 1] *= -1;
            positiveStack.push([row, col + 1]);
          }

          if (stack.length === 0) {
            passes += 1;
            stack = positiveStack;
            positiveStack = [];
          }
        }

        for (let [i, j] of negativeStack) {
          if (matrix[i][j] < 0) return -1;
        }

        return passes - 1;
      }
    }
  }
}


export const ___ = '___';