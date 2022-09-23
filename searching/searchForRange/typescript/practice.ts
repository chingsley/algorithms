{
  {
    type Range = [number, number];

    function searchForRange(array: number[], target: number): Range {
      const result: Range = [-1, -1];

      let [i, j] = [0, array.length - 1];
      while (i <= j) {
        const mid = Math.floor((i + j) / 2);

        if (array[mid] === target && mid === 0) {
          result[0] = mid;
          break;
        } else if (array[mid] === target && array[mid - 1] !== target) {
          result[0] = mid;
          break;
        } else if (array[mid] < target) {
          i = mid + 1;
        } else {
          j = mid - 1;
        }
      }

      if (result[0] < 0) return result;

      [i, j] = [result[0], array.length - 1];
      while (i <= j) {
        const mid = Math.floor((i + j) / 2);

        if (array[mid] === target && mid === array.length - 1) {
          result[1] = mid;
          break;
        } else if (array[mid] === target && array[mid + 1] !== target) {
          result[1] = mid;
          break;
        } else if (array[mid] > target) {
          j = mid - 1;
        } else {
          i = mid + 1;
        }
      }

      return result;
    }

  }
  {
    type Range = [number, number];
    enum Position {
      Start = "START",
      End = "END",
    }

    // O(log(n)) time | O(1) space
    function searchForRange(array: number[], target: number): Range {
      const start = getIndex(Position.Start, 0, array.length - 1, array, target);
      const end = getIndex(Position.End, 0, array.length - 1, array, target);
      return [start, end];
    }

    function getIndex(iPos: Position, startIdx: number, endIdx: number, array: number[], target: number): number {
      let [leftIdx, rightIdx] = [startIdx, endIdx];
      while (leftIdx <= rightIdx) {
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (target < array[midIdx]) {
          rightIdx = midIdx - 1;
        } else if (target > array[midIdx]) {
          leftIdx = midIdx + 1;
        } else {
          if (iPos === Position.Start) {
            if (midIdx === 0 || array[midIdx - 1] !== target) {
              return midIdx;
            } else {
              rightIdx = midIdx - 1;
            }
          } else {
            if (midIdx === array.length - 1 || array[midIdx + 1] !== target) {
              return midIdx;
            } else {
              leftIdx = midIdx + 1;
            }
          }
        }
      }

      return -1;
    }
  }
}

export const __ = '__';