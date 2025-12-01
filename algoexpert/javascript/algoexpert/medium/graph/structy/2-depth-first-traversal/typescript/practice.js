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
        ;
        function depthFirstPrint(graph, source) {
            const res = [];
            const stack = [source];
            while (stack.length > 0) {
                const current = stack.pop();
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
        ;
        function depthFirstPrint(graph, source) {
            const array = [];
            dfsHelper(graph, source, array);
            return array;
        }
        function dfsHelper(graph, source, array) {
            array.push(source);
            for (let neighbor of graph[source]) {
                dfsHelper(graph, neighbor, array);
            }
        }
        // console.log(
        //   depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
        // );
    }
    { // ITERATION
        ;
        function depthFirstPrint(graph, source) {
            const arr = [];
            const stack = [source];
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
    { // RECURSION
        ;
        function depthFirstPrint(graph, source) {
            const arr = [];
            dft(graph, source, arr);
            return arr;
        }
        function dft(graph, source, arr) {
            arr.push(source);
            for (let node of graph[source]) {
                dft(graph, node, arr);
            }
        }
        // console.log(
        //   depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
        // );
    }
    { // RECURSION
        ;
        function depthFirstPrint(graph, source) {
            const arr = [source];
            for (let node of graph[source]) {
                const res = depthFirstPrint(graph, node);
                arr.push(...res);
            }
            return arr;
        }
        // console.log(
        //   depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
        // );
    }
    {
        function depthFirstPrint(graph, source) {
            const result = [source];
            for (let node of graph[source]) {
                result.push(...depthFirstPrint(graph, node));
            }
            return result;
        }
        console.log(depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
        );
    }
    {
        function depthFirstPrint(graph, source) {
            const result = [];
            dft(graph, source, result);
            return result;
        }
        function dft(graph, src, array) {
            array.push(src);
            for (let node of graph[src]) {
                dft(graph, node, array);
            }
        }
        // console.log(
        //   depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
        // );
    }
    {
        function depthFirstPrint(graph, source) {
            const stack = [source];
            const array = [];
            while (stack.length > 0) {
                const current = stack.pop();
                array.push(current);
                stack.push(...graph[current]);
            }
            return array;
        }
        console.log(depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
        );
    }
    {
        function depthFirstPrint(graph, source) {
            const array = [];
            dfsTraverse(graph, source, array);
            return array;
        }
        function dfsTraverse(graph, src, array) {
            array.push(src);
            for (let vtx of graph[src]) {
                dfsTraverse(graph, vtx, array);
            }
        }
        console.log(depthFirstPrint(graph, 'a') // expect [ 'a', 'b', 'd', 'f', 'c', 'e' ] or [ 'a', 'c', 'e', 'b', 'd', 'f' ]
        );
    }
}
export {};
