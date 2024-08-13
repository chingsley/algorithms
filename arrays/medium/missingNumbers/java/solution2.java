import java.util.*;

class Program {
  // O(n) time | O(1) space
  public int[] missingNumbers(int[] nums) {
    int sumToN = 0, sumNums = 0;

    for(int i = 1; i <= nums.length + 2; i++) {
      sumToN += i;
    }
    for(int num: nums) {
      sumNums += num;
    }
    int avg = (sumToN - sumNums) / 2;

    int leftHalfSum = 0, rightHalfSum = 0;
    for (int num: nums) {
      if (num <= avg) {
        leftHalfSum += num;
      } else {
        rightHalfSum += num;
      }
    }

    int actualLeftHalfSum = 0, actualRightHalfSum = 0;
    for (int i = 1; i <= nums.length + 2; i++) {
      if (i <= avg) {
        actualLeftHalfSum += i;
      } else {
        actualRightHalfSum += i;
      }
    }
    // System.out.printf("%d, %d, %d, %d", sumToN, sumNums, leftHalfSum, rightHalfSum);
    return new int[] {actualLeftHalfSum - leftHalfSum, actualRightHalfSum - rightHalfSum};
  }
}
