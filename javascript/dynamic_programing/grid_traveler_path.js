/***
 * Problem:
 *    Say that you are a traveler on a 2D grid. You begin in the
 *    top-left corner and your goal is to travel to the bottom-right
 *    corner. You may only move down or right.
 *    find the actual path you travel to the goal on a grid with dimensions m * n
 *    e.g for a 2 x 3 grid, the actual paths are:
 *    [
 *      [ 'down', 'right', 'right' ]
 *      [ 'right', 'down', 'right' ],
 *      [ 'right', 'right', 'down' ]
 *    ]
 *
 * Analysis:
 *    without memoization:
 *          Time complexity = O(2^(m+n))
 *          Space complexity = O(m+n)
 * 
 ***
 * CHALLENGE: Try memoizing the solution
 */

const gridTraveler = (m, n, memo = {}) => {
  if (m === 1 || n === 1) return 1;

  const key = [m, n].join(',');
  if (key in memo) return memo[key];

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

const findGridPath = (m, n) => {
  const paths = [];
  gridTravelerPath(m, n, [], paths);
  return paths;
};

const gridTravelerPath = (m, n, currPath, paths) => {
  // console.log({ paths, currPath, m, n });
  if (m === 1 && n === 1) {
    paths.push(currPath);
  }
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTravelerPath(m - 1, n, [...currPath, 'down'], paths) +
    gridTravelerPath(m, n - 1, [...currPath, 'right'], paths);

};

console.log(findGridPath(2, 3));


/**
 * CHALLENGE: Try memoizing the solution
 */