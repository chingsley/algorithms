{
  {
    function levenshteinDistance(str1: string, str2: string): number {
      const arr = new Array(str2.length + 1).fill(1).map(() => new Array(str1.length + 1).fill(1));
      for (let i = 0; i < arr.length; i++) arr[i][0] = i;
      for (let i = 0; i < arr[0].length; i++) arr[0][i] = i;

      for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[i].length; j++) {
          if (str2[i - 1] === str1[j - 1]) {
            arr[i][j] = arr[i - 1][j - 1];
          } else {
            arr[i][j] = 1 + Math.min(
              arr[i - 1][j],
              arr[i][j - 1],
              arr[i - 1][j - 1],
            );
          }
        }
      }
      console.log(arr);

      return arr[str2.length][str1.length];
    }

    console.log(
      levenshteinDistance('abc', 'yabd')
    );
  }
  {
    function levenshteinDistance(str1: string, str2: string): number {
      const arr = new Array(str2.length + 1).fill(0).map(
        () => new Array(str1.length + 1).fill(0)
      );

      for (let i = 0; i < arr.length; i++) arr[i][0] = i;
      for (let j = 0; j < arr[0].length; j++) arr[0][j] = j;

      for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[i].length; j++) {
          if (str2[i - 1] === str1[j - 1]) {
            arr[i][j] = arr[i - 1][j - 1];
          } else {
            arr[i][j] = 1 + Math.min(
              arr[i - 1][j],
              arr[i][j - 1],
              arr[i - 1][j - 1]
            );
          }
        }
      }

      return arr[str2.length][str1.length];
    }
  }
  {
    function levenshteinDistance(str1: string, str2: string): number {
      const matrix = new Array(str2.length + 1).fill(1).map(
        (_, i) => new Array(str1.length + 1).fill(i)
      );

      for (let j = 1; j < matrix[0].length; j++) matrix[0][j] = j;

      for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
          if (str2[i - 1] === str1[j - 1]) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = 1 + Math.min(
              matrix[i - 1][j],
              matrix[i][j - 1],
              matrix[i - 1][j - 1]
            );
          }
        }
      }

      return matrix[str2.length][str1.length];
    }


  }
  {
    // O(nm) time | O(nm) space
    // n = length of str1
    // m = length of str2
    function levenshteinDistance(str1: string, str2: string): number {
      const array = new Array(str2.length + 1).fill(1).map(
        (_, idx) => new Array(str1.length + 1).fill(idx)
      );

      for (let j = 1; j < array[0].length; j++) array[0][j] = j;

      for (let i = 1; i < array.length; i++) {
        for (let j = 1; j < array[i].length; j++) {
          if (str2[i - 1] === str1[j - 1]) {
            array[i][j] = array[i - 1][j - 1];
          } else {
            array[i][j] = 1 + Math.min(
              array[i - 1][j],
              array[i][j - 1],
              array[i - 1][j - 1]
            );
          }
        }
      }

      return array[str2.length][str1.length];
    }
  }
  {
    // O(mn) time | O(mn) space
    // m = length of str1
    // n = length of str2
    function levenshteinDistance(str1: string, str2: string): number {
      const matrix = new Array(str2.length + 1).fill(1).map(
        (_, idx) => new Array(str1.length + 1).fill(idx)
      );
      for (let j = 0; j < matrix[0].length; j++) {
        matrix[0][j] = j;
      }

      for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
          if (str2[row - 1] === str1[col - 1]) {
            matrix[row][col] = matrix[row - 1][col - 1];
          } else {
            matrix[row][col] = 1 + Math.min(
              matrix[row - 1][col],
              matrix[row][col - 1],
              matrix[row - 1][col - 1]
            );
          }
        }
      }

      return matrix[str2.length][str1.length];
    }
  }
}

export const ___ = '___';