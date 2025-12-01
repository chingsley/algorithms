/**
 * Question:
 *  Write a function, connectedComponentsCount, that takes in the
 *  the adjancency list of an undirected graph. The function should
 *  return the number of connected components within the graph.
 * 
 * Solution 2: Iteration (Breadth First Search Using Queue)
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
    if (breadthFirstTraverse(graph, Number(key), visited) === true) {
      count++;
    }
  }

  return count;
}


function breadthFirstTraverse(graph: Graph, node: number, visited: Set<string> = new Set()): boolean {
  if (visited.has(String(node))) return false;

  const queue: number[] = [node];

  while (queue.length > 0) {
    const current = queue.shift();
    visited.add(String(current));

    for (let neighbor of graph[current]) {
      if (!visited.has(String(neighbor))) {
        queue.push(neighbor);
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
  2: [1],
};


console.log(
  connectedComponentsCount(graph), // expect 3,
);