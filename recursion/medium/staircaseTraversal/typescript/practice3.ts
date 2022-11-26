{
  {
    // O(k * n) time | O(n) space; (n = height, k = maxSteps)
    function staircaseTraversal(height: number, maxSteps: number) {
      const array = new Array(height + 1).fill(0);
      [array[0], array[1]] = [1, 1];
      for (let i = 2; i < array.length; i++) {
        for (let j = 1; j <= maxSteps; j++) {
          if (i - j < 0) continue;
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
  {
    // O(n * k) time
    // O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);
      for (let i = 2; i < array.length; i++) {
        array[i] = 0;
        let j = 1;
        while (j <= maxSteps) {
          if (i - j < 0) break;
          array[i] += array[i - j];
          j += 1;
        }
      }

      return array[height];
    }
  }
  {
    // O(n * k) time
    // O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);
      for (let i = 2; i < array.length; i++) {
        array[i] = 0;
        let j = 1;
        while (j <= maxSteps) {
          array[i] += array[i - j] || 0;
          j += 1;
        }
      }

      return array[height];
    }
  }
  {
    // O(k * n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);
      for (let i = 2; i < array.length; i++) {
        array[i] = 0;
        for (let j = 1; j <= maxSteps; j++) {
          array[i] += array[i - j] || 0;
        }
      }

      return array[height];
    }
  }
  {
    // O(k * n) time
    // O(n) space
    // k = maxSteps | n = height
    function staircaseTraversal(height: number, maxSteps: number): number {
      return waysOf(height, maxSteps);
    }

    function waysOf(height: number, maxSteps: number, memo: Memo = { 0: 1, 1: 1 }): number {
      if (height < 0) return 0;
      if (height in memo) return memo[height];

      memo[height] = 0;
      for (let i = 1; i <= maxSteps; i++) {
        memo[height] += waysOf(height - i, maxSteps, memo);
      }

      return memo[height];
    }

    type Memo = { [key: number]: number; };
  }
  {
    // O(k * n) time | O(n) space
    // n = height | k = maxSteps;
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);

      for (let hgt = 2; hgt < array.length; hgt++) {
        array[hgt] = 0;
        for (let j = 1; j <= maxSteps; j++) {
          if (hgt - j < 0) continue;
          array[hgt] += array[hgt - j];
        }
      }

      return array[height];
    }
  }
  {
    // O(k * n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(0);
      [array[0], array[1]] = [1, 1];

      for (let i = 2; i < array.length; i++) {
        const currentHeight = i;
        for (let j = 1; j <= maxSteps; j++) {
          if (currentHeight - j < 0) break;
          array[currentHeight] += array[currentHeight - j];
        }
      }

      return array[height];
    }
  }
  {
    // O(k * n) time | o(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const array = new Array(height + 1).fill(1);
      for (let i = 2; i < array.length; i++) {
        array[i] = 0;
        for (let j = 1; j <= maxSteps; j++) {
          if (i - j < 0) continue;
          array[i] += array[i - j];
        }
      }

      return array[height];
    }

  }
}

export const __ = '__';