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
  {
    // O(n) | O(n) space
    // n = length of array
    function arrayOfProducts(array: number[]) {
      const left = [1];
      for (let i = 1; i < array.length; i++) {
        left.push(array[i - 1] * left[left.length - 1]);
      }

      const right = new Array(array.length).fill(1);
      for (let i = array.length - 2; i >= 0; i--) {
        right[i] = array[i + 1] * right[i + 1];
      }

      const result: number[] = [];
      for (let i = 0; i < array.length; i++) {
        result.push(left[i] * right[i]);
      }

      return result;
    }
  }
  {
    // O(n) | O(n) space
    // n = length of array
    function arrayOfProducts(array: number[]) {
      const left = [1];
      for (let i = 1; i < array.length; i++) {
        left.push(array[i - 1] * left[left.length - 1]);
      }

      const right = new Array(array.length).fill(1);
      const result = new Array(array.length).fill(1);
      result[result.length - 1] = right[right.length - 1] * left[left.length - 1];
      for (let i = array.length - 2; i >= 0; i--) {
        right[i] = array[i + 1] * right[i + 1];
        result[i] = right[i] * left[i];
      }

      return result;
    }
  }
  {
    // O(n) time | O(n) space
    function arrayOfProducts(array: number[]) {
      const left = [1];
      for (let i = 1; i < array.length; i++) {
        left.push(array[i - 1] * left[left.length - 1]);
      }

      let product = 1;
      const result = new Array(array.length).fill(1);
      result[result.length - 1] = product * left[left.length - 1];
      for (let i = array.length - 2; i >= 0; i--) {
        product = array[i + 1] * product;
        result[i] = product * left[i];
      }

      return result;
    }

  }
  {
    function arrayOfProducts(array: number[]) {
      const left = new Array(array.length).fill(1);
      for (let i = 1; i < array.length; i++) {
        left[i] = array[i - 1] * left[i - 1];
      }

      let product = 1;
      const result = new Array(array.length).fill(1);
      result[result.length - 1] = product * left[left.length - 1];
      for (let i = array.length - 2; i >= 0; i--) {
        product = array[i + 1] * product;
        result[i] = product * left[i];
      }

      return result;
    }
  }
}