export function nonConstructibleChange(coins: number[]) {
  coins.sort((a, b) => a - b);
  let currentConstructedCoin = 0;
  for (let coin of coins) {
    if (coin > currentConstructedCoin + 1) {
      return currentConstructedCoin + 1;
    }
    currentConstructedCoin += coin;
  }
  return currentConstructedCoin + 1;
}



/**
 * SEE SOLUTION 2 IN solution2.ts FOR A CLEARER SOLUTION
 */