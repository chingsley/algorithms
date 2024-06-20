import java.util.*;

class Program {
  // O(v + e) time | O(v) spave
  // v = no. of vertices (no. of nodes), e = no. of edges
  public boolean twoColorable(int[][] edges) {
    int[] colors = new int[edges.length];
    colors[0] = 1;
    Stack<Integer> stack = new Stack<Integer>();
    stack.push(0);

    while(stack.size() > 0) {
      int vi = stack.pop();
      for (int v : edges[vi]) {
        if (colors[v] == colors[vi]) {
          return false;
        }
        if (colors[v] == 0) {
          colors[v] = colors[vi] == 1 ? 2 : 1;
          stack.push(v);
        }
      }
    }
    
    return true;
  }
}