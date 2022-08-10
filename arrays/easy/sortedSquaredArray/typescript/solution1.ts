/**
 * Time: O(nlog(n))
 * Space: O(n)
 * See sloution 2 for better solution
 * @param array n
 * @returns array
 */
export function sortedSquaredArray(array: number[]) {
  return array.map(a => Math.abs(a)).sort((a, b) => a - b).map(a => a * a);
}


console.log(
  sortedSquaredArray([-9, 1, 2, 3, 5, 6, 8])
)