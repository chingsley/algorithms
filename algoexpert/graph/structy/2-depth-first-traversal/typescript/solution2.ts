interface Graph {
  [key: string]: string[];
}

/**
 * Method 2: Recursion
 * @param graph Graph
 * @param source string
 * @returns string[]
 */
export function depthFirstPrint(graph: Graph, source: string, output: string[] = []) {
  output.push(source);

  for (let neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor, output);
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