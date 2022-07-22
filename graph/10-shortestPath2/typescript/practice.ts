function buildGraph(edgeList: string[][]): Graph {
  const graph: Graph = {};

  for (const edge of edgeList) {
    const [nodeA, nodeB] = edge;
    if (!(nodeA in graph)) graph[nodeA] = [];
    if (!(nodeB in graph)) graph[nodeB] = [];

    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }
  return graph;
}

interface Graph { [key: string]: string[]; };


const edges: string[][] = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

{
  {
    function shortestPath(edgeList: string[][], src: string, dst: string): string[] {
      const graph = buildGraph(edgeList);
      const visited: Visited = new Set();
      const queue: [[string, string[]]] = [[src, [src]]];

      while (queue.length > 0) {
        const [current, pathSoFar] = queue.shift();
        if (visited.has(current)) continue;
        visited.add(current);

        if (current === dst) return pathSoFar;

        for (let node of graph[current]) {
          if (!visited.has(node)) {
            queue.push([node, [...pathSoFar, node]]);
          }
        }
      }

      return [];
    }

    interface Graph { [key: string]: string[]; };
    type Visited = Set<string>;

    function buildGraph(edgeList: string[][]) {
      const graph: Graph = {};
      for (let edge of edgeList) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
      }

      return graph;
    }


    console.log(
      shortestPath(edges, 'w', 'z'), // expect [ 'w', 'v', 'z' ],
    );
  }
}

export const _ = '_';
