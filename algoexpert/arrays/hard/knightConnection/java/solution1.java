import java.util.*;
import java.util.stream.*;

class Program {
  public int knightConnection(int[] knightA, int[] knightB) {
    Set<String> visited = new HashSet<String>();
    Queue<int[]> queue = new LinkedList<int[]>();
    queue.add(new int[] {knightA[0], knightA[1], 0});
    while(queue.size() > 0) {
      int[] currMove = queue.remove();
      
      int[] currPos = new int[2];
      currPos = new int[] {currMove[0], currMove[1]};
      int currDist = currMove[2];
      String key = IntStream.of(currPos)
                        .mapToObj(Integer::toString)
                        .collect(Collectors.joining(","));
      if (visited.contains(key)) continue;
      visited.add(key);

      if (currPos[0] == knightB[0] && currPos[1] == knightB[1]) {
        return (int) Math.ceil((double) currDist / 2);
      }

      queue.add(new int[] {currPos[0] + 2, currPos[1] + 1, currDist + 1});
      queue.add(new int[] {currPos[0] + 2, currPos[1] - 1, currDist + 1});
      queue.add(new int[] {currPos[0] - 2, currPos[1] + 1, currDist + 1});
      queue.add(new int[] {currPos[0] - 2, currPos[1] - 1, currDist + 1});
      queue.add(new int[] {currPos[0] + 1, currPos[1] + 2, currDist + 1});
      queue.add(new int[] {currPos[0] - 1, currPos[1] + 2, currDist + 1});
      queue.add(new int[] {currPos[0] + 1, currPos[1] - 2, currDist + 1});
      queue.add(new int[] {currPos[0] - 1, currPos[1] - 2, currDist + 1});
      
    }
    
    return -1;
  }
}
