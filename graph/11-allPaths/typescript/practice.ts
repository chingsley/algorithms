import { buildGraph } from "../../4-edgelistToAdjancencyList/typescript/solution1";


const edges: string[][] = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

{
  {
    function allPaths(edgeList: string[][], src: string, dst: string): string[][] {
      const graph = buildGraph(edgeList);
      const visited: Set<string> = new Set();
      const paths: string[][] = [];
      const queue: [[string, string[]]] = [[src, [src]]];
      while (queue.length > 0) {
        const [current, path] = queue.shift();

        if (visited.has(current) && current !== dst) continue; // the 2nd condition "&& current !== dst" is required, since we can visit the dst multiple times from different paths
        visited.add(current);

        if (current === dst) paths.push(path);
        for (let node of graph[current]) {
          queue.push([node, [...path, node]]);
        }
      }

      return paths;
    }

    console.log(
      allPaths(edges, 'w', 'z'), // expect [ [ 'w', 'v', 'z' ], [ 'w', 'x', 'y', 'z' ] ]
    );
  }
  {
    function allPaths(edgeList: string[][], src: string, dst: string): string[][] {
      const graph = buildGraph(edgeList);
      const visited: Set<string> = new Set();
      const paths: string[][] = [];
      const queue: [[string, string[]]] = [[src, [src]]];
      while (queue.length > 0) {
        const [current, path] = queue.shift();
        visited.add(current);

        if (current === dst) paths.push(path);

        for (let node of graph[current]) {
          if (visited.has(node)) continue;
          queue.push([node, [...path, node]]);
        }
      }

      return paths;
    }

    console.log(
      allPaths(edges, 'w', 'z'), // expect [ [ 'w', 'v', 'z' ], [ 'w', 'x', 'y', 'z' ] ]
    );
  }
}

export const ___ = '___';