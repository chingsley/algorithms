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
  {// RECURSION
    // O(e + v) time | O(v) space
    // e = no. of edges, v = no. of vertices
    function cycleInGraph(edges: number[][]) {
      for (let i = 0; i < edges.length; i++) {
        const visited: Set<number> = new Set();
        const hasCycle = checkCycle(i, i, edges, visited);
        if (hasCycle) return true;
      }

      return false;
    }

    function checkCycle(i: number, src: number, edges: number[][], visited: Set<number>): boolean {
      visited.add(i);

      for (let child of edges[i]) {
        if (child === src) return true;
        if (visited.has(child)) continue;

        const hasCycle = checkCycle(child, src, edges, visited);
        if (hasCycle) return true;
      }

      return false;
    }

  }
  {// RECURSION
    // O(v + e) time | O(v) space
    function cycleInGraph(edges: number[][]) {
      for (let i = 0; i < edges.length; i++) {
        const visited: Set<number> = new Set();
        const hasCycle = checkCycle(i, i, edges, visited);
        if (hasCycle === true) return true;
      }

      return false;
    }

    function checkCycle(node: number, src: number, edges: number[][], visited: Set<number>) {
      visited.add(node);

      for (let child of edges[node]) {
        if (child === src) return true;
        if (visited.has(child)) continue;

        const hasCycle = checkCycle(child, src, edges, visited);
        if (hasCycle === true) return true;
      }

      return false;
    }
  }
  {// ITERATION
    function cycleInGraph(edges: number[][]) {
      for (let i = 0; i < edges.length; i++) {
        const visited: Set<number> = new Set();
        const hasCycle = checkCycle(i, edges, visited);
        if (hasCycle === true) return true;
      }

      return false;
    }

    function checkCycle(node: number, edges: number[][], visited: Set<number>) {
      const stack: number[] = [node];

      while (stack.length > 0) {
        const current = stack.pop()!;
        visited.add(current);

        for (let child of edges[current]) {
          if (child === node) return true;
          if (visited.has(child)) continue;

          stack.push(child);
        }
      }

      return false;
    }
  }
  {
    // O(n^2) time | O(n) space;
    // n = length of edges array;
    function cycleInGraph(edges: number[][]) {
      for (let node = 0; node < edges.length; node += 1) {
        const visited: Set<number> = new Set();
        if (edges[node][0] === undefined) continue;
        const hasCycle = checkCycle(edges, edges[node][0], node, visited);
        if (hasCycle) return true;
      }

      return false;
    }

    function checkCycle(edges: number[][], src: number, dst: number, visited: Set<number>): boolean {
      if (src === dst) return true;
      if (visited.has(src)) return false;
      visited.add(src);
      for (let nd of edges[src]) {
        if (checkCycle(edges, nd, dst, visited) === true) {
          return true;
        }
      }

      return false;
    }
  }
  {
    function cycleInGraph(edges: number[][]) {
      for (let node in edges) {// 'in' in array loops through indices. So node is index
        const cycleFound = checkCycle(edges, Number(node));
        if (cycleFound) return true;
      }

      return false;
    }

    function checkCycle(edges: number[][], src: number): boolean {
      const visited: Set<number> = new Set();
      const stack = [...edges[src]];
      while (stack.length > 0) {
        const current = stack.pop()!;
        if (current === src) return true;

        if (visited.has(current)) continue;
        visited.add(current);
        stack.push(...edges[current]);
      }

      return false;
    }
  }
}

export const __ = '___';