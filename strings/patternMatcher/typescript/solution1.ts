// O(s^2 + p) time | o(s + p) space
// s = length of normal string
// p = length of pattern string
export function patternMatcher(pattern: string, string: string) {
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
      const patternStr = insertStringInPattern(X, Y, stringX, stringY, patternArr);
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


  // test test test
  // l = 4, i = 0, 3, 6
  // console.log(counts[X]);
  // console.log(counts[Y]);
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


function insertStringInPattern(X: string, Y: string, stringX: string, stringY: string, patternArr: string[]) {
  const pattern: string[] = [];
  for (let ch of patternArr) {
    if (ch === X) pattern.push(stringX);
    if (ch === Y) pattern.push(stringY);
  }
  return pattern.join('');
}

// console.log(
//   patternMatcher(
//     "xxyxxy",
//     "gogopowerrangergogopowerranger"
//   )
// );

// console.log(
//   patternMatcher(
//     "yyyy",
//     "testtesttesttest"
//   )
// );


console.log(
  patternMatcher(
    "yxyyyxxy",
    // "xyxxxyyx",
    "baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom"
  )
);


/*
"baddaddoom baddaddoomi baddaddoom baddaddoom baddaddoom baddaddoomi baddaddoomi baddaddoom"
 baddaddoom baddaddoomi baddaddoom baddaddoom baddaddoom baddaddoomi baddaddoomi baddaddoom

*/
