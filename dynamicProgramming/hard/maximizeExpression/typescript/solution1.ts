// O(n^4) time | O(1) space
// (brute force approach.Will likely not be acceptable
//    in an interview.Seee solution 2 for a better solution in terms of time complexity)
export function maximizeExpression(array: number[]) {
  if (array.length < 4) return 0;

  let max = -Infinity;
  for (let a = 0; a < array.length; a++) {
    for (let b = a + 1; b < array.length; b++) {
      for (let c = b + 1; c < array.length; c++) {
        for (let d = c + 1; d < array.length; d++) {
          console.log([a, b, c, d]);
          const val = array[a] - array[b] + array[c] - array[d];
          max = Math.max(max, val);
        }
      }
    }
  }
  return max;
}