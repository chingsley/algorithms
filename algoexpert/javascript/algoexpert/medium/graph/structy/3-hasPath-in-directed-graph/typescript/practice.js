const graph_test_01 = {
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
        function hasPath(graph, src, dst) {
            if (src === dst)
                return true;
            for (let neb of graph[src]) {
                if (hasPath(graph, neb, dst) === true)
                    return true;
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
        function hasPath(graph, src, dst) {
            const stack = [src];
            while (stack.length > 0) {
                const current = stack.pop();
                if (current === dst)
                    return true;
                for (let node of graph[current])
                    stack.push(node);
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
        function hasPath(graph, src, dst) {
            const queue = [src];
            while (queue.length > 0) {
                const current = queue.shift();
                if (current === dst)
                    return true;
                for (let node of graph[current])
                    queue.push(node);
            }
            return false;
        }
        // console.log(
        //   hasPath(graph_test_01, 'f', 'k'), // expect true,
        //   hasPath(graph_test_01, 'f', 'j') // expect false
        // );
    }
    {
        function hasPath(graph, src, dst) {
            if (src === dst)
                return true;
            for (let node of graph[src]) {
                const res = hasPath(graph, node, dst);
                if (res === true)
                    return true;
            }
            return false;
        }
        ;
        // console.log(
        //   hasPath(graph_test_01, 'f', 'k'), // expect true,
        //   hasPath(graph_test_01, 'f', 'j') // expect false
        // );
    }
    {
        function hasPath(graph, src, dst) {
            if (src === dst)
                return true;
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
        function hasPath(graph, src, dst) {
            const stack = [src];
            while (stack.length > 0) {
                const current = stack.pop();
                if (current === dst)
                    return true;
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
        function hasPath(graph, src, dst) {
            const stack = [src];
            while (stack.length > 0) {
                const current = stack.pop();
                if (current === dst)
                    return true;
                stack.push(...graph[current]);
            }
            return false;
        }
    }
    {
        function hasPath(graph, src, dst) {
            const queue = [src];
            while (queue.length > 0) {
                const current = queue.shift();
                if (current === dst)
                    return true;
                queue.push(...graph[current]);
            }
            return false;
        }
    }
    {
        function hasPath(graph, src, dst) {
            return pathCheck(graph, src, dst);
        }
        function pathCheck(graph, src, dst) {
            if (src === dst)
                return true;
            for (let node of graph[src]) {
                if (pathCheck(graph, node, dst) === true) {
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
}
export {};
