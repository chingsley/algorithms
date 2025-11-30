/**
 * Question:
 *  Write a function, connectedComponents, that takes in the
 *  the adjancency list of an undirected graph. The function should
 *  return the array of connected components within the graph.
 *
 * Solution 2: Iteration (Depth First Search Using Stack)
 *
 * Time: O(e)
 * Space: O(n)
 * Where: e = no. of edges in the graph
 *        n = no. of nodes in the graph
 *
 * @param graph Grahp
 * @returns number
 */
export function connectedComponents(graph) {
    const visited = new Set();
    const result = [];
    for (let key in graph) {
        const components = depthFirstTraverse(graph, Number(key), visited);
        if (components.length > 0) {
            result.push(components);
        }
    }
    return result;
}
function depthFirstTraverse(graph, node, visited = new Set()) {
    if (visited.has(String(node)))
        return [];
    const stack = [node];
    const components = [];
    while (stack.length > 0) {
        const current = stack.pop();
        components.push(current);
        visited.add(String(current));
        for (let neighbor of graph[current]) {
            if (!visited.has(String(neighbor))) {
                stack.push(neighbor);
            }
        }
    }
    return components;
}
const graph = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
};
console.log(connectedComponents(graph));
