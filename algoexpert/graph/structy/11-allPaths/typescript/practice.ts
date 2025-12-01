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

    // console.log(
    //   allPaths(edges, 'w', 'z'), // expect [ [ 'w', 'v', 'z' ], [ 'w', 'x', 'y', 'z' ] ]
    // );
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

    // console.log(
    //   allPaths(edges, 'w', 'z'), // expect [ [ 'w', 'v', 'z' ], [ 'w', 'x', 'y', 'z' ] ]
    // );
  }
  {
    function allPaths(edgeList: string[][], src: string, dst: string): string[][] {
      const visited: Set<string> = new Set();
      const paths: string[][] = [];
      const graph = buildGraph(edgeList);

      parseGraph(graph, src, dst, visited, '', paths);
      return paths;
    }

    type Graph = { [key: string]: string[]; };
    function parseGraph(graph: Graph, src: string, dst: string, visited: Set<string>, currentPath: string, paths: string[][]) {
      if (visited.has(src)) return;
      if (src !== dst) visited.add(src); // do not add the dst to "visited". Since we expect to reach the dst from different paths

      currentPath += src;
      if (src === dst) {
        paths.push(currentPath.split(''));
        return; // this will ensure that we don't call the recursive function on the dst.
        // you can also check in the for for loop. if(node === dst) continue
      }

      for (let node of graph[src]) {
        parseGraph(graph, node, dst, visited, currentPath, paths);
      }
    }

    // console.log(
    //   allPaths(edges, 'w', 'z'), // expect [ [ 'w', 'v', 'z' ], [ 'w', 'x', 'y', 'z' ] ]
    // );
  }
  {
    function allPaths(edgeList: string[][], src: string, dst: string): string[][] {
      const paths: string[][] = [];
      const visited: Set<string> = new Set();
      const graph = buildGraph(edgeList);

      const queue: [[string, string[]]] = [[src, [src]]];
      while (queue.length > 0) {
        const [current, currentPath] = queue.shift()!;
        if (visited.has(current)) continue;
        if (current !== dst) visited.add(current);

        if (current === dst) {
          paths.push(currentPath);
        }

        for (let node of graph[current]) {
          queue.push([node, [...currentPath, node]]);
        }
      }

      return paths;
    }

    // console.log(
    //   allPaths(edges, 'w', 'z'), // expect [ [ 'w', 'v', 'z' ], [ 'w', 'x', 'y', 'z' ] ]
    // );

  }
  {
    function allPaths(edgeList: string[][], src: string, dst: string): string[][] {
      const graph = buildGraph(edgeList);
      const visited: Set<string> = new Set();
      const paths: string[][] = [];

      const queue: [[string, string[]]] = [[src, [src]]];
      while (queue.length > 0) {
        const [current, currentPath] = queue.shift()!;

        if (visited.has(current) && current !== dst) continue; // *** method 1: ignore the fact that dst has already been visited
        visited.add(current);
        if (current == dst) paths.push(currentPath);

        for (let node of graph[current]) queue.push(
          [node, [...currentPath, node]]
        );
      }

      return paths;
    }

    // console.log(
    //   allPaths(edges, 'w', 'z'), // expect [ [ 'w', 'v', 'z' ], [ 'w', 'x', 'y', 'z' ] ]
    // );
  }
  {
    {
      function allPaths(edgeList: string[][], src: string, dst: string): string[][] {
        const graph = buildGraph(edgeList);
        const visited: Set<string> = new Set();
        const paths: string[][] = [];

        const queue: [[string, string[]]] = [[src, [src]]];
        while (queue.length > 0) {
          const [current, currentPath] = queue.shift()!;

          if (visited.has(current)) continue;
          if (current !== dst) visited.add(current); // ** method 2: do not push dst to the queue
          if (current == dst) paths.push(currentPath);

          for (let node of graph[current]) queue.push(
            [node, [...currentPath, node]]
          );
        }

        return paths;
      }

      // console.log(
      //   allPaths(edges, 'w', 'z'), // expect [ [ 'w', 'v', 'z' ], [ 'w', 'x', 'y', 'z' ] ]
      // );
    }
    {
      function allPaths(edgeList: string[][], src: string, dst: string): string[][] {
        const graph = buildGraph(edgeList);
        const visited: Set<string> = new Set();
        const paths: string[][] = [];

        const queue: [[string, string[]]] = [[src, [src]]];
        while (queue.length > 0) {
          const [current, currentPath] = queue.shift()!;

          if (current == dst) paths.push(currentPath); // method 3: change the order. Check if current === dst before performing the "visited" check
          if (visited.has(current)) continue;
          visited.add(current);


          for (let node of graph[current]) queue.push(
            [node, [...currentPath, node]]
          );
        }

        return paths;
      }

      console.log(
        allPaths(edges, 'w', 'z'), // expect [ [ 'w', 'v', 'z' ], [ 'w', 'x', 'y', 'z' ] ]
      );
    }
  }
}

export const ___ = '___';