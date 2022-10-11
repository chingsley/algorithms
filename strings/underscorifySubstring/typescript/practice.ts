{
  {
    // O(n + m) time | O(n) space
    function underscorifySubstring(string: string, substring: string) {
      const positions = getUnderscorePositions(string, substring);
      const mergedPositions = mergeOverlappingIntervals(positions);
      const result = insertUnderscores(string, mergedPositions);
      return result;
    }

    // O(n + m) time | O(n) space
    function getUnderscorePositions(string: string, substring: string): number[][] {
      const res: number[][] = [];
      let i = 0;
      while (i < string.length) {
        i = string.indexOf(substring, i);
        if (i < 0) break;

        res.push([i, i + substring.length]);
        i = i + 1;
      }
      return res;
    }

    // O(n) time | O(n) space
    function mergeOverlappingIntervals(pos: number[][]): number[][] {
      const merged: number[][] = [pos[0]];
      for (let i = 1; i < pos.length; i++) {
        const [a, b] = merged[merged.length - 1];
        const [c, d] = pos[i];
        if (c <= b) {
          merged[merged.length - 1] = [a, d];
        } else {
          merged.push([c, d]);
        }
      }
      return merged;
    }

    // O(n) time | O(n) space
    function insertUnderscores(string: string, pos: number[][]) {
      const posSet = new Set(pos.reduce((acc, arr) => acc.concat(arr), []));
      const result: string[] = [];
      for (let i = 0; i <= string.length; i++) {
        if (posSet.has(i)) result.push('_');
        if (string[i]) result.push(string[i]);
      }

      return result.join('');
    }


    const string = "testthis is a testtest to see if testestest it works";
    const substring = "test";
    console.log(
      underscorifySubstring(string, substring)
    );
  }
}