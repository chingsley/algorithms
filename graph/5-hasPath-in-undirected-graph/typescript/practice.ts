import * as _ from './solution1';
import { buildGraph, Graph } from "../../4-edgelistToAdjancencyList/typescript/solution1";
const edges: string[][] = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

{
  {// RECURSION (SOLUTION 1)
    // O(e) time | O(n) space
    // e = no. of edges | n = no. of nodes
    function hasPath(edgeList: string[][], src: string, dst: string): boolean {
      const graph: Graph = buildGraph(edgeList);
      const visited: Set<string> = new Set();
      return hasPathHelper(graph, src, dst, visited);
    }

    function hasPathHelper(graph: Graph, src: string, dst: string, visited: Set<string>): boolean {
      if (visited.has(src)) return false;

      if (src === dst) return true;
      visited.add(src);

      for (let node of graph[src]) {
        const pathFound = hasPathHelper(graph, node, dst, visited);
        if (pathFound === true) {
          return true;
        }
      }

      return false;
    }

    console.log(
      hasPath(edges, 'i', 'l'), // expect true,
      hasPath(edges, 'k', 'o'), // expect false,
    );

  }
  {// RECURSION (SOLUTION 2)
    // O(e) time | O(n) space
    // e = no. of edges | n = no. of nodes
    function hasPath(edgeList: string[][], src: string, dst: string): boolean {
      const graph: Graph = buildGraph(edgeList);
      const visited: Set<string> = new Set();
      return hasPathHelper(graph, src, dst, visited);
    }

    function hasPathHelper(graph: Graph, src: string, dst: string, visited: Set<string>): boolean {
      if (src === dst) return true;

      visited.add(src);

      for (let node of graph[src]) {
        if (!visited.has(node)) { // --- make recursive call if the node is not visited
          const pathFound = hasPathHelper(graph, node, dst, visited);
          if (pathFound === true) return true;
        }
      }

      return false;
    }

    console.log(
      hasPath(edges, 'i', 'l'), // expect true,
      hasPath(edges, 'k', 'o'), // expect false,
    );

  }

  { // ITERATION (DFS)
    // O(e) time | O(n) space
    // e = no. of edges | n = no. of nodes
    function hasPath(edgeList: string[][], src: string, dst: string): boolean {
      const graph: Graph = buildGraph(edgeList);
      const stack: string[] = [src];
      const visited: Set<string> = new Set();

      while (stack.length > 0) {
        const curr = stack.pop()!;
        if (curr === dst) return true;
        visited.add(curr);

        for (let node of graph[curr]) {
          if (!(visited.has(node))) {
            stack.push(node);
          }
        }
      }
      return false;
    }

    console.log(
      hasPath(edges, 'i', 'l'), // expect true,
      hasPath(edges, 'k', 'o'), // expect false,
    );
  }
  { // ITERATION (BFS)
    // O(e) time | O(n) space
    // e = no. of edges | n = no. of nodes
    function hasPath(edgeList: string[][], src: string, dst: string): boolean {
      const graph: Graph = buildGraph(edgeList);
      const queue: string[] = [src];
      const visited: { [key: string]: string; } = {};

      while (queue.length > 0) {
        const curr = queue.shift()!;
        if (curr === dst) return true;
        visited[curr] = curr;

        for (let node of graph[curr]) {
          if (!(node in visited)) {
            queue.push(node);
          }
        }
      }
      return false;
    }

    console.log(
      hasPath(edges, 'i', 'l'), // expect true,
      hasPath(edges, 'k', 'o'), // expect false,
    );
  }
}

