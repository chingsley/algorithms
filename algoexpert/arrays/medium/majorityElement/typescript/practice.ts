// O(n) time | O(1) space
function majorityElement(nums: number[]): number {
  let [count, majNum] = [0, nums[0]];
  for (let num of nums) {
    if (count === 0) majNum = num;
    count = majNum === num ? count + 1 : count - 1;
  }

  return majNum;
};