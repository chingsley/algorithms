{
  {
    // O(n^2) time | O(n^2) space
    function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
      if (arrayOne[0] !== arrayTwo[0]) return false;
      if (arrayOne.length !== arrayTwo.length) return false;
      if (arrayOne.length <= 1 && arrayTwo.length !== 1) return true;

      const [leftOne, rightOne, leftTwo, rightTwo]: number[][] = [[], [], [], []];
      for (let i = 1; i < arrayOne.length; i++) {
        if (arrayOne[i] < arrayOne[0]) {
          leftOne.push(arrayOne[i]);
        } else {
          rightOne.push(arrayOne[i]);
        }
        if (arrayTwo[i] < arrayTwo[0]) {
          leftTwo.push(arrayTwo[i]);
        } else {
          rightTwo.push(arrayTwo[i]);
        }
      }

      return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
    }
  }
  {
    // O(n^2) time | O(n^2) space
    function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
      if (arrayOne.length !== arrayTwo.length) return false;
      if (arrayOne[0] !== arrayTwo[0]) return false;

      if (arrayOne.length <= 1 && arrayTwo.length <= 1) return true;

      const [arrayOneLeft, arrayOneRight]: number[][] = [[], []];
      const [arrayTwoLeft, arrayTwoRight]: number[][] = [[], []];
      for (let i = 1; i < arrayOne.length; i++) {
        if (arrayOne[i] < arrayOne[0]) {
          arrayOneLeft.push(arrayOne[i]);
        } else {
          arrayOneRight.push(arrayOne[i]);
        }
        if (arrayTwo[i] < arrayTwo[0]) {
          arrayTwoLeft.push(arrayTwo[i]);
        } else {
          arrayTwoRight.push(arrayTwo[i]);
        }
      }

      return sameBsts(arrayOneLeft, arrayTwoLeft) && sameBsts(arrayOneRight, arrayTwoRight);
    }
  }
}

export const __ = '__';