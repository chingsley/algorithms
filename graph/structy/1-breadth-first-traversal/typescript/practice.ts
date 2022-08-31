export const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

{
  {


    interface Graph { [key: string]: string[]; };

    function breadthFirstPrint(graph: Graph, source: string): string[] {
      const res: string[] = [];
      const queue: string[] = [source];

      while (queue.length > 0) {
        const current = queue.shift()!;
        res.push(current);
        for (let neighbor of graph[current]) {
          queue.push(neighbor);
        }
      }
      return res;
    }
    // console.log(
    //   breadthFirstPrint(graph, 'a')
    // );
    // expect [ 'a', 'c', 'b', 'e', 'd', 'f' ] or [ 'a', 'b', 'c', 'd', 'e', 'f' ]
  }
  {
    interface Graph { [key: string]: string[]; };

    function breadthFirstPrint(graph: Graph, src: string) {
      const arr: string[] = [];
      const queue: string[] = [src];

      while (queue.length > 0) {
        const current = queue.shift();
        arr.push(current);
        for (let node of graph[current]) {
          queue.push(node);
        }
      }

      return arr;
    }
    // console.log(
    //   breadthFirstPrint(graph, 'a') // expect [ 'a', 'c', 'b', 'e', 'd', 'f' ] or [ 'a', 'b', 'c', 'd', 'e', 'f' ]
    // );
  }
  {
    function breadthFirstPrint(graph: Graph, src: string) {
      const queue = [src];
      const array: string[] = [];

      while (queue.length > 0) {
        const current = queue.shift();
        array.push(current);

        queue.push(...graph[current]);
      }

      return array;
    }
    interface Graph { [key: string]: string[]; };

    console.log(
      breadthFirstPrint(graph, 'a') // expect [ 'a', 'c', 'b', 'e', 'd', 'f' ] or [ 'a', 'b', 'c', 'd', 'e', 'f' ]
    );

  }
}



