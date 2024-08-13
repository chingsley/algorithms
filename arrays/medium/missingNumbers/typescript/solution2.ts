// O(n) time | O(1) space
export function missingNumbers(nums: number[]) {
  let [sumToN, sumNums] = [0, 0];
  for (let i = 1; i <= nums.length + 2; i++) sumToN += i;
  for (let num of nums) sumNums += num;
  const diff = sumToN - sumNums;
  const avg = Math.floor(diff / 2);

  let [leftHalfSum, rightHalfSum] = [0, 0];
  for (let num of nums) {
    if (num <= avg) {
      leftHalfSum += num;
    } else {
      rightHalfSum += num;
    }
  }

  let [actualLeftHalfSum, actualRightHalfSum] = [0, 0];
  for (let i = 1; i <= nums.length + 2; i++) {
    if (i <= avg) {
      actualLeftHalfSum += i;
    } else {
      actualRightHalfSum += i;
    }
  }

  return [actualLeftHalfSum - leftHalfSum, actualRightHalfSum - rightHalfSum];
}
