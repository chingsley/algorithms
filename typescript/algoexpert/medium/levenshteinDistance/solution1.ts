/**
 * Time: O(n * m)
 * Space: O(m * n)
 * 
 * @param str1 n
 * @param str2 m
 * @returns number
 */
export function levenshteinDistance(str1: string, str2: string): number {
  const twoDArr: number[][] = [];

  for (let i = 0; i < str2.length + 1; i++) {
    const row: number[] = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    twoDArr.push(row);
  }

  for (let row = 1; row < twoDArr.length; row++) {
    for (let col = 1; col < twoDArr[row].length; col++) {
      if (str2[row - 1] === str1[col - 1]) {
        twoDArr[row][col] = twoDArr[row - 1][col - 1];
      } else {
        twoDArr[row][col] = Math.min(twoDArr[row][col - 1], twoDArr[row - 1][col], twoDArr[row - 1][col - 1]) + 1;
      }

    }
  }

  print2DArr(twoDArr);
  return twoDArr[str2.length][str1.length];
}


console.log(
  levenshteinDistance('replace', 'delete')
);


function print2DArr(arr: number[][]) {
  let str = '| ';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      str += arr[i][j] + ' | ';
    }
    str += '\n| ';
  }
  const str2 = str.replace(/\n\| $/, '');
  console.log(str2);
}