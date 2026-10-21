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
    // O(nlog(n)) time | O(1) space. e.g [1, 2, 5] -> 4 is the smallest amount of change that cannot be created.
    function nonConstructibleChange(coins: number[]) {
      coins.sort((a, b) => a - b); // sort the coins in ascending order
      let currentChange = 0; // the largest number N such that you can make every whole amount from 0 up to N. Initialized to 0.
      for (let coin of coins) {
        if (coin > currentChange + 1) return currentChange + 1; // if the coin is greater than the current change + 1, then the current change + 1 is the smallest amount of change that cannot be created
        currentChange = currentChange + coin; // add the coin to the current change
      }

      return currentChange + 1; // return the smallest amount of change that cannot be created
    }
  }
}

export const ___ = '___';