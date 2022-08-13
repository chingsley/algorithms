{
  {
    // O(n) time | O(n) space
    function getNthFib(n: number, memo: { [key: number]: number; } = { 1: 0, 2: 1 }): number {
      if (n in memo) return memo[n];

      memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
      return memo[n];
    }
  }
}