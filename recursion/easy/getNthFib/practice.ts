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
  {
    // O(n) time || O(1) space
    function getNthFib(n: number): number {
      let [f1, f2] = [0, 1];
      if (n <= 2) return [f1, f2][n - 1];

      for (let i = 3; i <= n; i++) {
        [f1, f2] = [f2, f1 + f2];
      }
      return f2;
    }
  }
  {
    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      let [f1, f2] = [0, 1];
      if (n <= 2) return [f1, f2][n - 1];

      for (let i = 2; i < n; i++) {
        [f1, f2] = [f2, f1 + f2];
      }

      return f2;
    }
  }
  {
    function getNthFib(n: number): number {
      const array = new Array(n).fill(1);
      array[0] = 0;

      for (let i = 2; i < array.length; i++) {
        array[i] = array[i - 1] + array[i - 2];
      }

      return array[n - 1];
    }
  }
  {
    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      let [f1, f2] = [0, 1];
      if (n <= 2) return [f1, f2][n - 1];

      let i = 2;
      while (i++ < n) [f1, f2] = [f2, f1 + f2];

      return f2;
    }
  }
  {
    // O(n) time (with memo) | O(n) space
    // O(2^n) time (without memo) | O(n) space
    function getNthFib(n: number, memo: Memo = { 1: 0, 2: 1 }): number {
      if (n in memo) return memo[n];

      memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
      return memo[n];
    }

    interface Memo { [key: number]: number; };
  }
  {
    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      let [f1, f2] = [0, 1];
      if (n < 3) return [f1, f2][n - 1];

      for (let i = 3; i <= n; i++) {
        [f1, f2] = [f2, f1 + f2];
      }

      return f2;
    }
  }
  {
    // O(n) time | O(1) space
    function getNthFib(n: number): number {
      let [f1, f2] = [0, 1];
      if (n <= 2) return [f1, f2][n - 1];

      for (let i = 3; i <= n; i++) {
        [f1, f2] = [f2, f1 + f2];
      }

      return f2;
    }
  }
}

export const ___ = '___';