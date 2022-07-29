{
  {
    function cycleInGraph(edges: number[][]) {
      for (let edge = 0; edge < edges.length; edge++) {
        const stack: number[] = [edge];
        const visited: Set<number> = new Set();

        while (stack.length > 0) {
          const current = stack.pop()!;
          visited.add(current);

          for (let num of edges[current]) {
            if (num === edge) return true;
            if (!visited.has(num)) { // we check visited here, see next solution for another place we can have this check
              stack.push(num);
            }
          }
        }

      }

      return false;
    }

  }
  {
    /**
   * Time: O(e + v) time
   * Space: O(v) space
   * e = no. of edges
   * v = no. of vertices
   * 
   * In times of the edgeList
   * Time = O(n * m)
   * Space = O(n)
   * n = length of the edges array
   * m = length of the longest child array in the edges list
   * 
   * @param edges l
   * @returns boolean
   */
    function cycleInGraph(edges: number[][]) {
      for (let i = 0; i < edges.length; i++) {

        const visited: Set<number> = new Set();
        const stack: number[] = [i];
        while (stack.length > 0) {
          const current = stack.pop()!;
          if (visited.has(current)) continue; // the visited check
          visited.add(current);

          for (let vertex of edges[current]) {
            if (vertex === i) return true;
            stack.push(vertex);
          }
        }
      }

      return false;
    }

  }
  {
    /**
     * Time: O(e + v) time
     * Space: O(v) space
     * e = no. of edges
     * v = no. of vertices
     * 
     * In times of the edgeList
     * Time = O(n * m)
     * Space = O(n)
     * n = length of the edges array
     * m = length of the longest child array in the edges list
     * 
     * @param edges l
     * @returns boolean
     */
    function cycleInGraph(edges: number[][]) {
      for (let i = 0; i < edges.length; i++) {

        const visited: Set<number> = new Set();
        const stack: number[] = [...edges[i]];
        while (stack.length > 0) {
          const current = stack.pop()!;
          if (current === i) return true;

          if (visited.has(current)) continue;
          visited.add(current);

          for (let vertex of edges[current]) {
            if (vertex === i) return true;
            stack.push(vertex);
          }

        }
      }

      return false;
    }

  }
  { // RECURSIVE SOLUTION
    function cycleInGraph(edges: number[][]) {
      for (let v = 0; v < edges.length; v++) {
        const visited: Set<number> = new Set();
        const hasCycle = checkCycle(v, v, edges, visited);
        if (hasCycle) return true;
      }

      return false;
    }

    function checkCycle(v: number, current: number, edges: number[][], visited: Set<number>): boolean {
      visited.add(current);

      for (let child of edges[current]) {
        if (child === v) return true;
        if (visited.has(child)) continue;
        if (checkCycle(v, child, edges, visited) === true) return true;
      }

      return false;
    }

    const edgeList = [
      [],
      [0, 3],
      [0],
      [1, 2]
    ];
    console.log(
      cycleInGraph(edgeList)
    ); // expect true // but the soluton is buggy (correct answer is true)

  }
}

export const __ = '___';