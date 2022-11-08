{
  {
    // O(s^2 + p) time | o(s + p) space
    // s = length of normal string
    // p = length of pattern string
    function patternMatcher(pattern: string, string: string) {
      if (pattern.length > string.length) return [];

      const [char1, char2, patternArr, counts] = parsePattern(pattern);
      let X = char1;
      let Y = char2;

      const firstYPos = getFirstYPosition(patternArr, Y);

      if (firstYPos !== null) {
        for (let lengthOfStringX = 1; lengthOfStringX < string.length; lengthOfStringX++) { // from 1 to < strng.length b/c we expect Y to have at least a length of 1, since firstYPos is not null
          const lengthOfStringY = (string.length - (counts[X] * lengthOfStringX)) / counts[Y];
          if (Math.floor(lengthOfStringY) !== lengthOfStringY) { // i.e if lengthOfStringY is a decimal value
            continue;
          };

          const stringX = string.slice(0, lengthOfStringX);
          const stringY = string.slice(firstYPos * lengthOfStringX, lengthOfStringY + (firstYPos * lengthOfStringX));
          const patternStr = patternArr.map(ch => ch === X ? stringX : stringY).join('');
          // if (lengthOfStringX === 10) console.log({ lengthOfStringX, lengthOfStringY, stringX, stringY, pattern, firstYPos });
          if (patternStr === string) {
            if (X === 'x') {
              return [stringX, stringY];
            } else {
              return [stringY, stringX];
            }
          }
        }
        return [];
      } else {
        const pattern: string[] = [];
        const lengthOfStringX = string.length / counts[X];
        if (Math.floor(lengthOfStringX) !== lengthOfStringX) return [];

        for (let i = 0; i < string.length; i += counts[X]) {
          const str = string.slice(i, lengthOfStringX + i);
          if (pattern.length > 0 && pattern[0] !== str) return [];
          pattern[0] = str;
        }
        if (X === 'x') {
          return [pattern[0], ''];
        } else {
          return ['', pattern[0]];
        }

      }
    }

    type ParsedPattern = [string, string, string[], { [key: string]: number; }];

    function parsePattern(pattern: string): ParsedPattern {
      const charSet: Set<string> = new Set();
      const counts: { [key: string]: number; } = {};
      const patternArr: string[] = [];

      for (let ch of pattern) {
        patternArr.push(ch);

        if (!(ch in counts)) counts[ch] = 0;
        counts[ch] += 1;

        charSet.add(ch);
      }

      const [char1, char2] = Array.from(charSet);
      return [char1, char2, patternArr, counts];
    }

    function getFirstYPosition(patternArr: string[], Y: string): number | null {
      let pos: number | null = null;
      for (let i = 0; i < patternArr.length; i++) {
        if (patternArr[i] === Y) {
          pos = i;
          break;
        }
      }

      return pos;
    }
  }
  {
    function patternMatcher(pattern: string, string: string) {
      const patternArr = pattern.split('');
      const patternCounts = countChars(patternArr);
      const [first, second] = getCharPositionInPattern(patternArr);

      if (second) {
        const firstYPos = pattern.indexOf(second);
        const [xCounts, yCounts] = [patternCounts[first], patternCounts[second]];
        for (let xSize = 1; xSize < string.length; xSize++) {
          const ySize = (string.length - (xCounts * xSize)) / yCounts;
          if (ySize < 0) break;
          if (ySize % 1 !== 0) continue;

          const xString = string.slice(0, xSize);
          const yString = string.slice(xSize * firstYPos, ySize + (xSize * firstYPos));
          if (patternMatch([xString, yString], first, string, patternArr)) {
            return first === 'x' ? [xString, yString] : [yString, xString];
          }
        }
      } else {
        const xSize = string.length / pattern.length;
        if (xSize % 1 !== 0) return [''];
        const xString = string.slice(0, xSize);
        const yString = '';
        if (patternMatch([xString, yString], first, string, patternArr)) {
          return first === 'x' ? [xString, yString] : [yString, xString];
        }
      }
      return [];
    }


    function countChars(patternArr: string[]): { [key: string]: number; } {
      const counts: { [key: string]: number; } = {};
      for (let ch of patternArr) counts[ch] = (counts[ch] || 0) + 1;
      return counts;
    }

    function getCharPositionInPattern(patternArr: string[]): string[] {
      const set: Set<string> = new Set(patternArr);
      return Array.from(set);
    }

    function patternMatch([x, y]: string[], first: string, string: string, patternArr: string[]): boolean {
      const result: string[] = patternArr.map(p => p === first ? x : y);
      return result.join('') === string;
    }
  }
  {
    function patternMatcher(pattern: string, string: string) {
      const patternArr = pattern.split('');
      const patternCounts = countChars(patternArr);
      const [X, Y] = Array.from(new Set(patternArr));

      if (Y) {
        const firstYPos = pattern.indexOf(Y);
        const [xCounts, yCounts] = [patternCounts[X], patternCounts[Y]];
        for (let xSize = 1; xSize < string.length; xSize++) {
          const ySize = (string.length - (xCounts * xSize)) / yCounts;
          if (ySize < 0) break;
          if (ySize % 1 !== 0) continue;

          const xString = string.slice(0, xSize);
          const yString = string.slice(xSize * firstYPos, ySize + (xSize * firstYPos));
          if (patternMatch([xString, yString], X, string, patternArr)) {
            return X === 'x' ? [xString, yString] : [yString, xString];
          }
        }
      } else {
        const xSize = string.length / pattern.length;
        if (xSize % 1 !== 0) return [''];
        const xString = string.slice(0, xSize);
        const yString = '';
        if (patternMatch([xString, yString], X, string, patternArr)) {
          return X === 'x' ? [xString, yString] : [yString, xString];
        }
      }
      return [];
    }


    function countChars(patternArr: string[]): { [key: string]: number; } {
      const counts: { [key: string]: number; } = {};
      for (let ch of patternArr) counts[ch] = (counts[ch] || 0) + 1;
      return counts;
    }

    function patternMatch([x, y]: string[], X: string, string: string, patternArr: string[]): boolean {
      const result: string[] = patternArr.map(p => p === X ? x : y);
      return result.join('') === string;
    }
  }
  {
    // O(s^2 + p) time | O(p + s) space
    // s = length of string | p = length of pattern
    function patternMatcher(pattern: string, string: string) {
      const ptnArr = pattern.split('');// O(p) time | O(p) spae
      const counts = countChars(ptnArr);// O(p) time | O(1) space ( { x: 4, y: 2})
      const [X, Y] = Array.from(new Set(ptnArr));// O(p) time | O(1) space

      if (Y) {
        const firstYPos = ptnArr.indexOf(Y);
        for (let xSize = 1; xSize < string.length; xSize++) { // O(s) time
          const ySize = (string.length - (counts[X] * xSize)) / counts[Y];

          const xVal = string.slice(0, xSize);
          const yVal = string.slice(xSize * firstYPos, ySize + (xSize * firstYPos));

          if (ptnMatches({ [X]: xVal, [Y]: yVal }, ptnArr, string)) {// O(s) time
            return X === 'x' ? [xVal, yVal] : [yVal, xVal];
          }
        }
      } else {
        const xSize = string.length / ptnArr.length;
        if (xSize % 1 !== 0) return [];

        const [xVal, yVal] = [string.slice(0, xSize), ''];
        if (ptnMatches({ [X]: xVal, [Y]: yVal }, ptnArr, string)) {
          return X === 'x' ? [xVal, yVal] : [yVal, xVal];
        }
      }

      return [];
    }

    function countChars(ptnArr: string[]): { [key: string]: number; } {
      const counts: { [key: string]: number; } = {};
      for (let ch of ptnArr) counts[ch] = (counts[ch] || 0) + 1;
      return counts;
    }

    function ptnMatches(match: { [key: string]: string; }, ptnArr: string[], string: string): boolean {
      const res = ptnArr.map(p => match[p]).join(''); // O(s) space
      return res === string; // O(s) time
    }

  }
  {
    // O(s^2 + p) time | O(s + p) space
    // s = length of string | p = length of pattern
    function patternMatcher(pattern: string, string: string) {
      const patternArr = pattern.split('');
      const patternCount = countPattern(patternArr);
      const [X, Y] = Array.from(new Set(patternArr));

      if (Y) {
        const firstYIndex = pattern.indexOf(Y);
        // max xSize is at min ySize ie. ySize = 1:
        const maxXSize = (string.length - (patternCount[Y] * 1)) / patternCount[X];
        console.log({ maxXSize });
        for (let xSize = 1; xSize <= maxXSize; xSize++) {// O(s) time, b/c maxXSize is bounded by s (string.length )
          const ySize = (string.length - (patternCount[X] * xSize)) / patternCount[Y];
          // if(ySize < 0) continue;
          if (ySize % 1 !== 0) continue;

          const xString = string.slice(0, xSize);
          const yOffset = firstYIndex * xSize;
          const yString = string.slice(yOffset, ySize + yOffset);
          const stringFromPattern = getStringFromPattern(patternArr, { [X]: xString, [Y]: yString });
          if (stringFromPattern === string) {
            return X === 'x' ? [xString, yString] : [yString, xString];
          }
        }
      } else {
        const xSize = string.length / patternArr.length;
        if (xSize % 1 !== 0) return [];

        const xString = string.slice(0, xSize);
        const stringFromPattern = getStringFromPattern(patternArr, { [X]: xString });
        if (stringFromPattern === string) {
          return X === 'x' ? [xString, ''] : ['', xString];
        }
      }

      return [];
    }

    function getStringFromPattern(patternArr: string[], pHash: { [key: string]: string; }): string {
      const resultArr: string[] = patternArr.map(p => pHash[p]);
      return resultArr.join('');
    }

    function countPattern(patternArr: string[]): { [key: string]: number; } {
      const counts: { [key: string]: number; } = {};
      for (let ch of patternArr) {
        counts[ch] = (counts[ch] || 0) + 1;
      }
      return counts;
    }
  }
  {
    // O(n^2 + m) time | O(n + m) space
    function patternMatcher(pattern: string, string: string) {
      const patternArr = pattern.split('');
      const ptnCount = countChars(patternArr);
      const [X, Y] = Array.from(new Set(patternArr));
      if (Y) {
        const firstIdxOfY = patternArr.indexOf(Y);
        const minYSize = 1;
        const maxXSize = (string.length - (ptnCount[Y] * minYSize)) / ptnCount[X];
        for (let xSize = 1; xSize <= maxXSize; xSize++) {
          const xString = string.slice(0, xSize);

          const ySize = (string.length - (xSize * ptnCount[X])) / ptnCount[Y];
          if (xSize === 2) console.log({ xString, ySize });
          if (ySize % 1 !== 0) continue;

          const yOffset = xSize * firstIdxOfY;
          const yString = string.slice(yOffset, ySize + yOffset);

          const strFromPattern = patternArr.map(p => p === X ? xString : yString).join('');
          if (strFromPattern === string) {
            return X === 'x' ? [xString, yString] : [yString, xString];
          }
        }
      } else {
        const xSize = string.length / patternArr.length;
        if (xSize % 1 !== 0) return [];

        const xString = string.slice(0, xSize);
        const strFromPattern = patternArr.map(p => xString).join('');
        if (strFromPattern === string) {
          return X === 'x' ? [xString, ''] : ['', xString];
        }
      }
      return [];
    }

    function countChars(arr: string[]) {
      const counts: { [key: string]: number; } = {};
      for (let ch of arr) counts[ch] = (counts[ch] || 0) + 1;
      return counts;
    }

  }
  {
    // O(s(s + p)) time | O(s + p) space
    function patternMatcher(pattern: string, string: string) {
      const patternArr = pattern.split('');
      const patternCounts = countChars(patternArr);
      const [X, Y] = Array.from(new Set(patternArr));
      if (Y) {
        const firstIndexOfY = patternArr.indexOf(Y);
        const maxXSize = (string.length - (patternCounts[Y] * 1)) / patternCounts[X];
        for (let xSize = 1; xSize <= maxXSize; xSize++) {
          const ySize = (string.length - (xSize * patternCounts[X])) / patternCounts[Y];
          if (ySize % 1 !== 0) continue;

          const xString = string.slice(0, xSize);
          const yOffset = xSize * firstIndexOfY;
          const yString = string.slice(yOffset, ySize + yOffset);
          const str = patternArr.map(p => p === X ? xString : yString).join('');
          if (str === string) return X === 'x' ? [xString, yString] : [yString, xString];
        }
      } else {
        const xSize = string.length / patternCounts[X];
        if (xSize % 1 !== 0) return [];

        const xString = string.slice(0, xSize);
        const str = patternArr.map(p => xString).join('');
        if (str === string) return X === 'x' ? [xString, ''] : ['', xString];
      }

      return [];
    }

    function countChars(patternArr: string[]) {
      const counts: { [key: string]: number; } = {};
      for (let ch of patternArr) counts[ch] = (counts[ch] || 0) + 1;
      return counts;
    }
  }
  {
    // O(s^2 + p) time | O(s + p) space
    // s = length of string | p = length of pattern
    function patternMatcher(pattern: string, string: string) {
      const patternArr = pattern.split('');
      const patternCount = countChars(patternArr);
      const [X, Y] = Array.from(new Set(patternArr));
      if (Y) {
        const firstYIdx = patternArr.indexOf(Y);
        const minYSize = 1;
        const maxXSize = (string.length - (patternCount[Y] * minYSize)) / patternCount[X];
        for (let xSize = 1; xSize <= maxXSize; xSize++) {
          const ySize = (string.length - (patternCount[X] * xSize)) / patternCount[Y];
          if (ySize % 1 !== 0) continue;

          const xString = string.slice(0, xSize);
          const yOffset = xSize * firstYIdx;
          const yString = string.slice(yOffset, ySize + yOffset);
          const str = patternArr.map(p => p === X ? xString : yString).join('');
          if (str === string) {
            return X === 'x' ? [xString, yString] : [yString, xString];
          }
        }
      } else {
        const xSize = string.length / patternCount[X];
        if (xSize % 1 !== 0) return [];

        const xString = string.slice(0, xSize);
        const str = patternArr.map(p => xString).join('');
        if (str === string) {
          return X === 'x' ? [xString, ''] : ['', xString];
        }
      }

      return [];
    }

    function countChars(string: string[]) {
      const counts: { [key: string]: number; } = {};
      for (let ch of string) counts[ch] = (counts[ch] || 0) + 1;
      return counts;
    }

  }
}

export const __ = '__';