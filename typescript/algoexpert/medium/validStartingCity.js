// // SOLUTION 1
// {
//   /**
//    * O(n) time, O(n) space
//    * @param distances Array of numbers
//    * @param fuel Array of numbers
//    * @param mpg number
//    * @returns number
//    */
//   function validStartingCity(distances: number[], fuel: number[], mpg: number): number {
//     const milesLeftInThank = new Array(fuel.length).fill(0);
//     let minMilesLeftInThank = 0;
//     let cityIdxWithMinMilesLeftInThank = 0;
//     for (let i = 1; i < distances.length; i++) {
//       milesLeftInThank[i] = milesLeftInThank[i - 1] + capacityAt(i - 1, fuel, mpg) - distances[i - 1];
//       if (milesLeftInThank[i] < minMilesLeftInThank) {
//         minMilesLeftInThank = milesLeftInThank[i];
//         cityIdxWithMinMilesLeftInThank = i;
//       }
//     }
//     return cityIdxWithMinMilesLeftInThank;
//   }
//   function capacityAt(idx: number, fuel: number[], mpg: number): number {
//     return fuel[idx] * mpg;
//   }
//   interface Test {
//     distances: number[];
//     fuel: number[];
//     mpg: number;
//   }
//   const validStartingCityTest1: Test = {
//     distances: [5, 25, 15, 10, 15],
//     fuel: [1, 2, 1, 0, 3],
//     mpg: 10
//   };
//   const { distances, fuel, mpg } = validStartingCityTest1;
//   console.log(
//     validStartingCity(distances, fuel, mpg)
//   );
// }
// SOLUTION 2
{
    /**
     * O(n) time, O(1) space
     * @param distances Array of numbers
     * @param fuel Array of numbers
     * @param mpg number
     * @returns number
     */
    function validStartingCity(distances, fuel, mpg) {
        var minMilesLeftInThank = 0;
        var cityIdxWithMinMilesLeftInThank = 0;
        var milesLeftInThank = 0;
        for (var i = 1; i < distances.length; i++) {
            milesLeftInThank = milesLeftInThank + capacityAt(i - 1, fuel, mpg) - distances[i - 1];
            if (milesLeftInThank < minMilesLeftInThank) {
                minMilesLeftInThank = milesLeftInThank;
                cityIdxWithMinMilesLeftInThank = i;
            }
        }
        return cityIdxWithMinMilesLeftInThank;
    }
    function capacityAt(idx, fuel, mpg) {
        return fuel[idx] * mpg;
    }
    var validStartingCityTest1 = {
        distances: [5, 25, 15, 10, 15],
        fuel: [1, 2, 1, 0, 3],
        mpg: 10
    };
    var distances = validStartingCityTest1.distances, fuel = validStartingCityTest1.fuel, mpg = validStartingCityTest1.mpg;
    console.log(validStartingCity(distances, fuel, mpg));
}
