function buildGraph(edgeList) {
    const graph = {};
    for (const edge of edgeList) {
        const [nodeA, nodeB] = edge;
        if (!(nodeA in graph))
            graph[nodeA] = [];
        if (!(nodeB in graph))
            graph[nodeB] = [];
        graph[nodeA].push(nodeB);
        graph[nodeB].push(nodeA);
    }
    return graph;
}
;
const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];
{
    {
        function shortestPath(edgeList, src, dst) {
            const graph = buildGraph(edgeList);
            const visited = new Set();
            const queue = [[src, [src]]];
            while (queue.length > 0) {
                const [current, pathSoFar] = queue.shift();
                if (visited.has(current))
                    continue;
                visited.add(current);
                if (current === dst)
                    return pathSoFar;
                for (let node of graph[current]) {
                    if (!visited.has(node)) {
                        queue.push([node, [...pathSoFar, node]]);
                    }
                }
            }
            return [];
        }
        ;
        function buildGraph(edgeList) {
            const graph = {};
            for (let edge of edgeList) {
                const [a, b] = edge;
                if (!(a in graph))
                    graph[a] = [];
                if (!(b in graph))
                    graph[b] = [];
                graph[a].push(b);
                graph[b].push(a);
            }
            return graph;
        }
        // console.log(
        //   shortestPath(edges, 'w', 'z'), // expect [ 'w', 'v', 'z' ],
        // );
    }
    {
        function shortestPath(edgeList, src, dst) {
            const graph = buildGraph(edgeList);
            const visited = new Set();
            const queue = [[src, [src]]];
            while (queue.length > 0) {
                const [current, path] = queue.shift();
                if (visited.has(current))
                    continue;
                visited.add(current);
                if (current === dst)
                    return path;
                for (let node of graph[current]) {
                    queue.push([node, [...path, node]]);
                }
            }
            return []; // if theres is no path b/w src and dst
        }
        // console.log(
        //   shortestPath(edges, 'w', 'z'), // expect ['w', 'v', 'z'],
        // );
    }
    {
        function shortestPath(edgeList, src, dst) {
            const graph = buildGraph(edgeList);
            const visited = new Set();
            const queue = [[src, [src]]];
            while (queue.length > 0) {
                const [current, path] = queue.shift();
                if (visited.has(current))
                    continue;
                visited.add(current);
                if (current === dst)
                    return path;
                for (let node of graph[current]) {
                    queue.push([
                        node,
                        [...path, node],
                    ]);
                }
            }
            return [];
        }
        console.log(shortestPath(edges, 'w', 'z'));
    }
}
export const _ = '_';
