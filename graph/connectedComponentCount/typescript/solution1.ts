/**
 * Question:
 *  Write a function, connectedComponentsCount, that takes in the
 *  the adjancency list of an undirected graph. The function should
 *  return the number of connected components within the graph.
 * 
 * Time: O(e)
 * Space: O(n)
 * Where: e = no. of edges in the graph
 *        n = no. of nodes in the graph
 * 
 * @param graph Grahp
 * @returns number
 */
function connectedComponentCount(graph: Graph) {
  const visited = new Set<string>();
  let count = 0;

  for (let node in graph) {
    if (depthFirstTraverse(graph, Number(node), visited) === true) {
      count += 1;
    }
  }

  return count;
}

function depthFirstTraverse(graph: Graph, currentNode: number, visited: Set<string>): boolean {
  if (visited.has(String(currentNode))) return false;

  visited.add(String(currentNode));

  for (let neighbor of graph[currentNode]) {
    depthFirstTraverse(graph, neighbor, visited);
  }

  return true;
}


interface Graph {
  [key: number]: number[];
}


console.log(
  connectedComponentCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  })
); // EXPECT 2