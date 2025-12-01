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
            const queue = [[src, 0]];
            const visited = {};
            while (queue.length > 0) {
                const [node, distance] = queue.shift();
                visited[node] = node;
                if (node === dst)
                    return distance;
                for (let childNode of graph[node]) {
                    if (childNode in visited)
                        continue;
                    queue.push([childNode, distance + 1]);
                }
            }
            return -1;
        }
        // console.log(
        //   shortestPath(edges, 'w', 'z'), // expect 2,
        // );
    }
    {
        function shortestPath(edgeList, src, dst) {
            const graph = buildGraph(edgeList);
            const queue = [[src, 0]];
            const visited = new Set();
            while (queue.length > 0) {
                const [current, length] = queue.shift();
                if (visited.has(current))
                    continue;
                visited.add(current);
                if (current === dst)
                    return length;
                for (let node of graph[current]) {
                    if (!visited.has(node)) {
                        queue.push([node, length + 1]);
                    }
                }
            }
            return -1;
        }
        ;
        // console.log(
        //   shortestPath(edges, 'w', 'z'), // expect 2,
        // );
    }
    {
        function shortestPath(edgeList, src, dst) {
            const graph = buildGraph(edgeList);
            const visited = new Set();
            const queue = [[src, 0]];
            while (queue.length > 0) {
                const [current, distance] = queue.shift();
                if (visited.has(current))
                    continue;
                visited.add(current);
                if (current === dst)
                    return distance;
                for (let node of graph[current]) {
                    queue.push([node, distance + 1]);
                }
            }
            return -1; // if theres is no path at all
        }
        console.log(shortestPath(edges, 'w', 'z'));
    }
    {
        function shortestPath(edgeList, src, dst) {
            const graph = buildGraph(edgeList);
            const visited = new Set();
            const queue = [[src, [src], 0]];
            while (queue.length > 0) {
                const [current, path, distance] = queue.shift();
                if (visited.has(current))
                    continue;
                visited.add(current);
                console.log([current, path, distance]);
                if (current === dst)
                    return distance;
                for (let node of graph[current]) {
                    queue.push([
                        node,
                        [...path, node],
                        distance + 1
                    ]);
                }
            }
            return -1;
        }
        console.log(shortestPath(edges, 'w', 'z'));
    }
}
export const _ = '_';
