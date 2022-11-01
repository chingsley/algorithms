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
  {
    // O(b + s) time | O(s) space;
    // b = length of big string;
    // s = length of small string
    function smallestSubstringContaining(bigString: string, smallString: string) {
      const tHash = chCounter(smallString);
      const uHash = chCounter(smallString, true);
      let k = Object.keys(tHash).length;
      let u = 0;
      let min = [0, Infinity];
      let [i, j] = [0, 0];
      while (u < k && i < bigString.length) {
        let ch = bigString[i];
        if (ch in uHash) {
          uHash[ch] += 1;
          if (uHash[ch] === tHash[ch]) u += 1;
        }
        while (u === k) {
          ch = bigString[j];
          updateMinRange(min, [j, i]);
          if (ch in uHash) uHash[ch] -= 1;
          if (uHash[ch] < tHash[ch]) u -= 1;
          j += 1;
        }

        i += 1;
      }

      if (min[1] === Infinity) return '';
      return bigString.slice(min[0], min[1] + 1);
    }

    function chCounter(string: string, setDefaultCountToZero?: boolean) {
      const chCounts: { [key: string]: number; } = {};
      for (let ch of string) {
        if (setDefaultCountToZero) {
          chCounts[ch] = 0;
        } else {
          chCounts[ch] = (chCounts[ch] || 0) + 1;
        }
      }

      return chCounts;
    }

    function updateMinRange(currMin: number[], newMin: number[]): void {
      if (newMin[1] - newMin[0] < currMin[1] - currMin[0]) {
        [currMin[0], currMin[1]] = [newMin[0], newMin[1]];
      }
    }
  }
  {
    // O(b + s) time | O(s) space
    // b = length of big string | s = length os big string
    function smallestSubstringContaining(bigString: string, smallString: string) {
      const ssCount = countChars(smallString, false);
      const ssCountCurr = countChars(smallString, true);

      let currMin = [0, Infinity];
      let [K, U] = [Object.keys(ssCount).length, 0];
      let [l, r] = [0, 0];
      while (r < bigString.length && U < K) {
        let ch = bigString[r];
        if (ch in ssCountCurr) {
          ssCountCurr[ch] += 1;
          if (ssCountCurr[ch] === ssCount[ch]) U += 1;
        }

        while (U === K) {
          updatedMin(currMin, [l, r]);
          ch = bigString[l];
          if (ch in ssCountCurr) ssCountCurr[ch] -= 1;
          if (ssCountCurr[ch] < ssCount[ch]) U -= 1;
          l += 1;
        }

        r += 1;
      }

      return currMin[1] < Infinity ? bigString.slice(currMin[0], currMin[1] + 1) : '';
    }

    function countChars(str: string, setDefualt: boolean) {
      const counts: { [key: string]: number; } = {};
      for (let ch of str) {
        if (setDefualt) {
          counts[ch] = 0;
        } else {
          counts[ch] = (counts[ch] || 0) + 1;
        }
      }
      return counts;
    }

    function updatedMin(currMin: number[], [l, r]: number[]) {
      const [x, y] = currMin;
      if (r - l < y - x) [currMin[0], currMin[1]] = [l, r];
    }

  }

  {
    // O(b + s) time | O(b + s) space
    function smallestSubstringContaining(bigString: string, smallString: string) {
      const targetSubStrCounts = countStr(smallString, false);
      const currentSubStrCounts = countStr(smallString, true);
      let [K, U] = [Object.keys(targetSubStrCounts).length, 0];
      let min = [0, Infinity];

      let [lead, lag] = [0, 0];
      while (U < K && lead < bigString.length) {
        let ch = bigString[lead];
        if (ch in targetSubStrCounts) {
          currentSubStrCounts[ch] += 1;
          if (currentSubStrCounts[ch] === targetSubStrCounts[ch]) U += 1;
        }

        while (U === K) {
          min = lead - lag < min[1] - min[0] ? [lag, lead] : min;
          ch = bigString[lag];
          if (ch in targetSubStrCounts) {
            currentSubStrCounts[ch] -= 1;
            if (currentSubStrCounts[ch] < targetSubStrCounts[ch]) U -= 1;
          }
          lag += 1;
        }

        lead += 1;
      }

      if (min[1] === Infinity) return '';
      return bigString.slice(min[0], min[1] + 1);
    }


    function countStr(str: string, defaultToZero: boolean) { // O(s) time | O(u) space (s = small string | u = no. of unique chars in small string)
      const counts: { [key: string]: number; } = {};
      for (let ch of str) {
        counts[ch] = defaultToZero ? 0 : (counts[ch] || 0) + 1;
      }
      return counts;
    }


  }
}

export const __ = '__';