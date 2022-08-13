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
}

export const ___ = '___';