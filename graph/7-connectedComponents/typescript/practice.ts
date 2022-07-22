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
  { // RECURSION
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

    // console.log(
    //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]],,
    // );
  }
  { // RECURSION (METHOD 1) - PREFERRED (no spread operator which can incure additional time cost)
    // O(e) time | O(n) space
    // e = no. of edges | n = no. of nodes
    function connectedComponents(graph: Graph): number[][] {

      const array: number[][] = [];
      const visited: Visited = new Set();
      for (let node in graph) {
        const components = getComponents(Number(node), graph, visited, []);
        if (components.length > 0) array.push(components);
      }

      return array;
    }

    function getComponents(node: number, graph: Graph, visited: Visited, components: number[]): number[] {
      if (visited.has(node)) return [];
      visited.add(node);

      components.push(node);
      for (let childNode of graph[node]) {
        if (!visited.has(childNode)) {
          getComponents(childNode, graph, visited, components);
        }
      }
      return components;
    }

    interface Graph { [key: number]: number[]; };
    type Visited = Set<number>;

    // console.log(
    //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]]
    // );
  }
  {// RECURSION (METHOD 2)
    function connectedComponents(graph: Graph): number[][] {

      const array: number[][] = [];
      const visited: Visited = new Set();
      for (let node in graph) {
        const components = getComponents(Number(node), graph, visited);
        if (components.length > 0) array.push(components);
      }

      return array;
    }

    function getComponents(node: number, graph: Graph, visited: Visited): number[] {
      if (visited.has(node)) return [];
      visited.add(node);

      const arr: number[] = [node];
      for (let childNode of graph[node]) {
        if (!visited.has(childNode)) {
          const res = getComponents(childNode, graph, visited);
          arr.push(...res);
        }
      }
      return arr;
    }

    interface Graph { [key: number]: number[]; };
    type Visited = Set<number>;

    // console.log(
    //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]]
    // );
  }
  {
    function connectedComponents(graph: Graph): number[][] {
      const groups: number[][] = [];
      const visited: Visited = new Set();

      for (let node in graph) {
        if (visited.has(Number(node))) continue;

        const stack: number[] = [Number(node)];
        const array: number[] = [];
        while (stack.length > 0) {
          const current = stack.pop();
          array.push(current);
          visited.add(current);

          for (let childNode of graph[current]) {
            if (!visited.has(childNode)) stack.push(childNode);
          }
        }
        groups.push(array);
      }

      return groups;
    }

    interface Graph { [key: number]: number[]; };
    type Visited = Set<number>;

    // console.log(
    //   connectedComponents(testGraph), // expect [ [3], [1, 2], [4, 5, 6, 7, 8]]
    // );
  }
}