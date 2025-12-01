import java.util.*;

class Program {
  // O(n) time | O(1) space
  public int[] longestSubarrayWithSum(int[] array, int targetSum) {
    int i = 0, j = 0;
    int[] result = new int[] {};
    int currSum = array[0], change = 0;
    while(j < array.length) {
      currSum += change;
      if (currSum == targetSum) {
        if (result.length == 0 || (j - i) > (result[1] - result[0])) {
          result = new int[] {i, j};
        }
      } 

      if (currSum <= targetSum) {
        j += 1;
        if (j < array.length) change = array[j];
      } else {
        change = -array[i];
        i += 1;
      }

      if (i > j) {
        j = i;
        if (i < array.length) currSum = array[i];
        change = 0;
      }

    }
    
    return result;
  }
}
