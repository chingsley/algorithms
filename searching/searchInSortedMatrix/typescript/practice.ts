{
  {
    type Range = [number, number];

    // O(m + n) time | O(1) space
    function searchInSortedMatrix(matrix: number[][], target: number): Range {
      let [row, col] = [0, matrix[0].length - 1]; // starting from top-right corner

      while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
          return [row, col];
        } else if (matrix[row][col] < target) {
          row += 1;
        } else {
          col -= 1;
        }
      }

      return [-1, -1];
    }
  }
  {
    type Range = [number, number];

    // O(m + n) time | O(1) space
    function searchInSortedMatrix(matrix: number[][], target: number): Range {
      let [row, col] = [matrix.length - 1, 0]; // starting from the bottom-left corner

      while (row >= 0 && col < matrix[0].length) {
        if (matrix[row][col] === target) {
          return [row, col];
        } else if (matrix[row][col] > target) {
          row -= 1;
        } else {
          col += 1;
        }
      }

      return [-1, -1];
    }
  }
  {
    type Range = [number, number];

    // O(m + n) time | O(1) space
    // m = no. of rows | n = no. of columns
    function searchInSortedMatrix(matrix: number[][], target: number): Range {
      let [row, col] = [0, matrix[0].length - 1];
      while (row < matrix.length && col >= 0) {
        if (matrix[row][col] > target) {
          col -= 1;
        } else if (matrix[row][col] < target) {
          row += 1;
        } else {
          return [row, col];
        }
      }

      return [-1, -1];
    }
  }
  {
    type Range = [number, number];

    // O(m + n) time | O(1) space
    // m = no. of rows | n = no. of columns
    function searchInSortedMatrix(matrix: number[][], target: number): Range {
      let [row, col] = [0, matrix[0].length - 1];
      while (row < matrix.length && col >= 0) {
        const value = matrix[row][col];
        if (value > target) {
          col -= 1;
        } else if (value < target) {
          row += 1;
        } else {
          return [row, col];
        }
      }

      return [-1, -1];
    }
  }
  {

    type Range = [number, number];

    // O(m + n) time | O(1) space
    // m = no. of rows | n = no. of colums
    function searchInSortedMatrix(matrix: number[][], target: number): Range {
      let [row, col] = [0, matrix[0].length - 1];

      while (row < matrix.length && col >= 0) {
        const value = matrix[row][col];
        if (value === target) {
          return [row, col];
        } else if (target < value) {
          col -= 1;
        } else {
          row += 1;
        }
      }

      return [-1, -1];
    }
  }
}

export const __ = '__';