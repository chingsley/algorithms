function twoSum(nums: number[], target: number): number[] {
  const dict: { [key: number]: number; } = {};
  for (let i = 0; i < nums.length; i++) {
    const compl = target - nums[i];
    if (compl in dict) return [dict[compl], i];
    dict[nums[i]] = i;
  }

  return [];
};