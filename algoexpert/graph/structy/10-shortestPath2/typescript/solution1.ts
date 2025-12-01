import { buildGraph, Graph } from "../../4-edgelistToAdjancencyList/typescript/solution1";

/**
 * Question:
 *  Write a function, shortestPath, that takes in an array of
 *  edges for an undirected graph and two nodes (nodeA, nodeB).
 *  The function should return the array of nodes of the shortest path
 *  between A and B (including A and B). Consider the length as the number of edges
 *  in the path, not the number of nodes. If there is no path
 *  between A and B, then return []
 * 
 * Solution 1: Iteration (Breadth First Search Using Queue)
 * 
 * Time: O(e)
 * Space: O(n)
 * Where: e = no. of edges in the graph
 *        n = no. of nodes in the graph
 * 
 * @param graph Grahp
 * @returns number
 */
export function shortestPath(edgeList: string[][], src: string, dst: string): string[] {
  const graph = buildGraph(edgeList);
  const queue: [[string, string[]]] = [[src, [src]]];
  const visited: { [key: string]: string; } = {};

  while (queue.length > 0) {
    const [node, path] = queue.shift();
    visited[node] = node;

    if (node === dst) return path;

    for (let childNode of graph[node]) {
      if (childNode in visited) continue;
      queue.push([childNode, [...path, childNode]]);
    }
  }

  return [];
}




const edges: string[][] = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];


console.log(
  shortestPath(edges, 'w', 'z'), // expect [ 'w', 'v', 'z' ],
);