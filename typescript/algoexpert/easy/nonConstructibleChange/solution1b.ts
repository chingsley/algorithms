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



// // O(nlog(n)) time | O(1) space
// export function nonConstructibleChange(coins: number[]) {
//   coins.sort((a, b) => a - b);
//   let currChange: number = 0;
//   for(let coin of coins) {
//     if(coin > currChange + 1) return currChange + 1;
//     currChange += coin;
//   }
//   return currChange + 1;
// }
