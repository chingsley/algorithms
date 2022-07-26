/**
 * Time: O(n * d)
 * Space: O(n)
 * @param n number
 * @param denoms d number[]
 * @returns number
 */
export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  const array = new Array(n + 1).fill(0);
  array[0] = 1;

  for (let coin of denoms) {
    for (let i = 0; i < array.length; i++) {
      if (i < coin) continue;
      const amount = i;
      array[amount] += array[amount - coin];
    }
  }

  return array[n];
}