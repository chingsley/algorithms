// O(n) time | O(1) space
/**
 * THE BOOYER-MOORE VOTING ALGORITHM:
 * Imagine every number in the array is a person voting for a candidate.
 * - When a number matches the current candidate, give that candidate +1 vote.
 * - When a number is different, subtract 1 vote.
 * - When the vote count reaches 0, the current candidate has lost its advantage. The next number becomes the new candidate.
 * Why does this work? If a number appears more than half the time, there are not enough other numbers to cancel all its appearances. It must survive as the final candidate. 

 * @param array array of numbers
 * @returns integer
 * NOTE: this solution works only if it's gauranteed that the array must
 * have a majority element. If that is NOT gauranteed, then this solution
 * will fail. For e.g with this input: [1, 1, 4, 4, 7, 2, 2], there is no
 * majority element and in that case this solution will fail.
 */
export function majorityElement(array: number[]) {
  let majElement = array[0];
  let count = 0;
  for (let num of array) {
    if (count === 0) majElement = num;

    if (num === majElement) {
      count += 1;
    } else {
      count -= 1;
    }

  }

  return majElement;
}

/**
 * [2, 3, 1, 3] -> returns 1 (there is no majority element. The algorithm will only return the correct result if there is a majority element in the array.).
 */



