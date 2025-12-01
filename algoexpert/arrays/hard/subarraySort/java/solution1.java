import java.util.*;

class Program {
  public static int[] subarraySort(int[] array) {
    // O(n) time | O(1) space
    int minUnsorted = Integer.MAX_VALUE, maxUnsorted = Integer.MIN_VALUE;
    for (int i = 0; i < array.length; i++) {
      int v = array[i];
      int prev = i == 0 ? Integer.MIN_VALUE : array[i - 1];
      int next = i == array.length - 1 ? Integer.MAX_VALUE : array[i + 1];
      if (!(prev <= v && v <= next)) { // if v < prev || v > next (v = array[i])
        minUnsorted = v < minUnsorted ? v : minUnsorted;
        maxUnsorted = v > maxUnsorted ? v : maxUnsorted;
      }
    }

    int[] result = {-1, -1};
    if (minUnsorted == Integer.MAX_VALUE) {
      return result;
    }

    for (int i = 0; i < array.length; i++) {
      int v = array[i];
      int prev = i == 0 ? Integer.MIN_VALUE : array[i - 1];
      if (minUnsorted >= prev && minUnsorted < v) {
        result[0] = i;
        break;
      }
    }
    for (int i = array.length - 1; i >= 0; i--) {
      int v = array[i];
      int next = i == array.length - 1 ? Integer.MAX_VALUE : array[i + 1];
      if (maxUnsorted <= next && maxUnsorted > v) {
        result[1] = i;
        break;
      }
    }
    
    return result;
  }
}
