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
  {
    // O(n^2) time | O(n^2) space
    function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
      if (arrayOne.length !== arrayTwo.length) return false;
      if (arrayOne[0] !== arrayTwo[0]) return false;

      if (arrayOne.length <= 1 && arrayTwo.length <= 1) return true;

      const [leftOne, rightOne]: number[][] = [[], []];
      const [leftTwo, rightTwo]: number[][] = [[], []];
      for (let i = 1; i < arrayOne.length; i++) {
        arrayOne[i] < arrayOne[0] ? leftOne.push(arrayOne[i]) : rightOne.push(arrayOne[i]);
        arrayTwo[i] < arrayTwo[0] ? leftTwo.push(arrayTwo[i]) : rightTwo.push(arrayTwo[i]);
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
  {
    // O(n^2) time | O(n^2) space
    function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
      if (arrayOne.length !== arrayTwo.length) return false;
      if (arrayOne[0] !== arrayTwo[0]) return false;

      if (arrayOne.length <= 1 && arrayTwo.length <= 1) return true;

      const [arrayOneLeft, arrayOneRight]: number[][] = [[], []];
      const [arrayTwoLeft, arrayTwoRight]: number[][] = [[], []];
      for (let i = 1; i < arrayOne.length; i++) {
        arrayOne[i] < arrayOne[0] ? arrayOneLeft.push(arrayOne[i]) : arrayOneRight.push(arrayOne[i]);
        arrayTwo[i] < arrayTwo[0] ? arrayTwoLeft.push(arrayTwo[i]) : arrayTwoRight.push(arrayTwo[i]);
      }
      return sameBsts(arrayOneLeft, arrayTwoLeft) && sameBsts(arrayOneRight, arrayTwoRight);
    }
  }
  {
    // O(n^2) time | O(n^2) space
    function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
      if (arrayOne.length !== arrayTwo.length) return false;
      if (arrayOne[0] !== arrayTwo[0]) return false;

      if (arrayOne.length <= 1) return true;

      const [arrOneLeft, arrOneRight]: number[][] = [[], []];
      const [arrTwoLeft, arrTwoRight]: number[][] = [[], []];
      for (let i = 1; i < arrayOne.length; i++) {
        arrayOne[i] < arrayOne[0] ? arrOneLeft.push(arrayOne[i]) : arrOneRight.push(arrayOne[i]);
        arrayTwo[i] < arrayTwo[0] ? arrTwoLeft.push(arrayTwo[i]) : arrTwoRight.push(arrayTwo[i]);
      }
      return sameBsts(arrOneLeft, arrTwoLeft) && sameBsts(arrOneRight, arrTwoRight);
    }
  }
  {
    // O(n^2) time | O(n^2) space
    function sameBsts(arrayOne: number[], arrayTwo: number[]) {
      if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
      if (arrayOne.length !== arrayTwo.length) return false;
      if (arrayOne[0] !== arrayTwo[0]) return false;

      const [arrayOneLeft, arrayTwoLeft,
        arrayOneRight, arrayTwoRight
      ] = parseArray(arrayOne, arrayTwo);
      if (!sameBsts(arrayOneLeft, arrayTwoLeft)) return false;
      if (!sameBsts(arrayOneRight, arrayTwoRight)) return false;

      return true;
    }

    function parseArray(arr1: number[], arr2: number[]): number[][] {
      const [arr1Left, arr2Left,
        arr1Righ, arr2Right
      ]: number[][] = [[], [], [], []];
      for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] < arr1[0]) {
          arr1Left.push(arr1[i]);
        } else {
          arr1Righ.push(arr1[i]);
        }

        if (arr2[i] < arr2[0]) {
          arr2Left.push(arr2[i]);
        } else {
          arr2Right.push(arr2[i]);
        }
      }

      return [arr1Left, arr2Left, arr1Righ, arr2Right];
    }
  }
}

export const __ = '__';