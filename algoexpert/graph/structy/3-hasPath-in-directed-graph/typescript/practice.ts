import * as _ from './solution1';

type Graph = { [key: string]: string[]; };

const graph_test_01: Graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

{
  { // RECURSION
    // O(e) time, O(n) space
    // e = no. of edges; n = no. of nodes
    function hasPath(graph: Graph, src: string, dst: string): boolean {
      if (src === dst) return true;

      for (let neb of graph[src]) {
        if (hasPath(graph, neb, dst) === true) return true;
      }

      return false;
    }

    // console.log(
    //   hasPath(graph_test_01, 'f', 'k'), // expect true,
    //   hasPath(graph_test_01, 'f', 'j') // expect false
    // );
  }
  { // ITERATION (DEPTH FIRST SEARCH)
    // O(e) time, O(n) space
    // e = no. of edges; n = no. of nodes
    function hasPath(graph: Graph, src: string, dst: string): boolean {
      const stack: string[] = [src];
      while (stack.length > 0) {
        const current = stack.pop()!;
        if (current === dst) return true;
        for (let node of graph[current]) stack.push(node);
      }

      return false;
    }

    // console.log(
    //   hasPath(graph_test_01, 'f', 'k'), // expect true,
    //   hasPath(graph_test_01, 'f', 'j') // expect false
    // );
  }
  { // ITERATION (BREADTH FIRST SEARCH)
    // O(e) time, O(n) space
    // e = no. of edges; n = no. of nodes
    function hasPath(graph: Graph, src: string, dst: string): boolean {
      const queue: string[] = [src];
      while (queue.length > 0) {
        const current = queue.shift()!;
        if (current === dst) return true;
        for (let node of graph[current]) queue.push(node);
      }

      return false;
    }

    // console.log(
    //   hasPath(graph_test_01, 'f', 'k'), // expect true,
    //   hasPath(graph_test_01, 'f', 'j') // expect false
    // );
  }
  {
    function hasPath(graph: Graph, src: string, dst: string): boolean {
      if (src === dst) return true;

      for (let node of graph[src]) {
        const res = hasPath(graph, node, dst);
        if (res === true) return true;
      }

      return false;
    }

    interface Graph { [key: string]: string[]; };
    // console.log(
    //   hasPath(graph_test_01, 'f', 'k'), // expect true,
    //   hasPath(graph_test_01, 'f', 'j') // expect false
    // );
  }
  {
    type Graph = { [key: string]: string[]; };

    function hasPath(graph: Graph, src: string, dst: string): boolean {
      if (src === dst) return true;

      for (let node of graph[src]) {
        if (hasPath(graph, node, dst) === true) {
          return true;
        }
      }

      return false;
    }

    // console.log(
    //   hasPath(graph_test_01, 'f', 'k'), // expect true,
    //   hasPath(graph_test_01, 'f', 'j') // expect false
    // );
  }
  {
    type Graph = { [key: string]: string[]; };

    function hasPath(graph: Graph, src: string, dst: string): boolean {
      const stack = [src];
      while (stack.length > 0) {
        const current = stack.pop()!;
        if (current === dst) return true;
        stack.push(...graph[current]);
      }

      return false;
    }

    // console.log(
    //   hasPath(graph_test_01, 'f', 'k'), // expect true,
    //   hasPath(graph_test_01, 'f', 'j') // expect false
    // );
  }
  {
    function hasPath(graph: Graph, src: string, dst: string): boolean {
      const stack = [src];
      while (stack.length > 0) {
        const current = stack.pop()!;
        if (current === dst) return true;
        stack.push(...graph[current]);
      }

      return false;
    }

    type Graph = { [key: string]: string[]; };
  }
  {
    function hasPath(graph: Graph, src: string, dst: string): boolean {
      const queue = [src];
      while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;
        queue.push(...graph[current]);
      }

      return false;
    }

    type Graph = { [key: string]: string[]; };
  }
  {
    function hasPath(graph: Graph, src: string, dst: string): boolean {
      return pathCheck(graph, src, dst);
    }

    function pathCheck(graph: Graph, src: string, dst: string): boolean {
      if (src === dst) return true;

      for (let node of graph[src]) {
        if (pathCheck(graph, node, dst) === true) {
          return true;
        }
      }

      return false;
    }

    type Graph = { [key: string]: string[]; };
    // console.log(
    //   hasPath(graph_test_01, 'f', 'k'), // expect true,
    //   hasPath(graph_test_01, 'f', 'j') // expect false
    // );
  }
}