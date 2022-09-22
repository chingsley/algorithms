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
}

export const __ = '__';