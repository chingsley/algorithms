import java.util.*;

class Program {
  // Average: O(n^2) time | O(n^2) space
  // Worst: O(n^3) time | O(n^2) space
  public static List<Integer[]> fourNumberSum(int[] array, int targetSum) {
    Map<Integer, List<Integer[]>> dict = new HashMap<>();
    List<Integer[]> quad = new ArrayList<Integer[]>();
    for (int i = 0; i < array.length - 1; i++) {
      int num1 = array[i];
      for (int j = i + 1; j < array.length; j++) {
        int num2 = array[j];
        int diff = targetSum - (num1 + num2);
        if (dict.containsKey(diff)) {
          for (Integer[] pair: dict.get(diff)) {
            Integer[] newQuad = {pair[0], pair[1], num1, num2};
              quad.add(newQuad);
          }
        }
      }

      for (int k = 0; k < i; k++) {
        int num0 = array[k];
        int sum = num0 + num1;
        if (!dict.containsKey(sum)) {
          dict.put(sum, new ArrayList<Integer[]>());
        }
        Integer[] pair = {num0, num1};
        dict.get(sum).add(pair);
      }
    }
    return quad;
  }
}
