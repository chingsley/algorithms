/**
 * O(v+e) time | O(v) space - where v is the number of
 * vertices and e is the nuymber of edges in the graph
 */
function cycleInGraph(edges) {
    const numberOfNodes = edges.length;
    const visited = new Array(numberOfNodes).fill(false);
    const currentlyInStack = new Array(numberOfNodes).fill(false);
    for (let iNode = 0; iNode < numberOfNodes; iNode++) {
        if (visited[iNode]) {
            continue;
        }
        const containsCycle = isNodeInCycle(iNode, edges, visited, currentlyInStack);
        if (containsCycle) {
            return true;
        }
    }
    return false;
}
function isNodeInCycle(iNode, edges, visited, currentlyInStack) {
    visited[iNode] = true;
    currentlyInStack[iNode] = true;
    const neighbors = edges[iNode];
    for (let neighbbor of neighbors) {
        if (!visited[neighbbor]) {
            const containsCycle = isNodeInCycle(neighbbor, edges, visited, currentlyInStack);
            if (containsCycle) {
                return true;
            }
        }
        else if (currentlyInStack[neighbbor]) {
            return true;
        }
    }
    currentlyInStack[iNode] = false;
    return false;
}
// SOLUTION 2:
{
    const [WHITE, GREY, BLACK] = [0, 1, 2];
    function cycleInGraphV2(edges) {
        const numberOfNodes = edges.length;
        const colors = new Array(numberOfNodes).fill(WHITE);
        for (let iNode = 0; iNode < numberOfNodes; iNode++) {
            if (colors[iNode] != WHITE) {
                continue;
            }
            const containsCycle = traverseAndColorNodes(iNode, edges, colors);
            if (containsCycle) {
                return true;
            }
        }
        return false;
    }
    function traverseAndColorNodes(iNode, edges, colors) {
        colors[iNode] = GREY;
        const iNeighbors = edges[iNode];
        for (let iNeighbor of iNeighbors) {
            const iNeighborColor = colors[iNeighbor];
            if (iNeighbor === GREY) {
                return true;
            }
            if (iNeighborColor === BLACK) {
                continue;
            }
            const containsCycle = traverseAndColorNodes(iNeighbor, edges, colors);
            if (containsCycle) {
                return false;
            }
        }
        colors[iNode] = BLACK;
        return false;
    }
}
