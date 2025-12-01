import { buildGraph } from "../../4-edgelistToAdjancencyList/typescript/solution1";
/**
 * Question:
 * write a function, hasPath, that takes in an object representing adjacency list of an UNDIRECTED
 * acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether
 * or not there exists a directed path between the source (src) and destination (dst) nodes
 *
 * * Solution 2: Recursion
 *
 * Time/Space Complexity
 * Time: O(e)
 * Space: O(n)
 * Where: e = no. of edges, n = no. of nodes/vertices
 * Note: e = n^2
 *
 * @param edgeList Graph
 * @param src string
 * @param dst string
 * @returns boolean
 */
export function hasPath(edgeList, src, dst) {
    const graph = buildGraph(edgeList);
    return traverse(graph, src, dst);
}
export function traverse(graph, src, dst, visited = new Set()) {
    if (src === dst)
        return true;
    if (visited.has(src))
        return false;
    visited.add(src);
    for (let neighbor of graph[src]) {
        if (traverse(graph, neighbor, dst, visited) === true) {
            return true;
        }
    }
    return false;
}
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];
console.log(hasPath(edges, 'k', 'o'), // expect false,
hasPath(edges, 'i', 'l'));
