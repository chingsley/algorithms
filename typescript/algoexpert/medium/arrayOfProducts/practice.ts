import * as _ from './solution1'; // this is just to silence typescript duplicate function warning
{
  {
    // O(n) time | O(n) space
    function arrayOfProducts(array: number[]) {
      const lefts = new Array(array.length).fill(1);
      const rights = new Array(array.length).fill(1);
      const result: number[] = [];

      for (let i = 1; i < array.length; i++) {
        lefts[i] = lefts[i - 1] * array[i - 1];
      }
      for (let i = array.length - 2; i >= 0; i--) {
        rights[i] = rights[i + 1] * array[i + 1];
      }
      for (let i = 0; i < array.length; i++) {
        result.push(lefts[i] * rights[i]);
      }

      return result;
    }
  }
  {
    function arrayOfProducts(array: number[]) {
      const lefts = new Array(array.length).fill(1);
      const rights = new Array(array.length).fill(1);
      const result: number[] = new Array(array.length).fill(1);

      for (let i = 1; i < array.length; i++) {
        lefts[i] = lefts[i - 1] * array[i - 1];
      }
      result[result.length - 1] = lefts[lefts.length - 1];
      for (let i = array.length - 2; i >= 0; i--) {
        rights[i] = rights[i + 1] * array[i + 1];
        result[i] = rights[i] * lefts[i];
      }

      return result;
    }
  }
}