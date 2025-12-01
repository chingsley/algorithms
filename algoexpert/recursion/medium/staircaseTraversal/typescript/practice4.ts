{
  {// ITERATION (BEST TIME AND SPACE COMPLEXITY)
    // O(n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number) {
      const array = new Array(height + 1).fill(1);
      let runningSum = 1;
      for (let i = 2; i < array.length; i++) {
        if (i <= maxSteps) {
          runningSum = runningSum + array[i - 1];
          array[i] = runningSum;
        } else {
          runningSum = runningSum + array[i - 1] - array[i - 1 - maxSteps];
          array[i] = runningSum;
        }
      }
      return array[height];
    }
  }
  {
    // O(n) time
    // O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);
      let sum = 1;
      for (let i = 2; i < array.length; i++) {
        if (i <= maxSteps) {
          sum += array[i - 1];
        } else {
          sum += array[i - 1] - array[i - maxSteps - 1];
        }
        array[i] = sum;
      }

      return array[height];
    }
  }
  {
    // O(n) time
    // O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);
      let sum = 1;
      for (let i = 2; i < array.length; i++) {
        const n = i > maxSteps ? array[i - maxSteps - 1] : 0;
        sum += array[i - 1] - n;
        array[i] = sum;
      }

      return array[height];
    }
  }
  {
    // O(n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);
      let sum = 1;
      for (let i = 2; i < array.length; i++) {
        const x = i > maxSteps ? array[i - maxSteps - 1] : 0;
        sum = sum + array[i - 1] - x;
        array[i] = sum;
      }

      return array[height];
    }

  }
  {
    // O(k * n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const waysOf = new Array(height + 1).fill(1);

      for (let currentHeight = 2; currentHeight < waysOf.length; currentHeight++) {
        let kSum = 0;
        for (let i = 1; i <= maxSteps; i++) {
          kSum += waysOf[currentHeight - i] || 0;
        }
        waysOf[currentHeight] = kSum;
      }

      return waysOf[height];
    }
  }
  {
    // O(n) time | O(n) space;
    // n = height
    function staircaseTraversal(height: number, maxSteps: number): number {
      const ways = new Array(height + 1).fill(1);

      let kSum = 1;
      for (let currentHeight = 2; currentHeight < ways.length; currentHeight++) {
        if (currentHeight <= maxSteps) {
          kSum = kSum + ways[currentHeight - 1];
        } else {
          kSum = kSum + ways[currentHeight - 1] - ways[currentHeight - maxSteps - 1];
        }
        ways[currentHeight] = kSum;
      }

      return ways[height];
    }
  }
  {
    // O(n) time | O(n) space
    // n = height
    function staircaseTraversal(height: number, maxSteps: number) {
      const array = new Array(height + 1).fill(1);
      let kSum = 1;
      for (let hgt = 2; hgt < array.length; hgt++) {
        kSum += array[hgt - 1] - (array[hgt - maxSteps - 1] || 0);
        array[hgt] = kSum;
      }

      return array[height];
    }
  }
  {
    // O(n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);

      let kSum = 1;
      for (let i = 2; i < array.length; i++) {
        kSum += array[i - 1] - (array[i - maxSteps - 1] || 0);
        array[i] = kSum;
      }

      return array[height];
    }
  }
  {
    // O(n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);

      let currSum = 1;
      for (let i = 2; i < array.length; i++) {
        currSum += array[i - 1] - (array[i - maxSteps - 1] || 0);
        array[i] = currSum;
      }

      return array[height];
    }
  }
  {
    // O(n) time | O(n) space; (n = height, k = maxSteps)
    function staircaseTraversal(height: number, maxSteps: number) {
      const array = new Array(height + 1).fill(0);
      [array[0], array[1]] = [1, 1];
      let runningSum = 1;
      for (let i = 2; i < array.length; i++) {
        runningSum += array[i - 1] - (array[i - maxSteps - 1] || 0);
        array[i] = runningSum;
      }
      return array[height];
    }
  }
  {
    // O(n) time | O(n) space; (n = height, k = maxSteps)
    function staircaseTraversal(height: number, maxSteps: number) {
      const array = new Array(height + 1).fill(0);
      [array[0], array[1]] = [1, 1];
      for (let i = 2; i < array.length; i++) {
        array[i] = (2 * array[i - 1]) - (array[i - maxSteps - 1] || 0);
      }
      return array[height];
    }
  }
}

export const ___ = '___';