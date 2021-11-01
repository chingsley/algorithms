/**
 * Time Complexity: O(n)
 * Space Complexity O(1)
 * @param {array} arr Array of integers
 * @returns boolean
 */
function isMonotonic(arr) {
  let decreasing;
  let increasing;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      increasing = true;
    }
    if (arr[i + 1] < arr[i]) {
      decreasing = true;
    }

    if (decreasing === true && increasing === true) {
      return false;
    }
  }
  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

// function isMonotonic(arr) {
//   let decreasing;
//   let increasing;

//   if(arr.length <= 2) {
//     return true;
//   }

//   for(let i = 0; i < arr.length -1; i++) {
//       if (arr[i+1] > arr[i]) {
//           increasing = true;
//       }
//       if (arr[i+1] < arr[i]) {
//           decreasing = true;
//       }

//       if(decreasing && increasing) {
//           return false;
//       }
//   }
//   return true;
// }

// // Do not edit the line below.
// exports.isMonotonic = isMonotonic;
