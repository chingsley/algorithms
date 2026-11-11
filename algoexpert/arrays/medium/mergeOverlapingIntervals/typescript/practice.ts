{
  {
    // O(nlog(n)) time, O(n) space
    function mergeOverlappingIntervals(array: number[][]) {
      array.sort((a, b) => a[0] - b[0]);
      const result: number[][] = [array[0]];

      for (let i = 1; i < array.length; i++) {
        const [u, v] = result[result.length - 1];
        const [w, x] = array[i];
        if (v >= w) {
          result[result.length - 1] = [u, Math.max(v, x)];
        } else {
          result.push(array[i]);
        }
      }

      return result;
    }
  }
  {
    // O(nlog(n)) time, O(n) space
    function mergeOverlappingIntervals(array: number[][]) {
      array.sort((a, b) => a[0] - b[0]);
      const result: number[][] = [array[0]];
      for (let i = 1; i < array.length; i++) {
        const [prevLower, prevUpper] = result[result.length - 1];
        const [currentLower, currentUpper] = array[i];
        if (prevUpper >= currentLower) {
          result[result.length - 1] = [prevLower, Math.max(prevUpper, currentUpper)];
        } else {
          result.push(array[i]);
        }
      }
      return result;
    }

  }
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
  {

    // O(nlon(n)) time | o(n) space;
    function mergeOverlappingIntervals(array: number[][]) {
      array.sort((a, b) => a[0] - b[0]);

      const result: number[][] = [array[0]];
      for (let i = 1; i < array.length; i++) {
        const [a, b] = result[result.length - 1];
        const [c, d] = array[i];
        if (b >= c) {
          result[result.length - 1] = [a, Math.max(b, d)];
        } else {
          result.push([c, d]);
        }
      }

      return result;
    }
  }
  {
    // O(nlog(n)) time | O(n) space
    function mergeOverlappingIntervals(array: number[][]) {
      array.sort((a, b) => a[0] - b[0]);
      let result: number[][] = [array[0]];
      for (let i = 1; i < array.length; i++) {
        const [a1, b1] = result[result.length - 1];
        const [a2, b2] = array[i];
        if (b1 >= a2) {
          result[result.length - 1] = [a1, Math.max(b1, b2)];
        } else {
          result.push(array[i]);
        }
      }

      return result;
    }

  }
  {
    /**
* Input (intervals):
* [[1,3],[2,6],[8,10],[15,18]] (sort first if insorted)
* output (merged):
* [[1,3]     ]
* [[1,6]     ]
* [[1,6], [8,10], ...     ]
* ...
* O(n log n) time | O(n) space
 */
    function mergeOverlappingIntervals(intervals: number[][]): number[][] {
      intervals.sort((a, b) => a[0] - b[0]);
      const merged = [intervals[0]];
      for (let i = 1; i < intervals.length; i++) {
        const [start1, end1] = merged[merged.length - 1];
        const [start2, end2] = intervals[i];
        if (end1 >= start2) {
          merged[merged.length - 1] = [start1, Math.max(end1, end2)];
        } else {
          merged.push([start2, end2]);
        }
      }

      return merged;
    };
  }
}

export const ___ = '___';