
/**
 * Solution 3: Permutation 
 * Time: O(w + h)
 * Space: O(1)
 *
 * @param width number w
 * @param height number h
 * @returns number
 */
export function numberOfWaysToTraverseGraph(width: number, height: number): number {
  const r = width - 1;
  const d = height - 1;
  return factorial(r + d) / (factorial(r) * factorial(d));
}

function factorial(n: number): number {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
}


// // Factorial (Recursion technique)
// function _factorial(n: number): number {
//   if (n === 1) return 1;
//   return n * _factorial(n - 1);
// }


console.log(
  numberOfWaysToTraverseGraph(4, 4),
  // _factorial(6)
);
