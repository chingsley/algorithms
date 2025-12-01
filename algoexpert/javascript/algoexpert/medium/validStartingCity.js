/**
 * This function is not comopleted (It does not pass all the test cases, I'm still working on it)
 * @param {Array} distances array of integers
 * @param {Array} fuel array of integers
 * @param {int} mpg Miles per hour
 * @returns integer
 */
function validStartingCity(distances, fuel, mpg) {
  let carry = 0;
  let minMiles = Infinity;
  let idxMinMiles = null;
  for (let i = 0; i < distances.length; i++) {
    carry = fuel[i] * mpg - distances[i] + carry;
    console.log({ i, carry });
    if (carry < minMiles) {
      minMiles = carry;
      idxMinMiles = i;
    }
  }
  return idxMinMiles + 1;
}

const test1 = {
  distances: [5, 25, 15, 10, 15],
  fuel: [1, 2, 1, 0, 3],
  mpg: 10,
};
const test2 = {
  distances: [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
  fuel: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  mpg: 25,
};

console.log(validStartingCity(test2.distances, test2.fuel, test2.mpg));

// Do not edit the line below.
exports.validStartingCity = validStartingCity;
