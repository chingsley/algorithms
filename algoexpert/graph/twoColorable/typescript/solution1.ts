// O(v + e) time | O(v) spave
// v = no. of vertices (no. of nodes), e = no. of edges
export function twoColorable(edges: number[][]) {
  const colors: Array<boolean | null> = new Array(edges.length).fill(null);
  colors[0] = true;
  const stack: number[] = [0];
  while (stack.length > 0) {
    const vi = stack.pop() as number;
    for (let v of edges[vi]) {
      if (colors[v] === colors[vi]) return false;
      if (colors[v] === null) {
        colors[v] = !colors[vi];
        stack.push(v);
      }
    }
  }

  return true;
}
