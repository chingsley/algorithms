import java.util.*;
import java.util.stream.*;

class Program {
  // O(n) time | O(n) space
  public static int minRewards(int[] scores) {
    int[] minRewards = new int[scores.length];
    Arrays.fill(minRewards, 1);
    for (int i = 1; i < scores.length; i++) {
      if (scores[i] < scores[i - 1]) continue;
      minRewards[i] = Math.max(minRewards[i], minRewards[i - 1] + 1);
    }
    for (int i = scores.length - 2; i >= 0; i--) {
      if (scores[i] < scores[i + 1]) continue;
      minRewards[i] = Math.max(minRewards[i], minRewards[i + 1] + 1);
    }
    // printIntArr(minRewards);
    return IntStream.of(minRewards).sum();
  }

  public static void printIntArr(int[] arr) {
    System.out.print("[ ");
    for(int num : arr) {
      System.out.print(num + ", ");
    }
    System.out.print("]");
  }
}
