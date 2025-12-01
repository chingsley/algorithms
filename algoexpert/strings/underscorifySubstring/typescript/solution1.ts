// Avg. case: O(n + m) time | O(n) space
// worst case: O(n^2 + nm) time | O(n) space
// n = length of string
// m = length of substring
export function underscorifySubstring(string: string, substring: string) {
  const locations = getLocations(string, substring);
  const collapsedLocations = mergeOverlappingIntervals(locations);
  const result = insertUnderscores(string, collapsedLocations);
  console.log(locations);
  console.log(collapsedLocations);
  console.log(result);
  return result;
}

function getLocations(string: string, substring: string): number[][] {
  const locations: number[][] = [];
  let startIdx = 0;
  while (startIdx < string.length) {
    const idx = string.indexOf(substring, startIdx);
    if (idx < 0) break;
    locations.push([idx, idx + substring.length]);
    startIdx = idx + 1;
  }

  return locations;
}

function mergeOverlappingIntervals(locations: number[][]): number[][] {
  const result: number[][] = [locations[0]];
  for (let i = 1; i < locations.length; i++) {
    const [a1, b1] = result[result.length - 1];
    const [a2, b2] = locations[i];
    if (a2 <= b1) {
      result[result.length - 1] = [a1, Math.max(b1, b2)];
    } else {
      result.push([a2, b2]);
    }
  }
  return result;
}

function insertUnderscores(string: string, locations: number[][]): string {
  const result: string[] = [];
  const locationSet: Set<number> = new Set(locations.reduce((acc, val) => acc.concat(val), []));
  for (let i = 0; i <= string.length; i++) { // i <= b/c of cases where _ should appear at the end of the string
    if (locationSet.has(i)) {
      result.push('_');
    }
    if (i < string.length) result.push(string[i]); // the 'if' condition is neede sinces wer're looping up to i === string.length which would not yield a valid character
  }

  return result.join('');
}


const testCase1 = {
  "string": "testthis is a testtest to see if testestest it works",
  "substring": "test"
};

underscorifySubstring(testCase1.string, testCase1.substring);


/*


testthis is a testtest to see if testestest it works
^             ^   ^              ^  ^  ^
0            14  18             33 36  39


0, 4
14, 18
*/

/*
  [a1, b1], [a2, b2]
*/