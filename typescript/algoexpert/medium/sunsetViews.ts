export enum Direction {
  East = 'EAST',
  West = 'WEST',
}

// O(n) time | O(n) space
export function sunsetViews(buildings: number[], direction: Direction) {
  const output = [];
  const startIdx = direction === Direction.West ? 0 : buildings.length - 1;
  const step =  direction === Direction.West ? 1 : -1;
  let idx = startIdx;
  let runningMax = 0; // starts with zero b/c the question says that all buildings has positive heights, that is greater than 0

  while(idx >= 0 && idx < buildings.length) {
    if(buildings[idx] > runningMax) {
      output.push(idx);
      runningMax = buildings[idx]
    }

    idx = idx + step;
  }
  return direction === Direction.West ? output : output.reverse();
}
