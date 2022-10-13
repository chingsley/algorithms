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
}

export const __ = '__';