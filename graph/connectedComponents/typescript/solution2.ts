/**
 * Question:
 *  Write a function, connectedComponents, that takes in the
 *  the adjancency list of an undirected graph. The function should
 *  return the array of connected components within the graph.
 * 
 * Solution 2: Recursion (Depth First Search Using Recursion)
 * 
 * Time: O(e)
 * Space: O(n)
 * Where: e = no. of edges in the graph
 *        n = no. of nodes in the graph
 * 
 * @param graph Grahp
 * @returns number
 */
export function connectedComponents(graph: Graph): number[][] {
  const visited: Set<string> = new Set();
  const result: number[][] = [];
  for (let key in graph) {
    const components = depthFirstTraverse(graph, Number(key), visited);
    if (components.length > 0) {
      result.push(components);
    }
  }

  return result;
}


function depthFirstTraverse(graph: Graph, node: number, visited: Set<string> = new Set()): number[] {
  if (visited.has(String(node))) return [];

  visited.add(String(node));

  let components = [node];

  for (let neighbor of graph[node]) {
    const arr = depthFirstTraverse(graph, neighbor, visited);
    components.push(...arr);
  }

  return components;
}

interface Graph {
  [key: number]: number[];
}


const graph: Graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
};


console.log(
  connectedComponents(graph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],
);