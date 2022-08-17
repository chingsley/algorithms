{
  {
    // O(n) time | O(n) space
    function getNthFib(n: number, memo: { [key: number]: number; } = { 1: 0, 2: 1 }): number {
      if (n in memo) return memo[n];

      memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
      return memo[n];
    }
  }
  {
    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      const array = [0, 1];
      if (n === 1) return array[0];
      if (n === 2) return array[1];

      let next = 0;
      for (let i = 3; i <= n; i++) {
        next = array[0] + array[1];
        array[0] = array[1];
        array[1] = next;
      }

      return next;
    } ``;
  }
  {
    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      const array = [0, 1];
      if (n === 1) return array[0];
      if (n === 2) return array[1];

      for (let i = 3; i <= n; i++) {
        const next = array[0] + array[1];
        [array[0], array[1]] = [array[1], next];
      }

      return array[1];
    }
  }
  {

    type Memo = { [key: number]: number; };

    // O(n) time | O(n) space
    function getNthFib(n: number, memo: Memo = { 1: 0, 2: 1 }): number {
      if (n in memo) return memo[n];

      memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
      return memo[n];
    }

  }
  {

    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      const array = [0, 1];
      if (n <= array.length) return array[n - 1];
      for (let i = 3; i <= n; i++) {
        const fi = array[0] + array[1];
        [array[0], array[1]] = [array[1], fi];
      }

      return array[1];
    }
  }
  {

    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      const array = [0, 1];
      if (n <= array.length) return array[n - 1];
      for (let i = 3; i <= n; i++) {
        [array[0], array[1]] = [array[1], array[0] + array[1]];
      }

      return array[1];
    }
  }
  {
    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      let [f1, f2] = [0, 1];
      if (n <= 2) return [f1, f2][n - 1];
      for (let i = 3; i <= n; i++) [f1, f2] = [f2, f1 + f2];
      return f2;
    }
  }
  {

    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      let [f1, f2] = [0, 1];
      if (n <= 2) return [f1, f2][n - 1];
      let i = 3;
      while (i++ <= n) [f1, f2] = [f2, f1 + f2];
      return f2;
    }
  }
}

export const ___ = '___';