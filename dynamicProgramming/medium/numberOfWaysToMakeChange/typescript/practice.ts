{
  {
    /**
     *  Time: O(n * d) time;
     *  Space: O(n) space
     * @param n 
     * @param denoms d
     * @returns 
     */
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const coins = new Array(n + 1).fill(0);
      coins[0] = 1;

      for (let coin of denoms) {
        for (let i = 0; i < coins.length; i++) {
          const amt = i;
          if (amt < coin) continue;
          coins[amt] = coins[amt] + coins[amt - coin];
        }
      }

      return coins[n];
    }
  }
  {
    // O(n * d) time | O(n) space
    // d = length of denoms, n = target amount (first argument)
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const coins = new Array(n + 1).fill(0);
      coins[0] = 1;

      for (let coin of denoms) {
        for (let i = coin; i < coins.length; i++) {
          const amount = i;
          coins[amount] = coins[amount] + coins[amount - coin];
        }
      }

      return coins[n];
    }
  }
  {
    // O(n * d) time | o(n) space
    // d = length of denoms
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const coins = new Array(n + 1).fill(0);
      coins[0] = 1;
      for (let coin of denoms) {
        for (let amount = coin; amount < coins.length; amount++) {
          coins[amount] += coins[amount - coin];
        }
      }
      return coins[n];
    }
  }
  {
    // O(nd) time | O(n) space
    // d = length of denoms
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const coins = new Array(n + 1).fill(0);
      coins[0] = 1;

      for (let coin of denoms) {
        for (let amount = coin; amount < coins.length; amount++) {
          coins[amount] += coins[amount - coin];
        }
      }

      return coins[n];
    }
  }
}

export const ___ = '___';