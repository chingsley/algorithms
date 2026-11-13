// O(n) time | O(1) space
export function missingNumbers(nums: number[]) { // e.g given [1], full array should be [1, 2, 3]
  let [sumToN, sumNums] = [0, 0];
  for (let i = 1; i <= nums.length + 2; i++) sumToN += i; // 1 + 2 + 3 = 6
  for (let num of nums) sumNums += num; // sum([1]) = 1
  const diff = sumToN - sumNums; // 6 - 1 = 5
  const avg = Math.floor(diff / 2); // floor(5 / 2) = 2

  let [leftHalfSum, rightHalfSum] = [0, 0];
  for (let num of nums) {
    if (num <= avg) {
      leftHalfSum += num;
    } else {
      rightHalfSum += num;
    }
  } // leftHalfSum = 1, rightHalfSum = 0

  let [actualLeftHalfSum, actualRightHalfSum] = [0, 0];
  for (let i = 1; i <= nums.length + 2; i++) {
    if (i <= avg) {
      actualLeftHalfSum += i;
    } else {
      actualRightHalfSum += i;
    }
  } // actualLeftHalfSum = 3, actualRightHalfSum = 3

  return [actualLeftHalfSum - leftHalfSum, actualRightHalfSum - rightHalfSum];
}
