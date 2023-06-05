/**
 * Time: O(n*m) = O(nm)
 * Space: O(n)  (Size of numOfCoins)
 * 
 * @param n number (targetAmount)
 * @param denoms (m) (array of coin values for making change)
 * @returns number
 */
export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const numOfCoins: number[] = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(numOfCoins[amount], 1 + numOfCoins[amount - denom]);
      }
    }
  }

  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}