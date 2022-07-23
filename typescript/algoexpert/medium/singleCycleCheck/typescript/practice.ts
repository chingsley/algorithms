{
  {
    function hasSingleCycle(array: number[]) {
      const visited: Set<number> = new Set();

      const startIdx = 0;
      let i = startIdx;
      visited.add(i);
      while (true) {
        let nextIdx = i + array[i];
        while (nextIdx < 0) nextIdx += array.length;
        while (nextIdx >= array.length) nextIdx = nextIdx % array.length;

        if (visited.has(nextIdx)) {
          if (nextIdx === startIdx && array.length === visited.size) {
            return true;
          } else {
            return false;
          }
        }

        visited.add(nextIdx);
        i = nextIdx;
      }
    }
  }
  {
    function hasSingleCycle(array: number[]) {
      const visited: Set<number> = new Set();

      let startIdx = 0;
      visited.add(startIdx);
      let i = startIdx;
      while (true) {
        let nextIdx = i + array[i];
        while (nextIdx < 0) nextIdx += array.length;
        while (nextIdx >= array.length) nextIdx -= array.length;

        if (visited.has(nextIdx)) {
          if (visited.size === array.length && nextIdx === startIdx) {
            return true;
          } else {
            return false;
          }
        }
        visited.add(nextIdx);
        i = nextIdx; // if you forget this, the solution will be wrong

      }
    }
  }
}

export const ___ = '___';