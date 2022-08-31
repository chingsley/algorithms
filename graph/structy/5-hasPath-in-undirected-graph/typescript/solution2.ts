import { buildGraph, Graph } from "../../4-edgelistToAdjancencyList/typescript/solution1";

/**
 * Question:
 * write a function, hasPath, that takes in an object representing adjacency list of an UNDIRECTED
 * acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether
 * or not there exists a directed path between the source (src) and destination (dst) nodes
 * 
 * * Solution 2: Iteration (Breadth First Traversal)
 * 
 * Time/Space Complexity
 * Time: O(e)
 * Space: O(n)
 * Where: e = no. of edges, n = no. of nodes/vertices
 * Note: e = n^2
 * 
 * @param edgeList Graph
 * @param src string
 * @param dst string
 * @returns boolean
 */
export function hasPath(edgeList: string[][], src: string, dst: string): boolean {
  const graph: Graph = buildGraph(edgeList);
  const visited: Set<string> = new Set();
  const queue: string[] = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;

    visited.add(current);
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }

  return false;
}


const edges: string[][] = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


console.log(
  hasPath(edges, 'i', 'l'), // expect true,
  hasPath(edges, 'k', 'o'), // expect false,
);