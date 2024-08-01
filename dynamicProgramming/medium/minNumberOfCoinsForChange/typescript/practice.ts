// NOTE: SEE structy's BEST-SUM CHALLENGE
{
  {
    /**
   * Time: O(n*m) = O(nm)
   * Space: O(n)  (Size of numOfCoins)
   * 
   * @param n number (targetAmount)
   * @param denoms (m) (array of coin values for making change)
   * @returns number
   */
    function minNumberOfCoinsForChange(n: number, denoms: number[]) {
      const arr = new Array(n + 1).fill(Infinity);
      arr[0] = 0;
      for (let coin of denoms) {
        for (let i = 0; i < arr.length; i++) {
          if (i < coin) continue;
          const amount = i;
          arr[amount] = Math.min(arr[amount], 1 + arr[amount - coin]);
        }
      }

      return arr[n] < Infinity ? arr[n] : -1;
    }

  }
  {
    function minNumberOfCoinsForChange(n: number, denoms: number[]) {
      const array = new Array(n + 1).fill(Infinity);
      array[0] = 0;

      for (let denom of denoms) {
        for (let i = 1; i < array.length; i++) {
          if (i < denom) continue;
          array[i] = Math.min(
            array[i],
            1 + array[i - denom]
          );
        }
      }
      return array[n] < Infinity ? array[n] : -1;
    }
  }
  {
    function minNumberOfCoinsForChange(n: number, denoms: number[]) {
      const coins = new Array(n + 1).fill(Infinity);
      coins[0] = 0;

      for (let coin of denoms) {
        for (let i = coin; i < coins.length; i++) {
          const amount = i;
          coins[amount] = Math.min(coins[amount], 1 + coins[amount - coin]);
        }
      }

      return coins[n] < Infinity ? coins[n] : -1;
    }

  }
  {
    /**
     * Time: O(n * m)
     * space: O(n)
     * @param n number
     * @param denoms (m) number[]
     * @returns number
     */
    function minNumberOfCoinsForChange(n: number, denoms: number[]) {
      const coins = new Array(n + 1).fill(Infinity);
      coins[0] = 0;

      for (let coin of denoms) {
        for (let amount = coin; amount < coins.length; amount++) {
          coins[amount] = Math.min(
            coins[amount],
            1 + coins[amount - coin]
          );
        }
      }

      return coins[n] < Infinity ? coins[n] : -1;
    }
  }
  {
    // O(n*d) time | O(n) space
    // d = length of denoms
    function minNumberOfCoinsForChange(n: number, denoms: number[]) {
      const coins = new Array(n + 1).fill(Infinity);
      coins[0] = 0;
      for (let coin of denoms) {
        for (let amount = coin; amount < coins.length; amount++) {
          coins[amount] = Math.min(
            coins[amount],
            1 + coins[amount - coin]
          );
        }
      }

      return coins[n] < Infinity ? coins[n] : -1;
    }
  }
  {
    // O(nd) time | O(n) space
    // d = length of denoms array
    function minNumberOfCoinsForChange(n: number, denoms: number[]) {
      const coins = new Array(n + 1).fill(Infinity);
      coins[0] = 0;

      for (let coin of denoms) {
        for (let amount = coin; amount < coins.length; amount++) {
          coins[amount] = Math.min(
            coins[amount],
            1 + coins[amount - coin]
          );
        }
      }

      return coins[n] < Infinity ? coins[n] : -1;
    }
  }
  {
    interface Memo { [key: number]: number; };

    // O(nd) time | O(n) space (d = no. of values in denoms array)
    function minNumberOfCoinsForChange(n: number, denoms: number[], memo: Memo = {}) {
      if (n === 0) return 0;
      if (n < 0) return -1;
      if (n in memo) return memo[n];

      let result = Infinity;
      for (let denom of denoms) {
        const res = minNumberOfCoinsForChange(n - denom, denoms, memo);
        if (res < 0) continue;

        result = Math.min(result, res);
      }

      memo[n] = result < Infinity ? result + 1 : -1;
      return memo[n];
    }
  }
  {
    // O(nd) time | O(n) space (d = no. of values in denoms array)
    function minNumberOfCoinsForChange(n: number, denoms: number[]) {
      const minCoinsCount = countMinCoins(n, denoms);
      if (minCoinsCount === Infinity) return -1;

      return minCoinsCount;
    }

    interface Memo { [key: number]: number; };
    function countMinCoins(n: number, denoms: number[], memo: Memo = {}) {
      if (n === 0) return 0;
      if (n < 0) return Infinity;
      if (n in memo) return memo[n];

      let minCoinsCount = Infinity;
      for (let denom of denoms) {
        const minCoinsForDenom = countMinCoins(n - denom, denoms, memo);
        minCoinsCount = Math.min(minCoinsCount, minCoinsForDenom);
      }

      memo[n] = minCoinsCount + 1;
      return memo[n];
    }
  }
  {
    // O(nm) time | O(n) space (m = length of denoms)
    function minNumberOfCoinsForChange(n: number, denoms: number[]) {
      const array = new Array(n + 1).fill(Infinity);
      array[0] = 0;

      for (let i = 0; i < array.length; i++) {
        if (array[i] === Infinity) continue;
        for (let num of denoms) {
          if (i + num > array.length - 1) continue;
          array[i + num] = Math.min(array[i + num], array[i] + 1);
        }
      }

      return array[n] < Infinity ? array[n] : -1;
    }
  }
  {
    function minNumberOfCoinsForChange(n: number, denoms: number[]) {
      const minChangeForTargets: number[] = new Array(n + 1).fill(Infinity);
      minChangeForTargets[0] = 0;

      for (let coin of denoms) {
        for (let target = 0; target < minChangeForTargets.length; target++) {
          if (coin > target) continue;
          minChangeForTargets[target] = Math.min(
            minChangeForTargets[target],
            1 + minChangeForTargets[target - coin]
          );
        }
      }

      return minChangeForTargets[n] < Infinity ? minChangeForTargets[n] : -1;
    }
  }
  {// RECURSION
    function minNumberOfCoinsForChange(n: number, denoms: number[]): number {
      const minCoins = getMinCoins(n, denoms);
      return minCoins < Infinity ? minCoins : -1;
    }

    interface Memo { [key: number]: number; }
    function getMinCoins(n: number, denoms: number[], memo: Memo = { 0: 0 }): number {
      if (n in memo) return memo[n];

      let minCoins = Infinity;
      for (let coin of denoms) {
        if (coin > n) continue;
        const currMinCoins = 1 + getMinCoins(n - coin, denoms, memo);
        if (currMinCoins < minCoins) minCoins = currMinCoins;
      }

      memo[n] = minCoins;
      return memo[n];
    }
  }
  {
    {// RECURSION
      function minNumberOfCoinsForChange(n: number, denoms: number[]): number {
        const minCoins = getMinCoins(n, denoms);
        return minCoins < Infinity ? minCoins : -1;
      }

      interface Memo { [key: number]: number; }
      function getMinCoins(n: number, denoms: number[], memo: Memo = {}): number {
        if (n === 0) return 0;
        if (n in memo) return memo[n];

        let minCoins = Infinity;
        for (let coin of denoms) {
          if (coin > n) continue;
          const currMinCoins = 1 + getMinCoins(n - coin, denoms, memo);
          if (currMinCoins < minCoins) minCoins = currMinCoins;
        }

        memo[n] = minCoins;
        return memo[n];
      }
    }
  }
}

export const __ = '__';
