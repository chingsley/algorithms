/**
 * Time: O(2n) = O(n) => n = no. of cities
 * Space: O(1)
 * 
 * @param distances (n): number[]
 * @param fuel f: number[]
 * @param mpg number
 * @returns number
 */
export function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  const numOfCities = distances.length;
  let balance = 0;

  let startCityIdx = 0;
  let currentCityIdx = startCityIdx;
  while (currentCityIdx < startCityIdx + numOfCities) {
    const currentCityIdxRotated = currentCityIdx % numOfCities;
    const CapacityAtCurrentCity = fuel[currentCityIdxRotated] * mpg;
    balance += CapacityAtCurrentCity - distances[currentCityIdxRotated];

    // console.log({ startCityIdx, currentCityIdx, 'startCityIdx + numOfCities': startCityIdx + numOfCities, currentCityIdxRotated, balance, 'distances[currentCityIdxRotated]': distances[currentCityIdxRotated] });

    if (balance < 0) {
      startCityIdx = currentCityIdxRotated + 1;
      currentCityIdx = startCityIdx;
      balance = 0; // Do not forget to reset the balance too!
    } else {
      currentCityIdx++;
    }
  }
  return startCityIdx;
}


console.log(
  validStartingCity(
    [1, 3, 10, 6, 7, 7, 2, 4],
    [1, 1, 1, 1, 1, 1, 1, 1],
    5
  )
);
