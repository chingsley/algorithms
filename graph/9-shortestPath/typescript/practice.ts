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

    function shortestPath(edgeList: string[][], src: string, dst: string): number {

      const graph = buildGraph(edgeList);
      const queue: [[string, number]] = [[src, 0]];
      const visited: { [key: string]: string; } = {};

      while (queue.length > 0) {
        const [node, distance] = queue.shift();
        visited[node] = node;

        if (node === dst) return distance;

        for (let childNode of graph[node]) {
          if (childNode in visited) continue;
          queue.push([childNode, distance + 1]);
        }
      }

      return -1;
    }

    // console.log(
    //   shortestPath(edges, 'w', 'z'), // expect 2,
    // );
  }
  {
    function shortestPath(edgeList: string[][], src: string, dst: string): number {
      const graph: Graph = buildGraph(edgeList);
      const queue: [[string, number]] = [[src, 0]];
      const visited: Visited = new Set();

      while (queue.length > 0) {
        const [current, length] = queue.shift();
        if (visited.has(current)) continue;
        visited.add(current);

        if (current === dst) return length;

        for (let node of graph[current]) {
          if (!visited.has(node)) {
            queue.push([node, length + 1]);
          }
        }
      }

      return -1;
    }

    interface Graph { [key: string]: string[]; };
    type Visited = Set<string>;

    // console.log(
    //   shortestPath(edges, 'w', 'z'), // expect 2,
    // );
  }
}

export const _ = '_';
