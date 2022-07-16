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
}