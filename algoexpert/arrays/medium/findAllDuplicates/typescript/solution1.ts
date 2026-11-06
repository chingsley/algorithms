export function findDuplicates(nums: number[]): number[] {
  const dups: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) dups.push(Math.abs(nums[i]));
    nums[idx] *= -1;
  }

  return dups;
};