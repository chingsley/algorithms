{
  {
    // O(n) time | O(n) space (n = length of array)
    function maximizeExpression(array: number[]) {
      if (array.length < 4) return 0;

      const first = new Array(array.length).fill(-Infinity);
      const second = new Array(array.length).fill(-Infinity);
      const third = new Array(array.length).fill(-Infinity);
      const fourth = new Array(array.length).fill(-Infinity);

      first[0] = array[0];
      for (let i = 1; i < first.length; i++) {
        first[i] = Math.max(first[i - 1], array[i]);
      }
      for (let i = 1; i < second.length; i++) {
        second[i] = Math.max(second[i - 1], first[i - 1] - array[i]);
      }
      for (let i = 2; i < third.length; i++) {
        third[i] = Math.max(third[i - 1], second[i - 1] + array[i]);
      }
      for (let i = 3; i < fourth.length; i++) {
        fourth[i] = Math.max(fourth[i - 1], third[i - 1] - array[i]);
      }

      return fourth[fourth.length - 1];
    }
  }
}

export const __ = '__';