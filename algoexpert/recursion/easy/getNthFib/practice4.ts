{
  {
    // O(n) time | O(1) space
    function getNthFib(n: number) {
      let [f1, f2] = [0, 1];
      if (n <= 2) return [f1, f2][n - 1];

      let count = 3;
      while (count++ <= n) [f1, f2] = [f2, f1 + f2];

      return f2;
    }

  }
}

const __ = '__';