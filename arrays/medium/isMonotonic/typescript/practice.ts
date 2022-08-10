import * as _ from './solution1';
{
  {

    /**
    * Time: O(n)
    * space: O(1)
    * @param array n
    * @returns boolean
    */
    function isMonotonic(array: number[]) {
      let increasing: boolean = false;
      let decreasing: boolean = false;
      for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) increasing = true;
        if (array[i] < array[i - 1]) decreasing = true;
      }

      if (increasing && decreasing) return false;
      return true;
    }
  }
  {
    function isMonotonic(array: number[]) {
      let increasing = false;
      let decreasing = false;
      for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) increasing = true;
        if (array[i] < array[i - 1]) decreasing = true;
      }
      return (!(decreasing && increasing));
    }
  }
  {
    // O(n) time | O(1) space
    // n = length of array
    function isMonotonic(array: number[]) {
      let decreasing = false;
      let increasing = false;
      for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) increasing = true;
        if (array[i] < array[i - 1]) decreasing = true;
      }

      return !(decreasing && increasing);
    }
  }
}