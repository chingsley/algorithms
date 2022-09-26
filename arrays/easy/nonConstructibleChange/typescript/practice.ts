{
  {
    // O(nlog(n)) time | O(1) space
    function nonConstructibleChange(coins: number[]) {
      coins.sort((a, b) => a - b);
      let changeCreated: number = 0;

      for (let coin of coins) {
        const changeToBeCreated = changeCreated + 1;
        if (coin > changeToBeCreated) {
          return changeToBeCreated;
        } else {
          changeCreated += coin;
        }
      }

      return changeCreated + 1;
    }


  }
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
  {
    // O(nlog(n)) time | O(1) space
    function nonConstructibleChange(coins: number[]) {
      coins.sort((a, b) => a - b);
      let currentChange = 0;
      for (let coin of coins) {
        if (coin > currentChange + 1) return currentChange + 1;
        currentChange = currentChange + coin;
      }

      return currentChange + 1;
    }

  }
}

export const ___ = '___';