export function cycleInGraph(edges: number[][]) {
  for (let i = 0; i < edges.length; i++) {
    if (explore(edges, i) === true) {
      return true;
    }
  }

  return false;
}

function explore(edges: number[][], startingVtx: number) {
  const stack: number[] = [...edges[startingVtx]];
  const visited: Set<string> = new Set();

  while (stack.length > 0) {
    const currentVertex = stack.pop()!;

    if (currentVertex === startingVtx) {
      return true;
    }

    visited.add(String(currentVertex));

    for (let vertex of edges[currentVertex]) {
      if (!visited.has(String(vertex))) {
        stack.push(vertex);
      }
    }
  }

  return false;
}


const edges = [
  [1, 3],
  [2, 3, 4],
  [0],
  [],
  [2, 5],
  []
];

const edges2 = [
  [1, 2],
  [2],
  []
];

const edges3 = [
  [1],
  [2],
  [4, 3],
  [4],
  []
];

console.log(
  cycleInGraph(edges3)
);
