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
}

export const __ = '__';