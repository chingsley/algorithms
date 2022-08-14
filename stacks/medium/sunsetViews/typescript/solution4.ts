// *** Recursion ***//
export enum Direction {
  East = 'EAST',
  West = 'WEST',
}

// O(n) time, O(n) space
export function sunsetViews(buildings: number[], direction: Direction) {
  const startIdx = direction === Direction.West ? 0 : buildings.length - 1;
  const step = direction === Direction.West ? 1 : -1;
  const result: number[] = [];
  traverseBuildings(buildings, result, startIdx, step, 0);
  return direction === Direction.West ? result : result.reverse();
}

function traverseBuildings(buildings: number[], result: number[], idx: number, step: number, runningMax: number) {
  if (idx < 0 || idx > buildings.length - 1) return;
  if (buildings[idx] > runningMax) {
    result.push(idx);
    runningMax = buildings[idx];
  }
  traverseBuildings(buildings, result, idx + step, step, runningMax);
}