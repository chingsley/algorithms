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
  {
    // RECURSION
    // O(k^n) time (without memoizaiton);
    // O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      return waysOf(height, maxSteps);
    }

    function waysOf(height: number, maxSteps: number): number {
      if (height <= 1) return 1;

      let ways = 0;
      for (let i = 1; i <= maxSteps; i++) {
        if (height - i < 0) continue;
        ways += waysOf(height - i, maxSteps);
      }

      return ways;
    }

  }
  {
    // RECURSION
    // O(n) time (with memoization)
    // O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      const memo: { [key: number]: number; } = {};
      return waysOf(height, maxSteps, memo);
    }

    function waysOf(height: number, maxSteps: number, memo: { [key: number]: number; }): number {
      if (height <= 1) return 1;

      if (height in memo) return memo[height];

      memo[height] = 0;
      for (let i = 1; i <= maxSteps; i++) {
        if (height - i < 0) continue;
        memo[height] += waysOf(height - i, maxSteps, memo);
      }

      return memo[height];
    }
  }
  {
    // O(k * n) time | O(n) space
    function staircaseTraversal(height: number, maxSteps: number): number {
      return waysOf(height, maxSteps);
    }

    type Num = number;
    type Memo = { [key: number]: number; };
    function waysOf(height: Num, maxSteps: Num, memo: Memo = { 0: 1, 1: 1 }): number {
      if (height in memo) return memo[height];

      memo[height] = 0;
      for (let i = 1; i <= maxSteps; i++) {
        if (height - i < 0) continue;
        memo[height] += waysOf(height - i, maxSteps, memo);
      }
      return memo[height];
    }
  }
  {/**
      O(k^n) time (without Memo) | O(k * n) time (with memo)
      O(n) space (with or without memo)
   * @param height h
   * @param maxSteps k
   * @param memo Memo
   * @returns number
   */
    function staircaseTraversal(height: number, maxSteps: number, memo: Memo = { 0: 1, 1: 1 }): number {
      if (height < 0) return 0;
      if (height in memo) return memo[height];

      let result = 0;
      for (let i = 1; i <= maxSteps; i++) {
        result += staircaseTraversal(height - i, maxSteps, memo);
      }

      return result;
    }

    type Memo = { [key: number]: number; };
  }
  {

    // O(k^n) time | O(n) space (without memo)
    // O(k * n) time | O(n) space (without memo)
    function staircaseTraversal(height: number, maxSteps: number, memo: Memo = { 0: 1, 1: 1 }): number {
      if (height < 0) return 0;
      if (height in memo) return memo[height];

      let ways = 0;
      let i = maxSteps;
      for (let i = 1; i <= maxSteps; i++) {
        ways += staircaseTraversal(height - i, maxSteps, memo);
      }

      memo[height] = ways;
      return memo[height];
    }

    interface Memo { [key: number]: number; };
  }
  {
    // O(k * n) time | O(n) space; (n = height, k = maxSteps)
    function staircaseTraversal(
      height: number, maxSteps: number, memo: { [key: number]: number; } = { 0: 1, 1: 1 }
    ) {
      if (height < 0) return 0;
      if (height in memo) return memo[height];

      memo[height] = 0;
      for (let j = 1; j <= maxSteps; j++) {
        memo[height] += staircaseTraversal(height - j, maxSteps);
      }
      return memo[height];
    }
  }
}

export const __ = '__';