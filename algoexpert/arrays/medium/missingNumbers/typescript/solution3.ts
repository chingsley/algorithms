// O(n) time | O(1) space
export function missingNumbers(nums: number[]) {
  nums.sort((a, b) => a - b);
  let count = 1;
  let i = 0;
  const result: number[] = [];
  while (count <= nums.length + 2) {
    if (i < nums.length && nums[i] === count) {
      i++;
    } else {
      result.push(count);
    }
    count += 1;
  }

  return result;
}