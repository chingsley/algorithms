/**
 * ALGOEXPERT
 */

/**
 *  Time: O(n + nlog(n)) = O ( n*(1 + log(n)) ) = O (n* (log(n)) ) = O(nlog(n)) // nlog(n) is due to the soert
 * Space: O(n) space. Due to the output
 * @param array n
 * @returns array
 */
export function mergeOverlappingIntervals(array: number[][]) {
  array.sort((a, b) => a[0] - b[0]);
  const output: number[][] = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const [m, n] = output[output.length - 1];
    const [o, p] = array[i];

    if (n >= o) {
      output[output.length - 1] = [Math.min(o, m), Math.max(p, n)];
    } else {
      output.push([o, p]);
    }
  }
  return output;
}

// output.    array.
// [[1, 2]]   [[3, 5], [4, 7], ...]
//   m, n       o, p