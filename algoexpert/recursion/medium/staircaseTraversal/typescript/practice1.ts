{
  {
    // O(k^n) time | O(n) space; (n = height, k = maxSteps)
    function staircaseTraversal(height: number, maxSteps: number) {
      if (height < 0) return 0;
      if (height <= 1) return 1;

      let numOfWays = 0;
      for (let j = 1; j <= maxSteps; j++) {
        numOfWays += staircaseTraversal(height - j, maxSteps);
      }
      return numOfWays;
    }
  }
  {
    // O(k^n) time
    // O(n) space
    // k = maxSteps | n = height
    function staircaseTraversal(height: number, maxSteps: number): number {
      return waysOf(height, maxSteps);
    }

    function waysOf(height: number, maxSteps: number): number {
      if (height < 0) return 0;
      if (height < 2) return 1;
      let ways = 0;
      for (let i = 1; i <= maxSteps; i++) {
        ways += waysOf(height - i, maxSteps);
      }

      return ways;
    }
  }
}

export const __ = '__';