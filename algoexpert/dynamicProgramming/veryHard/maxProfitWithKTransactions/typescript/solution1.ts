// O(nk) time | O(k) space
export function maxProfitWithKTransactions(prices: number[], k: number) {
  const profits = new Array(2 * k).fill(0).map(
    (_, idx) => idx % 2 === 0 ? -Infinity : 0
  );

  for (let price of prices) {
    for (let j = 0; j < profits.length; j++) {
      if (j === 0) {
        profits[j] = Math.max(profits[j], -1 * price);
      } else if (j % 2 === 0) {
        profits[j] = Math.max(profits[j], profits[j - 1] - price);
      } else {
        profits[j] = Math.max(profits[j], profits[j - 1] + price);
      }
    }
  }


  return profits[profits.length - 1];
}