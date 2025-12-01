
/**
 * Solution 2: Tabulation
 * Time: O(hw)
 * Space: O(hw)
 *
 * @param width number w
 * @param height number h
 * @returns number
 */
export function numberOfWaysToTraverseGraph(width: number, height: number): number {
  const table: number[][] = Array(height + 1).fill('')
    .map(() => Array(width + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i < height + 1; i++) {
    for (let j = 0; j < width + 1; j++) {
      const current = table[i][j];
      if (i + 1 < height + 1) table[i + 1][j] += current;
      if (j + 1 < width + 1) table[i][j + 1] += current;
    }
  }

  return table[height][width]; // NOTE: the order matters: table[width][height] will return undefined
}





/**
 * Solution 2: Tabulation (method II)
 * Time: O(hw)
 * Space: O(hw)
 *
 * @param width number w
 * @param height number h
 * @returns number
 */
export function numberOfWaysToTraverseGraph2(width: number, height: number): number {
  const table: number[][] = Array(height).fill('')
    .map(() => Array(width).fill(1));

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      const up = table[i - 1][j];
      const left = table[i][j - 1];
      table[i][j] = left + up;  // NOTE: the order matters: table[j][i] will be incorrect and cause the algorithm to fail same wiht the the two lines above
    }
  }

  return table[height - 1][width - 1]; // NOTE: the order matters: table[width-1][height-1] will return undefined
}



console.log(
  numberOfWaysToTraverseGraph(2, 3)
);
