/**
 * O(v+e) time | O(v) space - where v is the number of 
 * vertices and e is the nuymber of edges in the graph
 */
function cycleInGraph(edges: number[][]): boolean{
  const numberOfNodes = edges.length;
  const visited: boolean[] = new Array(numberOfNodes).fill(false)
  const  currentlyInStack: boolean[] = new Array(numberOfNodes).fill(false);

  for (let iNode = 0; iNode < numberOfNodes; iNode++) {
    if (visited[iNode]) {
      continue;
    }
    const containsCycle = isNodeInCycle(iNode, edges, visited, currentlyInStack);
    if(containsCycle) {
      return true;
    }
  }
return false;
}

function isNodeInCycle(iNode: number, edges: number[][], visited: boolean[], currentlyInStack: boolean[]): boolean {
  visited[iNode] = true;
  currentlyInStack[iNode] = true;

  const neighbors: number[] = edges[iNode];
  for(let neighbbor of neighbors) {
    if(!visited[neighbbor]) {
      const containsCycle = isNodeInCycle(neighbbor, edges, visited, currentlyInStack);
      if(containsCycle) {
        return true;
      }
    } else if(currentlyInStack[neighbbor]) {
      return true;
    }
  }

  currentlyInStack[iNode] = false;

  return false;
}