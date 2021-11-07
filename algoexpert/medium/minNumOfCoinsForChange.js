/**
 * Time: O(nd)
 * Space: O(n)
 * Where n = target amount, d = length of denominations array (denom.length)
 */
function minNumOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (let denom of denoms) {
    for (let i = 1; i < numOfCoins.length; i++) {
      if (denom <= i) {
        numOfCoins[i] = Math.min(numOfCoins[i], 1 + numOfCoins[i - denom]);
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
