import { buildGraph, Graph } from "../../4-edgelistToAdjancencyList/typescript/solution1";

/**
 * Question:
 *  Write a function, shortestPath, that takes in an array of
 *  edges for an undirected graph and two nodes (nodeA, nodeB).
 *  The function should return all available paths between
 *  between A and B (including A and B). The paths should be in an array.
 *  Also, the returned value shoudl be an array of paths (i.e array of array)
 *  Consider the length as the number of edges
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
export function allPaths(edgeList: string[][], src: string, dst: string): string[][] {
  const graph = buildGraph(edgeList);
  const queue: [[string, string[]]] = [[src, [src]]];
  const visited: { [key: string]: string; } = {};
  const paths: string[][] = [];

  while (queue.length > 0) {
    const [node, pathSoFar] = queue.shift();
    visited[node] = node;

    if (node === dst) paths.push(pathSoFar);

    for (let childNode of graph[node]) {
      if (childNode in visited) continue;
      queue.push([childNode, [...pathSoFar, childNode]]);
    }
  }

  return paths;
}




const edges: string[][] = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];


console.log(
  allPaths(edges, 'w', 'z'), // expect [ 'w', 'v', 'z' ],
);