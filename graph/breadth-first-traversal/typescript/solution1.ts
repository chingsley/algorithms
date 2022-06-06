interface Graph {
  [key: string]: string[];
}

/**
 * Method 1: Iteration
 * @param graph Graph
 * @param source string
 * @returns string[]
 */
export function breadthFirstPrint(graph: Graph, source: string) {
  const queue: string[] = [source];
  const output: string[] = [];

  while (queue.length > 0) {
    const current = queue.shift();
    output.push(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return output;
}

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

console.log(
  breadthFirstPrint(graph, 'a') // expect [ 'a', 'c', 'b', 'e', 'd', 'f' ] or [ 'a', 'b', 'c', 'd', 'e', 'f' ]
);