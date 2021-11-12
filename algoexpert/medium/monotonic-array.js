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

    if (decreasing && increasing) {
      return false;
    }
  }
  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

// SOLUTION 2
{
  /**
   * Time Complexity: O(n)
   * Space Complexity O(1)
   * @param {array} arr Array of integers
   * @returns boolean
   */
  function isMonotonic(arr) {
    let decreasing;
    let increasing;

    if (arr[0] > arr[arr.length - 1]) {
      decreasing = true;
    } else {
      increasing = true;
    }
    if (decreasing) {
      // non increasing
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
          return false;
        }
      }
    } else {
      // non decreasing
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
          return false;
        }
      }
    }

    return true;
  }

  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
}
