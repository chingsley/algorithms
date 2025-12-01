{
  {
    type SpecialArray = Array<number | SpecialArray>;

    // Tip: You can use the Array.isArray function to check whether an item
    // is a list or an integer.
    // O(n) time
    // O(d) space
    // n = total no.of elements in the array, including subarray
    // d = the greatest depth of "special" arrays in the array
    function productSum(array: SpecialArray) {
      return sumProducts(array, 1);
    }

    function sumProducts(array: SpecialArray, weight: number): number {
      let res = 0;
      for (let value of array) {
        if (Array.isArray(value)) {
          res += weight * sumProducts(value, weight + 1);
        } else {
          res += weight * value;
        }
      }

      return res;
    }
  }
  {
    type SpecialArray = Array<number | SpecialArray>;

    // O(n) time (n = total no. of elements, including the nested items);
    // O(d) space (d = depth of the most nested SpecialArray)
    function productSum(array: SpecialArray, weight: number = 1) {
      let sum = 0;
      for (let value of array) {
        if (Array.isArray(value)) {
          sum += weight * productSum(value, weight + 1);
        } else {
          sum += weight * value;
        }
      }

      return sum;
    }
  }
  {
    type SpecialArray = Array<number | SpecialArray>;

    // O(n) time | O(d) space
    // n = total count of numbers in the specialArray, including nested numbers;
    // d = depth of the most nested array;
    function productSum(array: SpecialArray, weight: number = 1) {
      let sum = 0;
      for (let value of array) {
        if (Array.isArray(value)) {
          sum += weight * productSum(value, weight + 1);
        } else {
          sum += weight * value;
        }
      }

      return sum;
    }
  }
  {
    // O(n) time | O(d) space
    // n = total count of numbers in the array, included nested numbers
    // d = depth of the most nested array SpecialArray
    function productSum(array: SpecialArray, weight: number = 1) {
      let sum = 0;
      for (let value of array) {
        if (Array.isArray(value)) {
          sum += weight * productSum(value, weight + 1);
        } else {
          sum += weight * value;
        }
      }

      return sum;
    }


    type SpecialArray = Array<number | SpecialArray>;
  }
  {
    // O(n) time | O(d) space
    // n = total count of numbers, including nested numbers
    // d = depth of the most nested array
    function productSum(array: SpecialArray, weight: number = 1) {
      let sum = 0;
      for (let value of array) {
        if (Array.isArray(value)) {
          sum += weight * productSum(value, weight + 1);
        } else {
          sum += weight * value;
        }
      }

      return sum;
    }

    type SpecialArray = Array<number | SpecialArray>;
  }

  {
    // O(n) time | O(d) space
    // n = total no. of elements
    // d = depth of the most nested array
    function productSum(array: SpecialArray, weight = 1) {
      let result = 0;
      for (let value of array) {
        if (Array.isArray(value)) {
          result += weight * productSum(value, weight + 1);
        } else {
          result += weight * value;
        }
      }

      return result;
    }

    type SpecialArray = Array<number | SpecialArray>;
  }
  {
    type SpecialArray = Array<number | SpecialArray>;

    // O(n) time | O(d) space
    // n = no. of elements in the array | d = depth of the most nested subarray
    function productSum(array: SpecialArray, weight: number = 1): number {
      let sum = 0;
      for (let num of array) {
        if (Array.isArray(num)) {
          sum += weight * productSum(num, weight + 1);
        } else {
          sum += weight * num;
        }
      }
      return sum;
    }
  }
}

export const ___ = '___';