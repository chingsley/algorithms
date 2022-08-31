/**
 * Question:
 *  Write a function, largestComponent, that takes in the
 *  the adjancency list of an undirected graph. The function should
 *  return the size of the largest connected component within the graph.
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
export function largestComponent(graph: Graph): number {
  const visited: Set<string> = new Set();
  let maxCount = 0;
  for (let key in graph) {
    const count = depthFirstTraverse(graph, Number(key), visited);
    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
}


function depthFirstTraverse(graph: Graph, node: number, visited: Set<string> = new Set()): number {
  if (visited.has(String(node))) return 0;

  const stack: number[] = [node];

  let count = 0;
  while (stack.length > 0) {
    const current = stack.pop();
    visited.add(String(current));

    for (let neighbor of graph[current]) {
      if (!visited.has(String(neighbor))) {
        stack.push(neighbor);
      }
    }

    count++;
  }

  return count;
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
  largestComponent(graph), // expect 5,
);