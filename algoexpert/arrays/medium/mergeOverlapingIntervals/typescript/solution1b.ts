/**
 * Time: O( nlog(n) )
 * Space: O(n);
 * @param array n
 * @returns number[][]
 */
export function mergeOverlappingIntervals(array: number[][]) {
  array.sort((a, b) => a[0] - b[0]); // n log(n)
  const result: number[][] = [array[0]];

  for (let i = 1; i < array.length; i++) { // n
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

/**
 * [ [u, v] ]  [ [w, x] ]
 * if(v >= w) merge
 */