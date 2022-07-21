import * as _ from './solution1';

const testGraph: Graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
};


interface Graph { [key: number]: number[]; };
interface Visited { [key: number]: number; };

{
  { // RECURSIN
    function connectedComponents(graph: Graph): number[][] {
      const components: number[][] = [];
      const visited: Visited = {};
      for (let node in graph) {
        const res = getConnectedComponents(Number(node), graph, visited);
        if (res.length > 0) components.push(res);
      }

      return components;
    }

    function getConnectedComponents(node: number, graph: Graph, visited: Visited): number[] {
      if (node in visited) return [];
      visited[node] = node;

      const array: number[] = [node];
      for (let childNode of graph[node]) {
        const result = getConnectedComponents(childNode, graph, visited);
        array.push(...result);
      }
      return array;
    }

    // console.log(
    //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],,
    // );
  }
  { // ITERATION (DFS)
    function connectedComponents(graph: Graph): number[][] {
      const components: number[][] = [];
      const visited: Visited = {};
      for (let node in graph) {
        const res = getConnectedComponents(Number(node), graph, visited);
        if (res.length > 0) components.push(res);
      }

      return components;
    }

    function getConnectedComponents(node: number, graph: Graph, visited: Visited): number[] {
      if (node in visited) return [];
      visited[node] = node;

      const stack: number[] = [node];
      const array: number[] = [node];
      while (stack.length > 0) {
        const current = stack.pop()!;
        for (let childNode of graph[current]) {
          const res = getConnectedComponents(childNode, graph, visited);
          array.push(...res);
        }
      }
      return array;
    }

    // console.log(
    //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],,
    // );
  }
  { // ITERATION (DFS)
    function connectedComponents(graph: Graph): number[][] {
      const components: number[][] = [];
      const visited: Visited = {};
      for (let node in graph) {
        const res = getConnectedComponents(Number(node), graph, visited);
        if (res.length > 0) components.push(res);
      }

      return components;
    }

    function getConnectedComponents(node: number, graph: Graph, visited: Visited): number[] {
      if (node in visited) return [];
      visited[node] = node;

      const stack: number[] = [node];
      const array: number[] = [node];
      while (stack.length > 0) {
        const current = stack.pop()!;
        for (let childNode of graph[current]) {
          const res = getConnectedComponents(childNode, graph, visited);
          array.push(...res);
        }
      }
      return array;
    }

    // console.log(
    //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],,
    // );
  }
  { // ITERATION (BFS)
    function connectedComponents(graph: Graph): number[][] {
      const components: number[][] = [];
      const visited: Visited = {};
      for (let node in graph) {
        const res = getConnectedComponents(Number(node), graph, visited);
        if (res.length > 0) components.push(res);
      }

      return components;
    }

    function getConnectedComponents(node: number, graph: Graph, visited: Visited): number[] {
      if (node in visited) return [];
      visited[node] = node;

      const queue: number[] = [node];
      const array: number[] = [node];
      while (queue.length > 0) {
        const current = queue.shift()!;
        for (let childNode of graph[current]) {
          const res = getConnectedComponents(childNode, graph, visited);
          array.push(...res);
        }
      }
      return array;
    }

    console.log(
      connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],,
    );
  }
}