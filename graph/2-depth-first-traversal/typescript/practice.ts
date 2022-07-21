import * as _ from './solution1';
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
    const graph = {
      a: ['c', 'b'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: [],
      f: []
    };

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

    const graph = {
      a: ['c', 'b'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: [],
      f: []
    };

    console.log(
      depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
    );
  }
}
