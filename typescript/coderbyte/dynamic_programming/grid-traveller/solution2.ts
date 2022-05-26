/**
 * Method 2: Tabulation
 * Time: O(mn)
 * Space: O(mn)
 *
 * @param m number
 * @param n number
 * @returns number
 */
export function gridTraveller(m: number, n: number): number {
  const rowSize = m + 1;
  const colSize = n + 1;
  const table: number[][] = Array(rowSize).fill('')
    .map(() => Array(colSize).fill(0));

  table[1][1] = 1;
  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      const current = table[i][j];
      if (i + 1 < rowSize) table[i + 1][j] += current;
      if (j + 1 < colSize) table[i][j + 1] += current;
    }
  }

  console.log(table);
  return table[m][n];
}


console.log(
  gridTraveller(3, 3)
);