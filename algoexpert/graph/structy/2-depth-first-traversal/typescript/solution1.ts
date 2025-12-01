interface Graph {
  [key: string]: string[];
}

/**
 * Method 1: Iteration
 * @param graph Graph
 * @param source string
 * @returns string[]
 */
export function depthFirstPrint(graph: Graph, source: string) {
  const stack: string[] = [source];
  const output: string[] = [];

  while (stack.length > 0) {
    const current = stack.pop();
    output.push(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
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
  depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
);