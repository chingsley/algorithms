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
        ;
        function breadthFirstPrint(graph, source) {
            const res = [];
            const queue = [source];
            while (queue.length > 0) {
                const current = queue.shift();
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
        ;
        function breadthFirstPrint(graph, src) {
            const arr = [];
            const queue = [src];
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
        function breadthFirstPrint(graph, src) {
            const queue = [src];
            const array = [];
            while (queue.length > 0) {
                const current = queue.shift();
                array.push(current);
                queue.push(...graph[current]);
            }
            return array;
        }
        ;
        console.log(breadthFirstPrint(graph, 'a') // expect [ 'a', 'c', 'b', 'e', 'd', 'f' ] or [ 'a', 'b', 'c', 'd', 'e', 'f' ]
        );
    }
}
