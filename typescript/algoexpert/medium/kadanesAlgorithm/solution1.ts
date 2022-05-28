/**
 * Time: O(n) [n = length of array]
 * Space: O(1)
 * 
 * @param array n
 * @returns number
 */
export function kadanesAlgorithm(array: number[]) {
  let maxSum = array[0];
  let maxAtIdx = array[0];
  for (let i = 1; i < array.length; i++) {
    maxAtIdx = Math.max(maxAtIdx + array[i], array[i]);
    maxSum = Math.max(maxAtIdx, maxSum);
  }
  return maxSum;
}


const ts1 = {
  array: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4],
};
const ts2 = {
  array: [3, 5, -9, 1],
};
console.log(kadanesAlgorithm(ts1.array));
console.log(kadanesAlgorithm(ts2.array));