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
  {
    function smallestSubstringContaining(bigString: string, smallString: string) {
      const minRange = [-Infinity, 0];
      const target = countChars(smallString);
      const window: { [key: string]: number; } = {};
      const U = Object.keys(target).length;
      let k = 0;
      let [leftIdx, rightIdx] = [0, 0];
      while (rightIdx < bigString.length) {
        while (k < U && rightIdx < bigString.length) {
          const ch = bigString[rightIdx];
          if ((ch in target)) {
            if (!(ch in window)) window[ch] = 0;
            window[ch] += 1;

            if (window[ch] === target[ch]) k += 1;
            if (k === U) break;
          }

          rightIdx += 1;
        }

        while (k === U && leftIdx <= rightIdx) {
          updateRange([leftIdx, rightIdx], minRange);
          const ch = bigString[leftIdx];

          if (ch in window) window[ch] -= 1;
          if (window[ch] < target[ch]) k -= 1;
          leftIdx += 1;
        }

        rightIdx += 1;
      }

      if (minRange[0] < 0) return '';
      return bigString.slice(minRange[0], minRange[1] + 1);
    }

    function countChars(string: string): { [key: string]: number; } {
      const counts: { [key: string]: number; } = {};
      for (let ch of string) {
        if (!(ch in counts)) counts[ch] = 0;
        counts[ch] += 1;
      }

      return counts;
    }

    function updateRange([leftIdx, rightIdx]: number[], minRange: number[]) {
      if (rightIdx - leftIdx < minRange[1] - minRange[0]) {
        [minRange[0], minRange[1]] = [leftIdx, rightIdx];
      }
    }
  }
  {
    function smallestSubstringContaining(bigString: string, smallString: string) {
      const minRange = [-Infinity, 0];
      const target = countChars(smallString);
      const window: { [key: string]: number; } = {};
      const U = Object.keys(target).length;
      let k = 0;
      let [leftIdx, rightIdx] = [0, 0];
      while (rightIdx < bigString.length) {
        while (k < U && rightIdx < bigString.length) {
          const ch = bigString[rightIdx];
          if ((ch in target)) {
            if (!(ch in window)) window[ch] = 0;
            window[ch] += 1;

            if (window[ch] === target[ch]) k += 1;
            if (k === U) break;
          }

          rightIdx += 1;
        }

        while (k === U && leftIdx <= rightIdx) {
          updateRange([leftIdx, rightIdx], minRange);
          const ch = bigString[leftIdx];

          if (ch in window) window[ch] -= 1;
          if (window[ch] < target[ch]) k -= 1;
          leftIdx += 1;
        }

        rightIdx += 1;
      }

      if (minRange[0] < 0) return '';
      return bigString.slice(minRange[0], minRange[1] + 1);
    }

    function countChars(string: string): { [key: string]: number; } {
      const counts: { [key: string]: number; } = {};
      for (let ch of string) {
        if (!(ch in counts)) counts[ch] = 0;
        counts[ch] += 1;
      }

      return counts;
    }

    function updateRange([leftIdx, rightIdx]: number[], minRange: number[]) {
      if (rightIdx - leftIdx < minRange[1] - minRange[0]) {
        [minRange[0], minRange[1]] = [leftIdx, rightIdx];
      }
    }
  }
  {
    function smallestSubstringContaining(bigString: string, smallString: string) {
      const minRange = [-Infinity, 0];
      const target = countChars(smallString);
      const window: { [key: string]: number; } = {};
      const U = Object.keys(target).length;
      let k = 0;
      let [leftIdx, rightIdx] = [0, 0];
      while (rightIdx < bigString.length) {
        const ch = bigString[rightIdx];
        if ((ch in target)) {
          if (!(ch in window)) window[ch] = 0;
          window[ch] += 1;

          if (window[ch] === target[ch]) k += 1;
          while (k === U) {
            updateRange([leftIdx, rightIdx], minRange);
            const ch = bigString[leftIdx];

            if (ch in window) window[ch] -= 1;
            if (window[ch] < target[ch]) k -= 1;
            leftIdx += 1;
          }
        }

        rightIdx += 1;
      }

      if (minRange[0] < 0) return '';
      return bigString.slice(minRange[0], minRange[1] + 1);
    }

    function countChars(string: string): { [key: string]: number; } {
      const counts: { [key: string]: number; } = {};
      for (let ch of string) {
        if (!(ch in counts)) counts[ch] = 0;
        counts[ch] += 1;
      }

      return counts;
    }

    function updateRange([leftIdx, rightIdx]: number[], minRange: number[]) {
      if (rightIdx - leftIdx < minRange[1] - minRange[0]) {
        [minRange[0], minRange[1]] = [leftIdx, rightIdx];
      }
    }
  }
  {
    // o(b + s) time | O(s) space
    // b = length of bigString | s = length of smallString
    function smallestSubstringContaining(bigString: string, smallString: string) {
      let minRange = [-Infinity, 0];
      const target = countChars(smallString); // O(s) time
      const window: { [key: string]: number; } = {};
      let [leftIdx, rightIdx] = [0, 0];
      let u = Object.keys(target).length; // unique chars count in smallString
      let k = 0; // matched Chars Count

      while (rightIdx < bigString.length) {// O(2b) time = O(b) time
        const chRight = bigString[rightIdx];

        if (!(chRight in target)) {
          rightIdx += 1;
          continue;
        }

        window[chRight] = (window[chRight] || 0) + 1;

        if (window[chRight] === target[chRight]) k += 1;
        while (k === u) {
          updateRange([leftIdx, rightIdx], minRange);

          const chLeft = bigString[leftIdx];
          if (chLeft in window) window[chLeft] -= 1;
          if (window[chLeft] < target[chLeft]) k -= 1;

          leftIdx += 1;
        }

        rightIdx += 1;
      }

      if (minRange[0] < 0) return '';
      return bigString.slice(minRange[0], minRange[1] + 1);
    }


    function countChars(str: string): { [key: string]: number; } {
      const counts: { [key: string]: number; } = {};
      for (let ch of str) {
        if (!(ch in counts)) counts[ch] = 0;
        counts[ch] += 1;
      }

      return counts;
    }

    function updateRange([lIdx, rIdx]: number[], minRange: number[]) {
      if (rIdx - lIdx < minRange[1] - minRange[0]) {
        minRange[0] = lIdx;
        minRange[1] = rIdx;
      }
    }
  }
}

export const __ = '__';