function missingTwo(nums: number[]): number[] {
  const totalSum = sumRange(1, nums.length + 2);
  const arrSum = nums.reduce((acc, num) => acc + num, 0);
  const missingSum = totalSum - arrSum;
  const mid = Math.floor(missingSum / 2);

  const totalLeftSum = sumRange(1, mid);
  const totalRightSum = sumRange(mid + 1, nums.length + 2);
  let [leftArrSum, rightArrSum] = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= mid) {
      leftArrSum += nums[i];
    } else {
      rightArrSum += nums[i];
    }
  }

  return [totalLeftSum - leftArrSum, totalRightSum - rightArrSum];
};

function sumRange(start: number, end: number): number {
  let sum = 0;
  for (let i = start; i <= end; i++) sum += i;
  return sum;
}
