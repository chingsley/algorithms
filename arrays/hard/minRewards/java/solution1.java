import java.util.*;
import java.util.stream.*;

class Program {
  // O(n) time | O(n) space
  public static int minRewards(int[] scores) {
    int[] minRewards = new int[scores.length]; // each element of the array is initialised to 0
    List<Integer> localMinIdxs = new ArrayList<Integer>();
    for (int i = 0; i < scores.length; i++) {
      int curr = scores[i], left = Integer.MAX_VALUE, right = Integer.MAX_VALUE;
      if (i > 0) left = scores[i - 1];
      if (i < scores.length - 1) right = scores[i + 1];
      if (curr < left && curr < right) localMinIdxs.add(i);
    }

    for (Integer idx : localMinIdxs) {
      minRewards[idx] = 1;
      for (int j = idx - 1; j >= 0; j--) {
        if (scores[j] < scores[j + 1]) break;
        minRewards[j] = Math.max(minRewards[j], minRewards[j + 1] + 1);
      }
      for (int j = idx + 1; j < scores.length; j++) {
        if (scores[j] < scores[j - 1]) break;
        minRewards[j] = Math.max(minRewards[j], minRewards[j - 1] + 1);
      }
    }
    
    // printIntArr(minRewards);
    return IntStream.of(minRewards).sum();
  }

  public static void printIntArr(int[] arr) {
    System.out.print("[");
    for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + ", ");
    System.out.print("]");
  }
  
}
