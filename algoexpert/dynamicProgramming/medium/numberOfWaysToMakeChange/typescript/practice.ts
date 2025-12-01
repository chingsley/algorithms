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
      const combinations = new Array(n + 1).fill(0);
      combinations[0] = 1;

      for (let coin of denoms) {
        for (let i = 0; i < combinations.length; i++) {
          const amt = i;
          if (amt < coin) continue;
          combinations[amt] = combinations[amt] + combinations[amt - coin];
        }
      }

      return combinations[n];
    }
  }
  {
    // O(n * d) time | O(n) space
    // d = length of denoms, n = target amount (first argument)
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const combinations = new Array(n + 1).fill(0);
      combinations[0] = 1;

      for (let coin of denoms) {
        for (let i = coin; i < combinations.length; i++) {
          const amount = i;
          combinations[amount] = combinations[amount] + combinations[amount - coin];
        }
      }

      return combinations[n];
    }
  }
  {
    // O(n * d) time | o(n) space
    // d = length of denoms
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const combinations = new Array(n + 1).fill(0);
      combinations[0] = 1;
      for (let coin of denoms) {
        for (let amount = coin; amount < combinations.length; amount++) {
          combinations[amount] += combinations[amount - coin];
        }
      }
      return combinations[n];
    }
  }
  {
    // O(nd) time | O(n) space
    // d = length of denoms
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const combinations = new Array(n + 1).fill(0);
      combinations[0] = 1;

      for (let coin of denoms) {
        for (let amount = coin; amount < combinations.length; amount++) {
          combinations[amount] += combinations[amount - coin];
        }
      }

      return combinations[n];
    }
  }
  {
    type Amount = number;
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const waysOfAmounts = new Array(n + 1).fill(0);
      waysOfAmounts[0] = 1;
      for (let coin of denoms) {
        for (let i: Amount = 0; i < waysOfAmounts.length; i++) {
          if (coin > i) continue;
          waysOfAmounts[i] += waysOfAmounts[i - coin];
        }
        // console.log(waysOfAmounts.join(','))
      }

      return waysOfAmounts[n];
    }
  }
  {
    // O(m * n) time | O(n) space (m = length of denoms array)
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const combns = new Array(n + 1).fill(0);
      combns[0] = 1;

      for (let coin of denoms) {
        for (let i = 0; i < combns.length; i++) {
          const amount = i;
          if (coin > amount) continue;
          combns[amount] += combns[amount - coin];
        }
      }

      return combns[n];
    }
  }
  {
    // O(n*d) time | O(n) space ( d = length of denoms)
    function numberOfWaysToMakeChange(n: number, denoms: number[]) {
      const arr: number[] = new Array(n + 1).fill(0);
      arr[0] = 1;
      for (let coin of denoms) {
        for (let i = 1; i < arr.length; i++) {
          if (coin > i) continue;
          arr[i] += arr[i - coin];
        }
      }

      return arr[n];
    }

  }
}

export const ___ = '___';