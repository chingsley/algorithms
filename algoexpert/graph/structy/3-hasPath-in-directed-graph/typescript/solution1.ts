/**
 * Question:
 * write a function, hasPath, that takes in an object representing adjacency list of a directed
 * acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether
 * or not there exists a directed path between the source (src) and destination (dst) nodes
 * 
 * * Solution 1: Recursion
 * 
 * Time/Space Complexity
 * Time: O(e)
 * Space: O(n)
 * Where: e = no. of edges, n = no. of nodes/vertices
 * Note: e = n^2
 * 
 * @param graph Graph
 * @param src string
 * @param dst string
 * @returns boolean
 */
export function hasPath(graph: Graph, src: string, dst: string): boolean {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
}

interface Graph {
  [key: string]: string[];
}

const graph_test_01: Graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};


console.log(
  hasPath(graph_test_01, 'f', 'k'), // expect true,
  hasPath(graph_test_01, 'f', 'j') // expect false
);