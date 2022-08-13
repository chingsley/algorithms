{
  {
    // O(k * n) time | O(n) space
    // n = height
    // k = maxSteps
    function staircaseTraversal(height: number, maxSteps: number): number {
      const memo: { [key: number]: number; } = {};
      return waysOf(height, maxSteps, { 0: 1, 1: 1 });
    }

    function waysOf(height: number, maxSteps: number, memo: { [key: number]: number; }) {
      if (height < 0) return 0;
      if (height in memo) return memo[height];

      let ways = 0;
      for (let i = maxSteps; i > 0; i--) {
        ways += waysOf(height - i, maxSteps, memo);
      }
      memo[height] = ways;
      return memo[height];
    }
  }
  {
    function staircaseTraversal(height: number, maxSteps: number): number {
      const memo: { [key: string]: number; } = {};
      return waysOf(height, maxSteps, memo);
    }

    function waysOf(height: number, maxSteps: number, memo: { [key: string]: number; }) {
      if (height < 0) return 0;
      if (height <= 1) return 1;

      const key = String(height);
      if (key in memo) return memo[key];

      let ways = 0;
      for (let i = maxSteps; i > 0; i--) {
        ways += waysOf(height - i, maxSteps, memo);
      }

      memo[key] = ways;
      return memo[key];
    }
  }
  {// ITERATION
    // O(k * n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number) {
      const array = new Array(height + 1).fill(1);
      for (let i = 2; i < array.length; i++) {
        array[i] = 0;
        let j = 0;
        while (j <= maxSteps && i - j >= 0) {
          array[i] += array[i - j];
          j += 1;
        }
      }
      return array[height];
    }
  }
  { // ITERATION
    // O(k * n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number) {
      const array = new Array(height + 1).fill(1);
      for (let i = 2; i < array.length; i++) {
        array[i] = 0;
        for (let j = 0; j < maxSteps + 1 && i - j >= 0; j++) {
          array[i] += array[i - j];
        }
      }
      return array[height];
    }
  }
  {// ITERATION
    // O(k * n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number) {
      const array = new Array(height + 1).fill(1);
      for (let i = 2; i < array.length; i++) {
        array[i] = 0;
        for (let j = 0; j <= maxSteps; j++) {
          if (i - j < 0) break;
          array[i] += array[i - j];
        }
      }
      return array[height];
    }
  }
  {
    // O(k * n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number) {
      const array = new Array(height + 1).fill(1);
      for (let i = 2; i < array.length; i++) {
        array[i] = 0;
        for (let j = 0; j <= Math.min(i, maxSteps); j++) {
          array[i] += array[i - j];
        }
      }
      return array[height];
    }
  }
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
}

export const ___ = '___';