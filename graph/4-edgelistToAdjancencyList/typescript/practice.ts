import * as _ from './solution1';

interface Graph { [key: string]: string[]; };

const edges: string[][] = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

{
  {
    function buildGraph(edgeList: string[][]): Graph {
      const graph: Graph = {};

      for (let edge of edgeList) {
        const [nodeA, nodeB] = edge;
        if (!(nodeA in graph)) graph[nodeA] = [];
        if (!(nodeB in graph)) graph[nodeB] = [];

        // NOTE: pushing each in the other is only the valid for undirected graph. For a directed graph, only one push will happen depending on the instruction
        graph[nodeA].push(nodeB);
        graph[nodeB].push(nodeA);
      }

      return graph;
    }

    console.log(
      buildGraph(edges)
    );
  }

}