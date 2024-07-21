import java.util.*;

class Program {
  // O(nlog(n)) time | O(n) space
  public int[] sweetAndSavory(int[] dishes, int target) {
    ArrayList<Integer> sweet = new ArrayList<Integer>();
    ArrayList<Integer> savory = new ArrayList<Integer>();

    for (int dish: dishes) {
      if (dish < 0) {
        sweet.add(dish);
      } else {
        savory.add(dish);
      }
    }
    sweet.sort(Comparator.comparingInt(Math::abs));
    savory.sort(Comparator.naturalOrder());

    int[] bestPair = new int[2];
    int bestDiff = Integer.MAX_VALUE;
    int swIdx = 0, svIdx = 0;
    while(swIdx < sweet.size() && svIdx < savory.size()) {
      int sw = sweet.get(swIdx), sv = savory.get(svIdx);
      int currSum = sw + sv;
      if (currSum <= target) {
        int currDiff = target - currSum;
        if (currDiff < bestDiff) {
          bestDiff = currDiff;
          bestPair[0] = sw;
          bestPair[1] = sv;
        }
        svIdx++;
      } else {
        swIdx++;
      }
    }
    
    return bestPair;
  }
}
