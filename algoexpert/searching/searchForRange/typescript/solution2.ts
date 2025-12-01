type Range = [number, number];
enum Direction { Left = 'LEFT', Right = 'RIGHT' };

// O(log(n)) time | O(1) space;
export function searchForRange(array: number[], target: number): Range {
  const leftEnd = quickSearchTowards(Direction.Left, array, target);
  const rightEnd = quickSearchTowards(Direction.Right, array, target);
  return [leftEnd, rightEnd];
}


function quickSearchTowards(direction: Direction, array: number[], target: number) {
  let [i, j] = [0, array.length - 1];
  while (i <= j) {
    const midIdx = Math.floor((i + j) / 2);
    if (array[midIdx] > target) {
      j = midIdx - 1;
    } else if (array[midIdx] < target) {
      i = midIdx + 1;
    } else {
      if (direction === Direction.Left) {
        if (array[midIdx - 1] !== target) {
          return midIdx;
        } else {
          j = midIdx - 1;
        }
      } else {
        if (array[midIdx + 1] !== target) {
          return midIdx;
        } else {
          i = midIdx + 1;
        }
      }
    }
  }

  return -1;
}