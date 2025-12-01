/**
 * Question:
 *  Write a function, connectedComponentsCount, that takes in the
 *  the adjancency list of an undirected graph. The function should
 *  return the number of connected components within the graph.
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
export function connectedComponentsCount(graph: Graph): number {
  const visited: Set<string> = new Set();
  let count = 0;
  for (let key in graph) {
    if (depthFirstTraverse(graph, Number(key), visited) === true) {
      count++;
    }
  }

  return count;
}


function depthFirstTraverse(graph: Graph, node: number, visited: Set<string> = new Set()): boolean {
  if (visited.has(String(node))) return false;

  const stack: number[] = [node];

  while (stack.length > 0) {
    const current = stack.pop();
    visited.add(String(current));

    for (let neighbor of graph[current]) {
      if (!visited.has(String(neighbor))) {
        stack.push(neighbor);
      }
    }
  }

  return true;
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
  connectedComponentsCount(graph), // expect 3,
);