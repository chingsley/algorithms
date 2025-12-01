function minimumPassesOfMatrix(matrix) {
  let activeStack = [];
  let passiveStack = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (isIsolatedNegative([r, c], matrix)) {
        return -1;
      }
      if (matrix[r][c] > 0) {
        passiveStack.push([r, c]);
      }
    }
  }

  let numOfPasses = 0;

  while (passiveStack.length > 0) {
    // console.log('passiveStack = ', passiveStack);
    activeStack = passiveStack;
    passiveStack = [];
    while (activeStack.length > 0) {
      const [r, c] = activeStack.pop();
      if (r - 1 > 0 - 1 && matrix[r - 1][c] < 0) {
        matrix[r - 1][c] *= -1;
        passiveStack.push([r - 1, c]);
      }
      if (r + 1 < matrix.length && matrix[r + 1][c] < 0) {
        matrix[r + 1][c] *= -1;
        passiveStack.push([r + 1, c]);
      }
      if (c - 1 > -1 && matrix[r][c - 1] < 0) {
        matrix[r][c - 1] *= -1;
        passiveStack.push([r, c - 1]);
      }
      if (c + 1 < matrix[0].length && matrix[r][c + 1] < 0) {
        matrix[r][c + 1] *= -1;
        passiveStack.push([r, c + 1]);
      }
    }
    numOfPasses += 1;
  }

  return numOfPasses - 1;
}

/**
 * Any Matrix that contains an isolated negative can never be
 * fully converted, no matter the number of passes.
 * Reason is that the isolated negatives are protected by 0's
 *
IsolatedNegatives are negative values that are surrounded
by 0 or the border. E.gs of isolated negatives are:
[
    [-1, 0, 3],
    [0, -5, -6]
  ] => item[0][0] is an isolated negative

  [
    [1, 0, 0, -2, -3],
    [-4, -5, -6, -2, -1],
    [0, 0, 0, 0, -1],
    [-1, 0, 3, 0, 3]
  ] => item[3][0] is an isolated negative
 */
function isIsolatedNegative([r, c], matrix: number[][]) {
  // first, an isolated negative must have a negative value
  if (matrix[r][c] > 0) {
    return false;
  }

  // then, it's surrounding values must be 0 or non-existent
  if (
    (!matrix[r - 1] || matrix[r - 1][c] === 0) &&
    (!matrix[r + 1] || matrix[r + 1][c] === 0) &&
    (!matrix[c - 1] || matrix[r][c - 1] === 0) &&
    (!matrix[c + 1] || matrix[r][c + 1] === 0)
  ) {
    return true;
  }

  // otherwise, it's not an isolated negative, so return false
  return false;
}


const ts1 = {
  "matrix": [
    [0, -1, -3, 2, 0], // r0
    [1, -2, -5, -1, -3], // r1
    [3, 0, 0, -4, -1] // r2
  ]
};
const ts2 = {
  "matrix": [
    [1, 0, 0, -2, -3],
    [-4, -5, -6, -2, -1],
    [0, 0, 0, 0, -1],
    [-1, 0, 3, 0, 3]
  ]
};
const ts3 = {
  "matrix": [
    [-1, 0, 3],
    [0, -5, -6]
  ]
};
const ts4 = {
  "matrix": [
    [1]
  ]
};

console.log(minimumPassesOfMatrix(ts1.matrix));
console.log(minimumPassesOfMatrix(ts2.matrix));
console.log(minimumPassesOfMatrix(ts3.matrix));
console.log(minimumPassesOfMatrix(ts4.matrix));


// [
//   [0, 1.., 3., 2, 0], // r0
//   [1, 2., 5.., 1., 3..], // r1
//   [3, 0, 0, 4.., 1...] // r2
// ]

// // 1,2  1,4  2,3, 0,1
// // passs 1;

// // 2,4
// // pass 2

// [1, 2][1, 3][0, 4]
// [0, 3]

// [
//   [1, 0, 0,  * 2, .3],
//   [4 |, 5 ||, .6, .2, || 1],
//   [0, 0, 0, 0, 1 |],
//   [-1, 0, 3, 0, 3]
// ];;

// pass 1;
/// pass 2;
// pass 3
// pass 4