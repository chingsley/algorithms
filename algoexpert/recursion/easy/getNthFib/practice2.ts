{
  {
    // O(n) time | O(n) space
    function getNthFib(n: number, memo: { [key: number]: number; } = {}): number {
      const val = n - 1;
      if (val <= 0) return 0;
      if (val === 1) return 1;
      if (n in memo) {
        return memo[n];
      }

      memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
      return memo[n];
    }

  }
}

export const __ = '__';