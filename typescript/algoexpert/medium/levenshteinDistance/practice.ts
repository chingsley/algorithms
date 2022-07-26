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
}

export const ___ = '___';