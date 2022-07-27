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
}

export const ___ = '___';