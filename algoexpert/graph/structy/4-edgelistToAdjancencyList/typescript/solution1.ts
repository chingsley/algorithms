export interface Graph {
  [key: string]: string[];
}
export function buildGraph(edgeList: string[][]): Graph {
  const graph: Graph = {};

  for (let [a, b] of edgeList) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const edges: string[][] = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];



// console.log(
//   buildGraph(edges)
// );

// const expectedGraph = {
//   i: ['j', 'k'],
//   j: ['i'],
//   k: ['i', 'm', 'l'],
//   m: ['k'],
//   l: ['k'],
//   o: ['n'],
//   n: ['o']
// };