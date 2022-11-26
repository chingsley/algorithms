{
  {
    // O(n) time | O(n) space
    function getNthFib(n: number) {
      const array = new Array(n).fill(0);
      if (array.length > 1) array[1] = 1;

      for (let i = 2; i < array.length; i++) {
        array[i] = array[i - 1] + array[i - 2];
      }

      return array[n - 1];
    }
  }
}

export const __ = '__';