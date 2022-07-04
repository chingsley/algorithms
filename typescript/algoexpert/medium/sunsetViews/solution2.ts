enum Direction {
  West = "WEST",
  East = "EAST"
}

/**
 * Time: O(n)
 * Space: O(n)
 * @param buildings n
 * @param direction 
 * @returns number[]
 */
export function sunsetViews(buildings: number[], direction: Direction) {
  const result: number[] = [];
  if (direction === Direction.West) {
    traverseLeftToRight(buildings, result);
  } else {
    traverseRightToLeft(buildings, result);
    result.reverse();
  }

  return result;
}

function traverseLeftToRight(buildings: number[], result: number[]) {
  let runningMax = 0;
  for (let i = 0; i < buildings.length; i++) {
    if (buildings[i] > runningMax) {
      result.push(i);
      runningMax = buildings[i];
    }
  }
}

function traverseRightToLeft(buildings: number[], result: number[]) {
  let runningMax = 0;
  for (let i = buildings.length - 1; i >= 0; i--) {
    if (buildings[i] > runningMax) {
      result.push(i);
      runningMax = buildings[i];
    }
  }
}


