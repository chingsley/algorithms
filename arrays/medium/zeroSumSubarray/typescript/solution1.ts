// O(n) time | O(n) space
export function zeroSumSubarray(nums: number[]) {
  const sums = new Set([0]);
  let currSum = 0;
  for (let num of nums) {
    currSum += num;
    if (sums.has(currSum)) return true;
    sums.add(currSum);
  }

  return false;
}
