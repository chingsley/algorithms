/**
 * Time: O(n*m) = O(nm)
 * Space: O(n)  (Size of numOfCoins)
 * 
 * @param n number (targetAmount)
 * @param denoms (m) (array of coin values for making change)
 * @returns number
 */
function minCoinsForChange(n: number, denoms: number[]): number[] {
  const arr: null | number[][] = new Array(n + 1).fill(null);
  arr[0] = [];

  for (let amt = 1; amt < arr.length; amt++) {
    for (let coin of denoms) {
      if (coin > amt) continue;
      const rem = amt - coin;
      if (arr[rem] === null) continue;
      if (arr[amt] === null || arr[rem].length + 1 < arr[amt].length) {
        arr[amt] = [...arr[rem], coin];
      }
    }
  }

  // console.log(arr);
  return arr[n] ? arr[n] : [];
}

console.log(minCoinsForChange(8, [2, 3, 5])); // [5, 3]
console.log(minCoinsForChange(7, [1, 5, 10])); // [5, 1, 1]
console.log(minCoinsForChange(7, [2, 4])); // []
console.log(minCoinsForChange(10000, [7, 14])); // []
