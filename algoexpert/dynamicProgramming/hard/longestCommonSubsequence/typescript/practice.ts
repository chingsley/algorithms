{
  {
    // O(mn * Min(m, n)) time | O(mn * Min(m, n)) space
    function longestCommonSubsequence(str1: string, str2: string) {
      const matrix: string[][] = new Array(str1.length + 1).fill("").map(
        () => new Array(str2.length + 1).fill("")
      );

      for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
          if (str1[row - 1] === str2[col - 1]) {
            matrix[row][col] = matrix[row - 1][col - 1] + str1[row - 1];
          } else {
            const left = matrix[row][col - 1];
            const top = matrix[row - 1][col];
            if (left.length > top.length) {
              matrix[row][col] = left;
            } else {
              matrix[row][col] = top;
            }
          }
        }
      }

      return matrix[str1.length][str2.length].split('');
    }

  }
}

export const __ = '__';