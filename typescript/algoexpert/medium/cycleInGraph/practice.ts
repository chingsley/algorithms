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
  { // FAILED RECURSIVE SOLUTION
    function cycleInGraph(edges: number[][]) {
      for (let edge = 0; edge < edges.length; edge++) {
        const hasCycle = checkCycle(edge, edges, new Set(), edge);
        if (hasCycle === true) return true;
      }

      return false;
    }

    function checkCycle(edge: number, edges: number[][], visited: Set<number>, target: number): boolean {
      if (visited.has(edge)) return false;
      visited.add(edge);

      for (let num of edges[edge]) {
        if (edge === 2) {
          console.log({ num, target, }, num === target);
        }
        if (num === target) return true;
        if (!visited.has(num)) {
          return checkCycle(num, edges, visited, target);
        }
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