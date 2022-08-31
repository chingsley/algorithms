import * as _ from './solution1';
import data from './data';

interface Graph { [key: number]: number[]; };

{
  { // RECURSION (COUNTING BOOLEAN TRUE)
    function connectedComponentCount(graph: Graph): number {
      let numOfComonents = 0;
      const visited: { [key: number]: number; } = {};
      for (let node in graph) {
        const res = countComponents(Number(node), graph, visited);
        if (res === true) numOfComonents += 1;
      }
      return numOfComonents;
    }

    function countComponents(node: number, graph: Graph, visited: { [key: number]: number; }): boolean {
      if (node in visited) return false;

      visited[node] = node;
      for (let nd of graph[node]) {
        countComponents(nd, graph, visited);
      }
      return true;
    }

    // test(connectedComponentCount);
    // expect count 2, array: [ 4, 3 ];
    // expect count 3, numOfNodesInComponents: [2, 1, 5]
    // expect count 1, numOfNodesInComponents: [3]
  }
  { // RECURSION
    function connectedComponentCount(graph: Graph): number {
      const res: number[][] = [];
      const visited: { [key: number]: number; } = {};
      for (let node in graph) {
        const components = countComponents(Number(node), graph, [], visited);
        if (components.length > 0) {
          res.push(components);
        }
      }
      console.log(res);
      return res.length;
    }

    function countComponents(node: number, graph: Graph, arr: number[], visited: { [key: number]: number; }): number[] {
      if (node in visited) return arr;

      arr.push(node);
      visited[node] = node;
      for (let nd of graph[node]) {
        countComponents(nd, graph, arr, visited);
      }
      return arr;
    }

    // test(connectedComponentCount);

  }
  { // RECURSION
    function connectedComponentCount(graph: Graph): number {
      const res: number[][] = [];
      const visited: { [key: number]: number; } = {};
      for (let node in graph) {
        const components = countComponents(Number(node), graph, visited);
        if (components.length > 0) {
          res.push(components);
        }
      }
      console.log(res);
      return res.length;
    }

    function countComponents(node: number, graph: Graph, visited: { [key: number]: number; }): number[] {
      if (node in visited) return [];

      const arr: number[] = [node];
      visited[node] = node;
      for (let nd of graph[node]) {
        const components = countComponents(nd, graph, visited);
        arr.push(...components);
      }
      return arr;
    }

    // test(connectedComponentCount);
  }
  { // RECURSION
    function connectedComponentCount(graph: Graph): number {
      let numOfNodesPerComponent: number[] = [];
      const visited: { [key: number]: number; } = {};
      for (let node in graph) {
        const componentsCount = countComponents(Number(node), graph, visited);
        if (componentsCount > 0) numOfNodesPerComponent.push(componentsCount);
      }
      console.log(numOfNodesPerComponent);
      return numOfNodesPerComponent.length;
    }

    function countComponents(node: number, graph: Graph, visited: { [key: number]: number; }): number {
      if (node in visited) return 0;

      let count = 1;
      visited[node] = node;
      for (let nd of graph[node]) {
        const componentsCount = countComponents(nd, graph, visited);
        count += componentsCount;
      }
      return count;
    }

    // test(connectedComponentCount);
    // expect count 2, array: [ 4, 3 ];
    // expect count 3, numOfNodesInComponents: [2, 1, 5]
    // expect count 1, numOfNodesInComponents: [3]
  }
  { // ITERATION (DFS)
    function connectedComponentCount(graph: Graph): number {
      let numOfComonents = 0;
      const visited: { [key: number]: number; } = {};
      for (let node in graph) {
        const res = countComponents(Number(node), graph, visited);
        if (res === true) numOfComonents += 1;
      }
      return numOfComonents;
    }

    function countComponents(node: number, graph: Graph, visited: { [key: number]: number; }): boolean {
      if (node in visited) return false;

      const stack: number[] = [node];

      while (stack.length > 0) {
        const current = stack.pop()!;
        visited[current] = current;

        for (const neighbor of graph[current]) {
          if (!(neighbor in visited)) {
            stack.push(neighbor);
          }
        }

      }
      return true;
    }

    // test(connectedComponentCount);
    // expect count 2, array: [ 4, 3 ];
    // expect count 3, numOfNodesInComponents: [2, 1, 5]
    // expect count 1, numOfNodesInComponents: [3]
  }
  { // ITERATION (BFS)
    function connectedComponentCount(graph: Graph): number {
      let numOfComonents = 0;
      const visited: { [key: number]: number; } = {};
      for (let node in graph) {
        const res = countComponents(Number(node), graph, visited);
        if (res === true) numOfComonents += 1;
      }
      return numOfComonents;
    }

    function countComponents(node: number, graph: Graph, visited: { [key: number]: number; }): boolean {
      if (node in visited) return false;

      const queue: number[] = [node];

      while (queue.length > 0) {
        const current = queue.shift()!;
        visited[current] = current;

        for (const neighbor of graph[current]) {
          if (!(neighbor in visited)) {
            queue.push(neighbor);
          }
        }

      }
      return true;
    }

    // test(connectedComponentCount);
    // expect count 2, array: [ 4, 3 ];
    // expect count 3, numOfNodesInComponents: [2, 1, 5]
    // expect count 1, numOfNodesInComponents: [3]
  }
  {
    function connectedComponentCount(graph: Graph): number {
      let count = 0;
      const visited: Visited = new Set();
      for (let node in graph) {
        const result = countComponents(Number(node), graph, visited);
        if (result === true) count++;
      }

      return count;
    }

    function countComponents(node: number, graph: Graph, visited: Visited): boolean {
      if (visited.has(node)) return false;
      visited.add(node);

      for (let childNode of graph[node]) {
        if (!visited.has(childNode)) {
          countComponents(childNode, graph, visited);
        }
      }

      return true;
    }

    interface Graph { [key: number]: number[]; };
    type Visited = Set<number>;

    // test(connectedComponentCount);
  }
  {
    function connectedComponentCount(graph: Graph): number {
      let count = 0;
      const visited: Visited = new Set();
      for (let node in graph) {
        if (visited.has(Number(node))) continue;

        const stack: number[] = [Number(node)];
        while (stack.length > 0) {
          const current = stack.pop();
          visited.add(current);
          for (let node of graph[current]) {
            if (!visited.has(node)) {
              stack.push(node);
            }
          }
        }
        count += 1;
      }

      return count;
    }

    interface Graph { [key: number]: number[]; };
    type Visited = Set<number>;

    // test(connectedComponentCount);
  }
  {
    function connectedComponentCount(graph: Graph): number {
      const visited: Set<number> = new Set();
      let count = 0;
      for (let key in graph) {
        const size = countComponents(Number(key), graph, visited);
        if (size > 0) count += 1;
      }

      return count;
    }

    function countComponents(src: number, graph: Graph, visited: Set<number>) {
      if (visited.has(src)) return 0;
      visited.add(src);

      let size = 1;
      for (let node of graph[src]) {
        size += countComponents(node, graph, visited);
      }

      return size;
    }
    // test(connectedComponentCount);
  }
  {
    function connectedComponentCount(graph: Graph): number {
      const visited: Set<number> = new Set();
      let count = 0;
      for (let key in graph) {
        const size = countComponents(Number(key), graph, visited);
        if (size > 0) count += 1;
      }

      return count;
    }

    function countComponents(src: number, graph: Graph, visited: Set<number>) {
      let size = 0;
      const stack = [src];
      while (stack.length > 0) {
        const current = stack.pop()!;

        if (visited.has(current)) continue;
        visited.add(current);

        stack.push(...graph[current]);
        size += 1;
      }

      return size;
    }

    // test(connectedComponentCount);
  }
  {
    function connectedComponentCount(graph: Graph): number {
      const visited: Set<number> = new Set();
      let count = 0;
      for (let key in graph) {
        const node = Number(key);
        if (visited.has(node)) continue;
        countConnectedComponents(graph, node, visited);
        count += 1;
      }

      return count;
    }

    function countConnectedComponents(graph: Graph, src: number, visited: Set<number>) {
      const stack = [src];
      while (stack.length > 0) {
        const current = stack.pop()!;
        if (visited.has(current)) continue;
        visited.add(current);
        stack.push(...graph[current]);
      }
    }
  }
  {
    function connectedComponentCount(graph: Graph): number {
      const visited: Set<number> = new Set();
      let count = 0;
      for (let key in graph) {
        const node = Number(key);
        if (visited.has(node)) continue;
        visitConnectedComponents(graph, node, visited);
        count += 1;
      }
      return count;
    }

    function visitConnectedComponents(graph: Graph, node: number, visited: Set<number>): void {
      const stack = [node];
      while (stack.length > 0) {
        const current = stack.pop()!;
        if (visited.has(current)) continue;
        visited.add(current);
        stack.push(...graph[current]);
      }
    }

  }
  {
    function connectedComponentCount(graph: Graph): number {
      const visited: Set<number> = new Set();
      let count = 0;
      for (let key in graph) {
        const node = Number(key);
        if (visited.has(node)) continue;
        visitConnectedComponents(graph, node, visited);
        count += 1;
      }
      return count;
    }

    function visitConnectedComponents(graph: Graph, node: number, visited: Set<number>): void {
      if (visited.has(node)) return;
      visited.add(node);

      for (let nd of graph[node]) {
        visitConnectedComponents(graph, nd, visited);
      }
    }
    // test(connectedComponentCount);

  }
  {
    function connectedComponentCount(graph: Graph): number {
      const visited: Set<number> = new Set();
      let count = 0;
      for (let key in graph) {
        const node = Number(key);
        if (visited.has(node)) continue;
        visitConnectedComponents(graph, node, visited);
        count += 1;
      }
      return count;
    }

    function visitConnectedComponents(graph: Graph, node: number, visited: Set<number>): void {
      visited.add(node);

      for (let nd of graph[node]) {
        if (visited.has(nd)) continue;
        visitConnectedComponents(graph, nd, visited);
      }
    }
    // test(connectedComponentCount);

  }
}


function test(connectedComponentCount: any) {
  console.log(
    connectedComponentCount(data.test1)
  ); // expect count: 2, array: [ [ 0, 8, 5, 1 ], [ 2, 3, 4 ] ]


  console.log(
    connectedComponentCount(data.test2)
  ); // expect count: 3, array: [ [ 1, 2 ], [ 3 ], [ 4, 6, 5, 7, 8 ] ]

  console.log(
    connectedComponentCount(data.test3)
  ); // expect count: 1, array: [ [ 1, 2, 3 ] ]
};