const edges = [
  [1, 3],
  [2, 3, 4],
  [0],
  [],
  [2, 5],
  []
];

{
  {
    /**
     * Due to the "visited" check, some of the cycles are missing from the result;
     * . For instance, for the graph edges above, there are two cyces that starts at index 0.
     *  They are: 0, 1, 2, 0 and 0, 1, 4, 2, 0. But the solution here returns omits some of 
     * the cyles. Similarly there two cycles at indeces 1 and 2. A complete list of the cycles are:
     * 0, 1, 2, 0
     * 0, 1, 4, 2, 0
     * 1, 2, 0, 1
     * 1, 4, 2, 0, 1
     * 2, 0, 1, 2
     * 2, 0, 1, 4, 2
     * 4, 2, 0, 1, 4
     * 
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
    function findAllCyclesInGraph(edges: number[][]) {
      const cycles: number[][] = [];
      for (let node in edges) {// 'in' in array loops through indices. So node is index
        const cycleNodes = checkCycle(edges, Number(node));
        if (cycleNodes.length > 0) cycles.push(...cycleNodes);
      }

      return cycles;
    }

    function checkCycle(edges: number[][], src: number): number[][] {
      const paths: number[][] = [];
      let stack: [[number, number[]]] | null = null;
      for (let num of [...edges[src]]) {
        if (stack === null) {
          stack = [[num, [src, num]]];
        } else {
          stack.push([num, [src, num]]);
        }
      }

      const visited: Set<number> = new Set();
      while (stack && stack.length > 0) {
        const [current, currentPath] = stack.pop()!;
        if (current === src) {
          paths.push(currentPath);
          continue;
        };

        if (visited.has(current)) continue;
        visited.add(current);

        for (let num of [...edges[current]]) {
          stack.push([num, [...currentPath, num]]);
        }
      }

      return paths;
    }

    console.log(
      findAllCyclesInGraph(edges)
    );

  }
}

export const __ = '___';