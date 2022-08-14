export enum Direction {
  East = 'EAST',
  West = 'WEST',
}

export function sunsetViews(buildings: number[], direction: Direction) {
  const startIdx = direction === Direction.West ? 0 : buildings.length - 1;
  const endIdx = direction === Direction.West ? buildings.length - 1 : 0;
  const step = direction === Direction.West ? 1 : -1;

  const result = [];
  let idx = startIdx;
  let runningMax = 0;
  while (idx <= endIdx) {
    if (buildings[idx] > runningMax) {
      result.push(idx);
      runningMax = buildings[idx];
    }
    idx += step;
  }

  return direction === Direction.West ? result : result.reverse();
}