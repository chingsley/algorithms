import java.util.*;

class Program {
  // O(n) time | O(n) space
  public static int[] largestRange(int[] array) {
    Map<Integer, Boolean> dict = new HashMap<Integer, Boolean>();
    int[] maxRange = new int[2];
    int maxLen = 0;

    for (int num : array) {
      dict.put(num, false);
    }
    for (int num : array) {
      if (dict.get(num) == true) {
        continue;
      }
      // printDict(dict);
      int[] result = getRange(num, dict);
      // printDict(dict);
      int[] currRange = new int[2];
      currRange = new int[] {result[0], result[1]};
      int currLen = result[2];
      if (currLen > maxLen) {
        maxLen = currLen;
        maxRange = new int[] {currRange[0], currRange[1]};
      }
    }
    
    return maxRange;
  }

  public static int[] getRange(int num, Map<Integer, Boolean> dict) {
    int i = num, j = num;
    while (dict.containsKey(i)) {
      dict.put(i, true);
      i--;
    }
    while (dict.containsKey(j)) {
      dict.put(j, true);
      j++;
    }

    return new int[] {i + 1, j - 1, j - i - 1};
  }

  public static void printDict(Map<Integer, Boolean> dict) {
    dict.forEach((key, value) -> System.out.println(key + " " + value));
  }
}
