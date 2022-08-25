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
}

export const __ = '__';