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
  {
    // O(n + m) time | O(n) space
    // n = length of string | m = length os substring
    function underscorifySubstring(string: string, substring: string) {
      const underscorePostions = getUnderscorePositions(string, substring);
      const mergedPositions = mergeUnderscorePositions(underscorePostions);
      return insertUnderscores(string, mergedPositions);
    }

    function getUnderscorePositions(string: string, substring: string): number[][] {
      const pos: number[][] = [];
      let i = 0;
      while (i < string.length) {
        const start = string.indexOf(substring, i);
        if (start < 0) break;

        pos.push([start, start + substring.length]);
        i = start + 1;
      }

      return pos;
    }

    function mergeUnderscorePositions(pos: number[][]): number[][] {
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

    function insertUnderscores(string: string, pos: number[][]): string {
      const res: string[] = [];
      const posSet = new Set(pos.reduce((acc, arr) => acc.concat(arr), []));
      for (let i = 0; i <= string.length; i++) {
        if (posSet.has(i)) res.push('_');
        if (i < string.length) res.push(string[i]);
      }

      return res.join('');
    }
  }
  {
    // O(n + m) time | O(n) space
    // n = length of string | m = length os substring
    function underscorifySubstring(string: string, substring: string) {
      const underscorePostions = getUnderscorePositions(string, substring);
      const mergedPositions = mergeUnderscorePositions(underscorePostions);
      return insertUnderscores(string, mergedPositions);
    }

    function getUnderscorePositions(string: string, substring: string): number[][] {
      const pos: number[][] = [];
      let i = 0;
      while (i < string.length) {
        const start = string.indexOf(substring, i);
        if (start < 0) break;

        pos.push([start, start + substring.length]);
        i = start + 1;
      }

      return pos;
    }

    function mergeUnderscorePositions(pos: number[][]): number[][] {
      if (pos.length === 0) return [];

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

    function insertUnderscores(string: string, pos: number[][]): string {
      if (pos.length === 0) return string;

      const res: string[] = [];
      let [row, col] = [0, 0];
      // console.log(pos);
      for (let i = 0; i <= string.length; i++) {
        // console.log([row, col])
        if (row < pos.length && i === pos[row][col]) {
          res.push('_');
          if (col === 0) {
            col += 1;
          } else {// i.e if col === 1
            [row, col] = [row + 1, 0]; // go to next row; and reset col to 0
          }

        }
        if (i < string.length) res.push(string[i]);
      }

      return res.join('');
    }
  }
  {
    // Avg. Case: O(s + b) time | O(s) space
    // s = length of the string | b = length of substring
    function underscorifySubstring(string: string, substring: string) {
      const positions = getUnderscorePositions(string, substring);
      const mergedPos = mergeOverlappingPositions(positions);
      return insertUnderscores(string, mergedPos);
    }

    function getUnderscorePositions(string: string, substring: string) { // O(s) time | O(s) space
      const positions: number[][] = [];
      let i = 0;
      while (i < string.length) {
        i = string.indexOf(substring, i);
        if (i < 0) break;
        positions.push([i, i + substring.length]);
        i += 1;
      }
      return positions;
    }

    function mergeOverlappingPositions(pos: number[][]) {// O(s) time | O(s) space
      if (pos.length < 1) return [];

      const merged: number[][] = [[...pos[0]]];
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

    function insertUnderscores(string: string, mergedPos: number[][]) { // O(s) time | O(s) space
      if (mergedPos.length < 1) return string;

      const posSet = new Set(mergedPos.reduce((acc, arr) => acc.concat(arr)));
      const resArr: string[] = [];
      for (let i = 0; i <= string.length; i++) {
        if (posSet.has(i)) resArr.push('_');
        if (i < string.length) resArr.push(string[i]);
      }
      return resArr.join('');
    }
  }
  {
    // Avg. Case: O(s + b) time (see algoexpert video work-through for explanations) | O(s) space
    // s = length of the string | b = length of substring
    function underscorifySubstring(string: string, substring: string) {
      const positions = getUnderscorePositions(string, substring);
      const mergedPos = mergeOverlappingPositions(positions);
      return insertUnderscores(string, mergedPos);
    }

    function getUnderscorePositions(string: string, substring: string) { // O(s) time | O(s) space
      const positions: number[][] = [];
      let i = 0;
      while (i < string.length) {
        i = string.indexOf(substring, i); // O(s + b) time
        if (i < 0) break;
        positions.push([i, i + substring.length]);
        i += 1;
      }
      return positions;
    }

    function mergeOverlappingPositions(pos: number[][]) {// O(s) time | O(s) space
      const merged: number[][] = [pos[0] || []];
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

    function insertUnderscores(string: string, mergedPos: number[][]) { // O(s) time | O(s) space  
      const resArr: string[] = [];
      let [row, col] = [0, 0];
      for (let i = 0; i <= string.length; i++) {
        if (row < mergedPos.length && i === mergedPos[row][col]) {
          resArr.push('_');
          if (col === 0) {
            col += 1;
          } else {
            [row, col] = [row + 1, 0];
          }
        }
        if (i < string.length) resArr.push(string[i]);
      }
      return resArr.join('');
    }
  }
  {
    // Avg. Case: (n + m) time | O(n) space
    // n = length of string | m = length of substring
    function underscorifySubstring(string: string, substring: string) {
      const positions = getUnderscorePositions(string, substring);
      const mergedPositions = mergeOverlappingPositions(positions);
      return insertUnderscores(string, mergedPositions);
    }

    function getUnderscorePositions(string: string, substring: string) {
      const positions: number[][] = [];
      let i = 0;
      while (i < string.length) {
        i = string.indexOf(substring, i);
        if (i < 0) break;

        positions.push([i, i + substring.length]);
        i += 1;
      }

      return positions;
    }

    function mergeOverlappingPositions(positions: number[][]) {
      if (positions.length === 0) return [];

      const merged: number[][] = [positions[0]];
      for (let i = 1; i < positions.length; i++) {
        const [a, b] = merged[merged.length - 1];
        const [c, d] = positions[i];
        if (c <= b) {
          merged[merged.length - 1] = [a, d];
        } else {
          merged.push([c, d]);
        }
      }
      return merged;
    }

    function insertUnderscores(string: string, mergedPos: number[][]) {
      if (mergedPos.length === 0) return string;

      const posSet = new Set(mergedPos.reduce((acc, arr) => acc.concat(arr)));
      const res: string[] = [];
      for (let i = 0; i <= string.length; i++) {
        if (posSet.has(i)) res.push('_');
        if (i < string.length) res.push(string[i]);
      }
      return res.join('');
    }
  }
  {
    // Avg. Case: (n + m) time | O(n) space
    // n = length of string | m = length of substring
    function underscorifySubstring(string: string, substring: string) {
      const positions = getUnderscorePositions(string, substring);
      const mergedPositions = mergeOverlappingPositions(positions);
      return insertUnderscores(string, mergedPositions);
    }

    function getUnderscorePositions(string: string, substring: string) {
      const positions: number[][] = [];
      let i = 0;
      while (i < string.length) {
        i = string.indexOf(substring, i);
        if (i < 0) break;

        positions.push([i, i + substring.length]);
        i += 1;
      }

      return positions;
    }

    function mergeOverlappingPositions(positions: number[][]) {
      if (positions.length === 0) return [];

      const merged: number[][] = [positions[0]];
      for (let i = 1; i < positions.length; i++) {
        const [a, b] = merged[merged.length - 1];
        const [c, d] = positions[i];
        if (c <= b) {
          merged[merged.length - 1] = [a, d];
        } else {
          merged.push([c, d]);
        }
      }
      return merged;
    }

    function insertUnderscores(string: string, mergedPos: number[][]) {
      if (mergedPos.length === 0) return string;

      let [row, col] = [0, 0];
      const res: string[] = [];
      for (let i = 0; i <= string.length; i++) {
        if (row < mergedPos.length && i === mergedPos[row][col]) {
          res.push('_');
          col === 0 ? col += 1 : [row, col] = [row + 1, 0];
        }
        if (i < string.length) res.push(string[i]);
      }
      return res.join('');
    }
  }
  {
    // O(n + m) time | O(n) space
    // n = length of string | m = length of the substring
    function underscorifySubstring(string: string, substring: string) {
      const pos = findUnderscorePositions(string, substring);
      const mergedPos = mergeOverlappingPositions(pos);
      return insertUnderscores(string, mergedPos);
    }

    function findUnderscorePositions(string: string, substring: string) {
      const pos: number[][] = [];
      let i = 0;
      while (i < string.length) {
        i = string.indexOf(substring, i);
        if (i < 0) break;

        pos.push([i, i + substring.length]);
        i += 1;
      }
      return pos;
    }

    function mergeOverlappingPositions(pos: number[][]) {
      const merged: number[][] = [];
      for (let i = 0; i < pos.length; i++) {
        if (merged.length < 1) {
          merged.push(pos[i]);
          continue;
        }

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

    function insertUnderscores(string: string, mergedPos: number[][]) {
      const flattenedPos = mergedPos.reduce((acc, arr) => acc.concat(arr), []);
      const postnSet = new Set(flattenedPos);
      const result: string[] = [];
      for (let i = 0; i <= string.length; i++) {
        if (postnSet.has(i)) result.push('_');
        if (i < string.length) result.push(string[i]);
      }

      return result.join('');
    }
  }
  {
    // O(n + m) time | O(n) space
    // n = length of string | m = length of the substring
    function underscorifySubstring(string: string, substring: string) {
      const pos = findUnderscorePositions(string, substring);
      const mergedPos = mergeOverlappingPositions(pos);
      return insertUnderscores(string, mergedPos);
    }

    function findUnderscorePositions(string: string, substring: string) {
      const pos: number[][] = [];
      let i = 0;
      while (i < string.length) {
        i = string.indexOf(substring, i);
        if (i < 0) break;

        pos.push([i, i + substring.length]);
        i += 1;
      }
      return pos;
    }

    function mergeOverlappingPositions(pos: number[][]) {
      const merged: number[][] = [];
      for (let i = 0; i < pos.length; i++) {
        if (merged.length < 1) {
          merged.push(pos[i]);
          continue;
        }

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

    function insertUnderscores(string: string, mergedPos: number[][]) {
      const result: string[] = [];
      let [row, col] = [0, 0];
      for (let i = 0; i <= string.length; i++) {
        if (row < mergedPos.length && i === mergedPos[row][col]) {
          result.push('_');
          col === 0 ? col += 1 : [row, col] = [row + 1, 0];
        }
        if (i < string.length) result.push(string[i]);
      }

      return result.join('');
    }
  }
  {
    // O(n + m) time | O(n) space
    // n = length of string | m = length of substring
    function underscorifySubstring(string: string, substring: string) {
      const positions = getUnderscorePositions(string, substring);
      const mergedPositions = mergeOverlappingIntervals(positions);
      return insertUnderscores(string, mergedPositions);
    }

    function getUnderscorePositions(string: string, substring: string) {
      const pos: number[][] = [];
      let i = 0;
      while (i < string.length) {
        i = string.indexOf(substring, i);
        if (i < 0) break;

        pos.push([i, i + substring.length]);
        i += 1;
      }

      return pos;
    }


    function mergeOverlappingIntervals(pos: number[][]) {
      if (pos.length === 0) return [];

      const mergedPos: number[][] = [pos[0]];
      for (let i = 1; i < pos.length; i++) {
        const [a, b] = mergedPos[mergedPos.length - 1];
        const [c, d] = pos[i];
        if (c <= b) {
          mergedPos[mergedPos.length - 1] = [a, d];
        } else {
          mergedPos.push([c, d]);
        }
      }
      return mergedPos;
    }


    function insertUnderscores(string: string, mergedPos: number[][]) {
      let resArr: string[] = [];
      const setPos = new Set(mergedPos.reduce((acc, pos) => acc.concat(pos), []));
      for (let i = 0; i <= string.length; i++) {
        if (setPos.has(i)) resArr.push('_');
        if (i < string.length) resArr.push(string[i]);
      }

      return resArr.join('');
    }

    function insertUnderscores2(string: string, mergedPos: number[][]) {
      let resArr: string[] = [];
      let [row, col] = [0, 0];
      for (let i = 0; i <= string.length; i++) {
        if (row < mergedPos.length && i === mergedPos[row][col]) {
          resArr.push('_');
          col === 0 ? col += 1 : [row, col] = [row + 1, 0];
        }
        if (i < string.length) resArr.push(string[i]);
      }

      return resArr.join('');
    }

  }
}

export const __ = '__';