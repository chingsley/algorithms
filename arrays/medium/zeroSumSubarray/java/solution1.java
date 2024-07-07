import java.util.*;

class Program {
  // O(n) time | O(n) space
  public boolean zeroSumSubarray(int[] nums) {
    HashSet<Integer> sums = new HashSet<Integer>();
    sums.add(0);
    int currSum = 0;
    for (int num : nums) {
      currSum += num;
      if (sums.contains(currSum)) {
        return true;
      }
      sums.add(currSum);
    }
    
    return false;
  }
}
