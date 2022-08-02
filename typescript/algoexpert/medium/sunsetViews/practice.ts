{
  {
    enum Direction {
      East = 'EAST',
      West = 'WEST',
    }
    // O(n) time | O(n) space
    // n = length if buildings array
    function sunsetViews(buildings: number[], direction: Direction) {
      if (buildings.length === 0) return [];

      let idx = direction === Direction.West ? 0 : buildings.length - 1;
      let step = direction === Direction.West ? 1 : -1;
      let result = [idx];
      idx += step;
      while (idx >= 0 && idx < buildings.length) {
        if (buildings[idx] > buildings[result[result.length - 1]]) {
          result.push(idx);
        }

        idx += step;
      }

      return direction === Direction.West ? result : result.reverse();
    }
  }
  {
    enum Direction {
      East = 'EAST',
      West = 'WEST',
    }

    function sunsetViews(buildings: number[], direction: Direction) {
      if (buildings.length === 0) return [];
      let result: number[] = [];

      if (direction === Direction.West) {
        result = traverse(buildings, 0, 1);
      } else {
        result = traverse(buildings, buildings.length - 1, -1);
        result.reverse();
      }

      return result;
    }

    function traverse(buildings: number[], startIdx: number, step: number): number[] {
      let idx = startIdx;
      let result = [idx];
      idx = idx + step;
      while (idx >= 0 && idx < buildings.length) {
        if (buildings[idx] > buildings[result[result.length - 1]]) {
          result.push(idx);
        }

        idx += step;
      }

      return result;
    }
  }
  {
    enum Direction {
      East = 'EAST',
      West = 'WEST',
    }
    function sunsetViews(buildings: number[], direction: Direction) {
      if (buildings.length === 0) return [];

      let idx = direction === Direction.West ? 0 : buildings.length - 1;
      let step = direction === Direction.West ? 1 : -1;

      const result = [idx];
      traverse(idx + step, buildings, step, result);

      return direction === Direction.West ? result : result.reverse();
    }


    function traverse(idx: number, buildings: number[], step: number, result: number[]) {
      if (idx < 0 || idx >= buildings.length) return;

      if (buildings[idx] > buildings[result[result.length - 1]]) {
        result.push(idx);
      }
      traverse(idx + step, buildings, step, result);
    }
  }
  {
    enum Direction {
      East = 'EAST',
      West = 'WEST',
    }

    function sunsetViews(buildings: number[], direction: Direction) {
      if (buildings.length === 0) return [];
      const isWest = direction === Direction.West;

      let startIdx = isWest ? 0 : buildings.length - 1;
      let step = isWest ? 1 : -1;

      let result = [startIdx];
      let idx = startIdx + step;
      while (idx >= 0 && idx < buildings.length) {
        if (buildings[idx] > buildings[result[result.length - 1]]) {
          result.push(idx);
        }
        idx += step;
      }

      return isWest ? result : result.reverse();
    }
  }
}

export const ___ = '___';