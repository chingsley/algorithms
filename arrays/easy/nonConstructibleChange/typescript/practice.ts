{
  {
    // O(n log (n)) time | O(1) space
    function nonConstructibleChange(coins: number[]) {
      coins.sort((a, b) => a - b);
      let currChange = 0;
      for (let coin of coins) {
        if (coin > currChange + 1) return currChange + 1;
        currChange += coin;
      }

      return currChange + 1;
    }
  }
}

export const ___ = '___';