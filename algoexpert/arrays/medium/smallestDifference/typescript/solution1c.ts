/**
 * Question:
 * Write a function that takes in two non-empty arrays of
 * integers, finds the pair of numbers (one from each array)
 * whose absolute difference is closest to zero, and returns an
 * array containing these two numbers, with the number from the
 * first array in the first position.
 * Note that the absolute difference of two integer is the distance
 * between them on the real number line. For example, the absolute
 * difference of -2 and 2 is 4, and the absolute difference of -5
 * and -4 is 1.
 * You can assume that there will only be one pair of numbers with
 * the smallest difference.
 * 
 * Solution:
 * Time: O( nlog(n) + mlog(m) )
 * Space: O(1)
 *        where n = length of arrayOne
 *              m = length of arrayTwo
 * @param arrayOne n
 * @param arrayTwo m
 * @returns TwoElementArr
 */
export function smallestDifference(arrayOne: number[], arrayTwo: number[]): TwoElementArr {
  let smallestPair: TwoElementArr = [-1, -1];
  let smallestValue: number = Infinity;

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let [p1, p2] = [0, 0];


  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    const num1 = arrayOne[p1];
    const num2 = arrayTwo[p2];

    if (Math.abs(num1 - num2) < smallestValue) {
      smallestPair = [num1, num2];
      smallestValue = Math.abs(num1 - num2);
    }

    if (num1 === num2) {
      return smallestPair;
    } else if (num1 > num2) {
      p2 += 1;
    } else {
      p1 += 1;
    }
  }

  return smallestPair;
}

type TwoElementArr = [number, number];