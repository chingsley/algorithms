/**
 * Question:
 * Write a function that takes in a non-empty array of integers and returns
 * an array of the same length, where each element in the output array is
 * equal to the product of every other number in the input array.
 * 
 * i.e, the value at output[i] is equal tothe product of every number
 * in the input array other than input[i]ßß
 * 
 * NOTE: You're expected to solve this problem without using division
 * 
 * Solution:
 * Time: O(n) time
 * Space: O(n) space
 * @param array n
 * @returns array
 */
export function arrayOfProducts(array: number[]) {
  let left: number[] = new Array(array.length).fill(1);

  let product = 1;
  for (let i = 1; i < array.length; i++) {
    product *= array[i - 1];
    left[i] = product;
  }

  product = 1;
  let result: number[] = new Array(array.length).fill(1);
  result[array.length - 1] = left[array.length - 1];
  for (let i = array.length - 2; i >= 0; i--) {
    product *= array[i + 1];
    result[i] = product * left[i];
  }

  return result;
}
