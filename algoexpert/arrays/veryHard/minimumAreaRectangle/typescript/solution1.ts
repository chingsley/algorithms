// O(n^2) time | O(n) space
export function minimumAreaRectangle(points: number[][]): number {
  let min = Infinity;
  const counts: { [key: number]: number[]; } = {};
  for (let [x, y] of points) {
    if (!(x in counts)) counts[x] = [];
    counts[x].push(y);
  }

  const edges: { [key: string]: number; } = {};
  for (let key in counts) {
    const x = Number(key);
    const ys = counts[x].sort((a, b) => a - b);
    for (let i = 1; i < ys.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        const y1 = ys[j];
        const y2 = ys[i];
        const ky = [y1, y2].join(',');
        if ((ky in edges)) {
          const area = Math.abs(x - edges[ky]) * Math.abs(y1 - y2);
          console.log({ x, 'edges[ky]': edges[ky], y1, y2, area });
          if (area < min) min = area;
        }
        edges[ky] = x;
      }
    }
  }

  console.log({ min });
  return min < Infinity ? min : 0;
}