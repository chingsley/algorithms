type TwoElementArr = [number, number];

// O(nlog(n) + mlog(m))
// where n = length of arrayOne, and m = length of arrayTwo
export function smallestDifference(arrayOne: number[], arrayTwo: number[]): TwoElementArr {
  let leftIdx = 0;
  let rightIdx = 0;
  let SmallestNum = Infinity;
  let smallestPair: TwoElementArr = [0, 0];

  // sort the two arrays
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  while (leftIdx < arrayOne.length && rightIdx < arrayTwo.length) {
    const num1 = arrayOne[leftIdx];
    const num2 = arrayTwo[rightIdx];
    const diff = num1 > num2 ? num1 - num2 : num2 - num1;

    if (num1 < num2) {
      leftIdx++;
    } else if (num1 > num2) {
      rightIdx++;
    } else { // num1 === num2 and diff === 0
      return [num1, num2];
    }

    if (diff < SmallestNum) {
      SmallestNum = diff;
      smallestPair = [num1, num2];
    }
  }

  return smallestPair;
}



/**
 * [-1, 3, 5, 10, 20, 28]
 *
 * [15, 17, 26, 134, 135]
 *
 *
 * diff: 16 -> [-1, 15]
 */