interface Graph { [key: number]: number[]; };
interface Visited { [key: number]: number; };

const testGraph: Graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
};

{
  { // RECURSION
    // O(e) time | O(n) space
    // e = no. of edges | n = no. of nodes
    function largestComponent(graph: Graph): number {
      const visited: Visited = {};
      let maxCount = 0;
      for (let node in graph) {
        const size = countComponents(Number(node), graph, visited);
        if (size > maxCount) maxCount = size;
      }

      return maxCount;
    }

    function countComponents(node: number, graph: Graph, visited: Visited): number {
      if (node in visited) return 0;
      visited[node] = node;

      let count = 1;
      for (let childNode of graph[node]) {
        count += countComponents(childNode, graph, visited);
      }

      return count;
    }

    // console.log(
    //   largestComponent(testGraph), // expect 5,
    // );
  }
  { // ITERATION (DFS)
    // O(e) time | O(n) space
    // e = no. of edges | n = no. of nodes
    function largestComponent(graph: Graph): number {
      const visited: Visited = {};
      let maxCount = 0;
      for (let node in graph) {
        const size = countComponents(Number(node), graph, visited);
        if (size > maxCount) maxCount = size;
      }

      return maxCount;
    }

    function countComponents(node: number, graph: Graph, visited: Visited): number {
      if (node in visited) return 0;

      const stack: number[] = [node];

      let count = 0;
      while (stack.length > 0) {
        let current = stack.pop()!;
        visited[current] = current;
        for (const childNode of graph[current]) {
          if (childNode in visited) continue;
          stack.push(childNode);
        }

        count += 1;
      }

      return count;
    }

    // console.log(
    //   largestComponent(testGraph), // expect 5,
    // );
  }
  { // ITERATION (BFS)

    // O(e) time | O(n) space
    // e = no. of edges | n = no. of nodes
    function largestComponent(graph: Graph): number {
      const visited: Visited = {};
      let maxCount = 0;
      for (let node in graph) {
        const size = countComponents(Number(node), graph, visited);
        if (size > maxCount) maxCount = size;
      }

      return maxCount;
    }

    function countComponents(node: number, graph: Graph, visited: Visited): number {
      if (node in visited) return 0;

      const queue: number[] = [node];

      let count = 0;
      while (queue.length > 0) {
        let current = queue.shift()!;
        visited[current] = current;
        for (const childNode of graph[current]) {
          if (childNode in visited) continue;
          queue.push(childNode);
        }

        count += 1;
      }

      return count;
    }

    console.log(
      largestComponent(testGraph), // expect 5,
    );
  }
}

export const _ = '_'; // just to make this file a module and avoid dupliate warnings