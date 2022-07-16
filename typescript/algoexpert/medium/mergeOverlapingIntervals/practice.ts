{
  {
    // O(nlog(n)) time, O(n) space
    function mergeOverlappingIntervals(array: number[][]) {
      array.sort(([a], [b]) => a - b);
      const result: number[][] = [array[0]];

      for (let i = 1; i < array.length; i++) {
        const [a1, a2] = result[result.length - 1];
        const [b1, b2] = array[i]; // [a1, a2], [b1, b2]
        if (a2 >= b1) {
          result[result.length - 1] = [a1, Math.max(a2, b2)];
        } else {
          result.push(array[i]);
        }
      }

      return result;
    }
  }
}