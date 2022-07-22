import * as _ from './solution1';

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};


{
  { // ITERATION
    interface Graph { [key: string]: string[]; };

    function depthFirstPrint(graph: Graph, source: string): string[] {
      const res: string[] = [];
      const stack: string[] = [source];

      while (stack.length > 0) {
        const current = stack.pop()!;
        res.push(current);
        for (let neighbor of graph[current]) {
          stack.push(neighbor);
        }
      }
      return res;
    }
    // console.log(
    //   depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
    // );
  }
  { // RECURSION
    interface Graph { [key: string]: string[]; };

    function depthFirstPrint(graph: Graph, source: string): string[] {
      const array: string[] = [];
      dfsHelper(graph, source, array);
      return array;
    }

    function dfsHelper(graph: Graph, source: string, array: string[]) {
      array.push(source);
      for (let neighbor of graph[source]) {
        dfsHelper(graph, neighbor, array);
      }

    }

    // console.log(
    //   depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
    // );
  }
  {// ITERATION
    interface Graph { [key: string]: string[]; };

    function depthFirstPrint(graph: Graph, source: string): string[] {
      const arr: string[] = [];
      const stack: string[] = [source];

      while (stack.length > 0) {
        const current = stack.pop();
        arr.push(current);

        for (let node of graph[current]) {
          stack.push(node);
        }
      }

      return arr;
    }

    // console.log(
    //   depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
    // );
  }
  {// RECURSION
    interface Graph { [key: string]: string[]; };

    function depthFirstPrint(graph: Graph, source: string): string[] {
      const arr: string[] = [];
      dft(graph, source, arr);
      return arr;
    }

    function dft(graph: Graph, source: string, arr: string[]) {
      arr.push(source);
      for (let node of graph[source]) {
        dft(graph, node, arr);
      }
    }

    // console.log(
    //   depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
    // );
  }
  {// RECURSION
    interface Graph { [key: string]: string[]; };

    function depthFirstPrint(graph: Graph, source: string): string[] {
      const arr: string[] = [source];
      for (let node of graph[source]) {
        const res = depthFirstPrint(graph, node);
        arr.push(...res);
      }

      return arr;
    }

    console.log(
      depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
    );
  }
}
