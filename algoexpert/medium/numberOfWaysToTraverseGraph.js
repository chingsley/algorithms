/**
 * Time: O(n+m)
 * Space: O(1)
 *
 * Where: n = width of the graph, m = hieght of the graph
 */

function numberOfWaysToTraverseGraph(width, height) {
  const xDistanceToCorner = width - 1;
  const yDistanceToCorner = height - 1;

  const numerator = factorial(xDistanceToCorner + yDistanceToCorner);
  const denominator =
    factorial(xDistanceToCorner) * factorial(yDistanceToCorner);

  return Math.floor(numerator / denominator);
}

function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}
