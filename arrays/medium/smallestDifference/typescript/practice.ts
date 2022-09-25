{
  {
    // O(nlog(n) + mlog(m)) time | O(1) space
    // n = length of array one;
    // m = length of array two
    function smallestDifference(arrayOne: number[], arrayTwo: number[]): TwoElementArr {
      arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a, b) => a - b);

      let leastDiff = Infinity;
      let leastDiffPair: TwoElementArr = [-1, -1];

      let [i, j] = [0, 0];
      while (i < arrayOne.length && j < arrayTwo.length) {
        const diff = Math.abs(arrayOne[i] - arrayTwo[j]);
        if (diff < leastDiff) {
          leastDiff = diff;
          leastDiffPair = [arrayOne[i], arrayTwo[j]];
        }

        if (arrayOne[i] === arrayTwo[j]) {
          return leastDiffPair;
        } else if (arrayOne[i] < arrayTwo[j]) {
          i += 1;
        } else {
          j += 1;
        }
      }
      return leastDiffPair;
    }

    type TwoElementArr = [number, number];

  }
  {
    // O(nlog(n) + mlog(m)) time | O(1) space;
    // n = length of arrayOne
    // m = length of arrayTwo
    function smallestDifference(arrayOne: number[], arrayTwo: number[]): number[] {
      arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a, b) => a - b);

      let smallest = Infinity;
      let smallestPair: number[] = [];

      let i = 0;
      let j = 0;
      while (i < arrayOne.length && j < arrayTwo.length) {
        const diff = Math.abs(arrayOne[i] - arrayTwo[j]);
        if (diff < smallest) {
          smallest = diff;
          smallestPair = [arrayOne[i], arrayTwo[j]];
        }

        if (arrayOne[i] > arrayTwo[j]) {
          j += 1;
        } else if (arrayOne[i] < arrayTwo[j]) {
          i += 1;
        } else {
          return smallestPair;
        }
      }

      return smallestPair;
    }
  }
  {
    // O(mlog(m) + nlog(n)) time
    // m = length of arrayOne, n = length of arrayTwo
    // O(1) space
    function smallestDifference(arrayOne: number[], arrayTwo: number[]): TwoElementArr {
      arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a, b) => a - b);

      let smallestValue: number = Infinity;
      let smallestPair: TwoElementArr = [-1, -1];

      let [i, j] = [0, 0];
      while (i < arrayOne.length && j < arrayTwo.length) {
        const num1 = arrayOne[i];
        const num2 = arrayTwo[j];

        const diff = Math.abs(num1 - num2);
        if (diff < smallestValue) {
          smallestValue = diff;
          smallestPair = [num1, num2];
        }

        if (num1 === num2) {
          return smallestPair;
        } else if (num1 > num2) {
          j += 1;
        } else {
          i += 1;
        }
      }

      return smallestPair;
    }

    type TwoElementArr = [number, number];
  }
  {
    /**
 * Solution:
 * Time: O( nlog(n) + mlog(m) )
 * Space: O(1)
 *        where n = length of arrayOne
 *              m = length of arrayTwo
 * @param arrayOne n
 * @param arrayTwo m
 * @returns TwoElementArr
 */
    function smallestDifference(arrayOne: number[], arrayTwo: number[]): TwoElementArr {
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
  }
  {
    // O(nlog(n)) time | O(1) space
    function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
      arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a, b) => a - b);

      let smallestPair = [-Infinity, Infinity];
      let [i, j] = [0, 0];
      while (i < arrayOne.length && j < arrayTwo.length) {
        if (Math.abs(arrayOne[i] - arrayTwo[j]) < Math.abs(smallestPair[0] - smallestPair[1])) {
          smallestPair = [arrayOne[i], arrayTwo[j]];
        }
        if (arrayOne[i] > arrayTwo[j]) {
          j += 1;
        } else if (arrayOne[i] < arrayTwo[j]) {
          i += 1;
        } else {
          return [arrayOne[i], arrayTwo[j]];
        }
      }

      return smallestPair;
    }



  }
}

export const ___ = '___';