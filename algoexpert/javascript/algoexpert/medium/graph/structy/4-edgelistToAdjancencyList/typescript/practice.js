;
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];
{
    {
        function buildGraph(edgeList) {
            const graph = {};
            for (let edge of edgeList) {
                const [nodeA, nodeB] = edge;
                if (!(nodeA in graph))
                    graph[nodeA] = [];
                if (!(nodeB in graph))
                    graph[nodeB] = [];
                // NOTE: pushing each in the other is only the valid for undirected graph. For a directed graph, only one push will happen depending on the instruction
                graph[nodeA].push(nodeB);
                graph[nodeB].push(nodeA);
            }
            return graph;
        }
        // console.log(
        //   buildGraph(edges)
        // );
    }
    {
        function buildGraph(edgeList) {
            const graph = {};
            for (let edge of edgeList) {
                const [nodeA, nodeB] = edge;
                if (!(nodeA in graph))
                    graph[nodeA] = [];
                if (!(nodeB in graph))
                    graph[nodeB] = [];
                // NOTE: pushing each in the other is only the valid for undirected graph. For a directed graph, only one push will happen depending on the instruction
                graph[nodeA].push(nodeB);
                graph[nodeB].push(nodeA);
            }
            return graph;
        }
        // console.log(
        //   buildGraph(edges)
        // );
    }
    {
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
        //   buildGraph(edges)
        // );
    }
    {
        function buildGraph(edgeList) {
            const graph = {};
            for (let [a, b] of edges) {
                if (!(a in graph))
                    graph[a] = [];
                if (!(b in graph))
                    graph[b] = [];
                graph[a].push(b);
                graph[b].push(a);
            }
            return graph;
        }
    }
    {
        function buildGraph(edgeList) {
            const graph = {};
            for (let [a, b] of edges) {
                if (!(a in graph))
                    graph[a] = [];
                if (!(b in graph))
                    graph[b] = [];
                graph[a].push(b);
                graph[b].push(a);
            }
            return graph;
        }
        console.log(buildGraph(edges));
    }
}
export {};
