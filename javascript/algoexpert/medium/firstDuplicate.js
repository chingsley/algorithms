/**
 * Solution 1
 * time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {array} arr array of integers
 * @returns
 */
// function firstDuplicateValue(arr) {
//   let result = -1;
//   let earliestDuplicate = arr.length;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j] && j < earliestDuplicate) {
//         result = arr[i];
//         earliestDuplicate = j;
//       }
//     }
//   }
//   return result;
// }

// SOLUTION 2
{
  /**
   * Solution 2
   * time Complexity: O(n)
   * Space Complexity: O(n)
   * @param {array} arr array of integers
   * @returns
   */
  function firstDuplicateValue(arr) {
    const seen = {};

    for (let num of arr) {
      if (seen[num]) {
        return num;
      } else {
        seen[num] = num;
      }
    }
    return -1;
  }
}

// SOLUTION 3
{
  /**
   * Solution 3
   * time Complexity: O(n)
   * Space Complexity: O(n)
   * @param {array} arr array of integers
   * @returns
   */
  function firstDuplicateValue(arr) {
    const lookup = new Array(arr.length + 1).fill(0);

    for (let num of arr) {
      if (lookup[num] === 1) {
        return num;
      } else {
        lookup[num] = 1;
      }
    }
    return -1;
  }
}
