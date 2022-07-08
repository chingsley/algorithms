// {
//   /**
//    * Time: O(n + nlog(n)) = O( nlog(n) ) // nlog(n) is due to the soert
//    * Space: O(n)
//    * @param {array} array array of intervals
//    * @returns array of merged intervals
//    */

//   function mergeOverlappingIntervals(array) {
//     array.sort((a, b) => a[0] - b[0]);
//     const output = [array[0]];

//     const isOverlap = (currentIntv) => {
//       const res = currentIntv[0] <= output[output.length - 1][1];
//       console.log({ output, currentIntv, res });
//       return res;
//     };

//     const max = (a, b) => (a > b ? a : b);

//     for (let i = 1; i < array.length; i++) {
//       const currentInterval = array[i];
//       if (isOverlap(currentInterval)) {
//         output[output.length - 1][1] = max(
//           currentInterval[1],
//           output[output.length - 1][1]
//         );
//       } else {
//         output.push(currentInterval);
//       }
//     }

//     return output;
//   }

//   // // Do not edit the line below.
//   // exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

//   // .load algoexpert/medium/merge-overlaping-intervals.js
//   // mergeOverlappingIntervals([1, 2], [3, 5], [4, 7])

//   // const output = mergeOverlappingIntervals([
//   //   [1, 2],
//   //   [3, 5],
//   //   [4, 7],
//   //   [6, 8],
//   //   [9, 12],
//   //   [10, 13],
//   // ]);
//   const output = mergeOverlappingIntervals([
//     [1, 22],
//     [-20, 30],
//   ]);
//   console.log(output);
// }

{
  //    * Time: O(n + nlog(n)) = O() nlog(n) ) // nlog(n) is due to the soert
  function mergeOverlappingIntervals(array) {
    array.sort((a, b) => a[0] - b[0]);
    const output = [array[0]];

    for (let i = 1; i < array.length; i++) {
      const isOverlap = checkOverlap(output[output.length - 1], array[i]);
      if (isOverlap) {
        output[output.length - 1] = mergeIntervals(
          output[output.length - 1],
          array[i]
        );
      } else {
        output.push(array[i]);
      }
    }

    return output;
  }

  function checkOverlap(lastIntervalInOutput, currentInterval) {
    return currentInterval[0] <= lastIntervalInOutput[1];
  }

  function mergeIntervals(lowerInterval, upperInterval) {
    return [lowerInterval[0], Math.max(lowerInterval[1], upperInterval[1])];
  }

  const ts1 = {
    intervals: [
      [1, 2],
      [3, 5],
      [4, 7],
      [6, 8],
      [9, 10],
    ],
  };

  console.log(mergeOverlappingIntervals(ts1.intervals));
}
