/**
 * Time: O(nd) where: n = target amount, d = length of array denoms
 * Space: O(n) where n = target amount b/c ways array has length n+1
 * @param {Integer} n Target amount
 * @param {array} denoms Array of coin denominations
 * @returns Integer: number of ways to make change for target amount using the available coin denominations
 */
function numberOfWaysToMakeChange(n, denoms) {
  // NOTE: n = targetAmount
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let denom of denoms) {
    for (let i = 1; i < ways.length; i++) {
      if (denom <= i) {
        ways[i] = ways[i] + ways[i - denom];
      }
    }
  }

  return ways[n];
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;

{
  function numberOfWaysToMakeChange(n, denoms) {
    // NOTE: n = targetAmount
    const ways = new Array(n + 1).fill(0);
    ways[0] = 1;

    for (let denom of denoms) {
      for (let amount = 1; amount < ways.length; amount++) {
        // where amount represents each index (i) in ways
        if (denom <= amount) {
          ways[amount] = ways[amount] + ways[amount - denom];
        }
      }
    }

    return ways[n];
  }

  // Do not edit the line below.
  exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
}
