{
  {
    // O(b + s) time | O(b + s) space
    // b = length of big string | s = length of small string
    function smallestSubstringContaining(bigString: string, smallString: string) {
      const targetCounts = stringToHash(smallString);
      const windowCounts: { [key: string]: number; } = {};

      let uniqueCharsCountInSmallString = Object.keys(targetCounts).length;
      let k = 0;

      const smallest = [-Infinity, 0];
      let [leftIdx, rightIdx] = [0, 0];
      while (rightIdx < bigString.length) {
        while (k < uniqueCharsCountInSmallString && rightIdx < bigString.length) {
          const ch = bigString[rightIdx];
          if (!(ch in targetCounts)) {
            rightIdx += 1;
            continue;
          }
          if (!(ch in windowCounts)) windowCounts[ch] = 0;
          windowCounts[ch] += 1;

          if (windowCounts[ch] === targetCounts[ch]) k += 1;
          if (k === uniqueCharsCountInSmallString) {
            updateSmallest(smallest, [leftIdx, rightIdx]);
            break;
          }
          rightIdx += 1;
        }

        while (k === uniqueCharsCountInSmallString && leftIdx <= rightIdx) {
          const ch = bigString[leftIdx];
          if (!(ch in windowCounts)) {
            leftIdx += 1;
            continue;
          }

          updateSmallest(smallest, [leftIdx, rightIdx]);
          windowCounts[ch] -= 1;
          if (windowCounts[ch] < targetCounts[ch]) k -= 1;

          leftIdx += 1;
        }

        rightIdx += 1;
      }

      if (smallest[0] < 0) return '';
      return bigString.slice(smallest[0], smallest[1] + 1);
    }

    function updateSmallest(smallest: number[], [leftIdx, rightIdx]: number[]) {
      const currRange = smallest[1] - smallest[0];
      const newRange = rightIdx - leftIdx;
      if (newRange < currRange) {
        smallest[0] = leftIdx;
        smallest[1] = rightIdx;
      }
    }

    function stringToHash(str: string): { [key: string]: number; } {
      let hash: { [key: string]: number; } = {};
      for (let ch of str) {
        if (!(ch in hash)) hash[ch] = 0;
        hash[ch] += 1;
      }

      return hash;
    }

    // "a b c d $ e f $ a x  b  $  c  $"
  }
}

export const __ = '__';