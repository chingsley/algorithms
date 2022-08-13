{
  {

    /*
    * O(2^n) time
    * O(n^2) space
    */
    function powerset(array: number[]) {
      if (array.length === 0) return [[]];

      const [first, ...rest] = array;
      const result: number[][] = [];
      for (const arr of powerset(rest)) {
        result.push(arr);
        result.push([first, ...arr]);
      }

      return result;
    }

    console.log(
      powerset([1, 2, 3])
    );
  }
}