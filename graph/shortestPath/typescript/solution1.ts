import { buildGraph, Graph } from "../../edgelistToAdjancencyList/typescript/solution1";

/**
 * Question:
 *  Write a function, shortestPath, that takes in an array of
 *  edges for an undirected graph and two nodes (nodeA, nodeB).
 *  The function should return the length of the shortest path
 *  between A and B. Consider the length as the number of edges
 *  in the path, not the number of nodes. If there is no path
 *  between A and B, then return -1
 * 
 * Solution 2: Iteration (Depth First Search Using Stack)
 * 
 * Time: O(e)
 * Space: O(n)
 * Where: e = no. of edges in the graph
 *        n = no. of nodes in the graph
 * 
 * @param graph Grahp
 * @returns number
 */
export function shortestPath(edgeList: string[][], src: string, dst: string): number {
  const graph: Graph = buildGraph(edgeList);
  const queue: [[string, number]] = [[src, 0]];
  const visited: Set<string> = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    const [currentNode, currentDist] = current;
    visited.add(currentNode);

    if (currentNode === dst) return currentDist;

    for (let neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, currentDist + 1]);
      }
    }
  }

  return -1;
}




const edges: string[][] = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];


console.log(
  shortestPath(edges, 'w', 'z'), // expect 2,
);