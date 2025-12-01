/**
 * Pair Sums
Given a list of n integers arr[0..(n-1)], determine the number of different pairs of elements within it which sum to k.
If an integer appears in the list multiple times, each copy is considered to be different; that is, two pairs are considered different if one pair includes at least one array index which the other doesn't, even if they include the same values.
Signature
int numberOfWays(int[] arr, int k)
Input
n is in the range [1, 100,000].
Each value arr[i] is in the range [1, 1,000,000,000].
k is in the range [1, 1,000,000,000].
Output
Return the number of different pairs of elements which sum to k.
Example 1
n = 5
k = 6
arr = [1, 2, 3, 4, 3]
output = 2
The valid pairs are 2+4 and 3+3.
Example 2
n = 5
k = 6
arr = [1, 5, 3, 3, 3]
output = 4
There's one valid pair 1+5, and three different valid pairs 3+3 (the 3rd and 4th elements, 3rd and 5th elements, and 4th and 5th elements).
 */

function numberOfWays(arr, k) {
  // ask if you can sort the array in place (ie. mutate the array), if not then make a copy using map
  arr.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let j = arr.length - 1;
    while (i < j && arr[i] + arr[j] >= k) {
      num1 = arr[i];
      num2 = arr[j];
      if (num1 + num2 === k) {
        result += 1;
      }
      j--;
    }
  }
  return result;
}

console.log(numberOfWays([1, 5, 3, 3, 3], 6));
console.log(numberOfWays([1, 2, 3, 4, 3], 6));
