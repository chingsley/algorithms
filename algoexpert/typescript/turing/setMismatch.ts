/**
 * Suppose you're given a set which originally contains numbers from 1 to n.
 * Unfortunately, due to a data error, one of the numbers in the set got another
 * duplicated to another number in the set, which results in a repetition of one
 * number and a loss of another number.
 * Given an array nums representing the data status of this set after the error,
 * find and return the number that ocurs twice and the number that is missing
 * in the form of an array
 *
 * Example 1:
 * input: nums = [ 1, 2, 3, 4, 3]
 * output: [ 3, 5 ]
 *
 * Example 2:
 * Input: nums = [ 1, 2, 2 ]
 * Output: [ 2, 3 ]
 */

/**
 * SOLUTION 1: ASSUMING THE ORIGINAL SET WAS SORTED
 * Time: O(n)
 * Space: O(n)
 * @param str string
 * @returns string
 */
 function setMismatch(arr: number[]): number[] {
   let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== i+1) {
      result = [arr[i], i+1]
    }
  }
  return result;
 }

console.log(setMismatch([1, 2, 3, 4, 3]));
console.log(setMismatch([1, 2, 2]));