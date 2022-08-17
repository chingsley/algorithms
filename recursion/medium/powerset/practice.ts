{
  {

    /*
    * O(n * 2^n) time
    * O(n * 2 ^ n) space
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

    // console.log(
    //   powerset([1, 2, 3])
    // );
  }
  {
    // O(n * 2 ^ n) time | O(n * 2 ^ n) space
    function powerset(array: number[]) {
      if (array.length === 0) return [[]];

      const [first, ...rest] = array;
      const result: number[][] = [];
      for (let set of powerset(rest)) {
        result.push(set);
        result.push([first, ...set]);
      }

      console.log(result);
      return result;
    }

    console.log(
      powerset([1, 2, 3])
    );
  }
  {
    // O(n * 2^n) time | O(n * 2^n) space
    function powerset(array: number[]) {
      if (array.length === 0) return [[]];

      const [first, ...rest] = array;
      const result: number[][] = [];
      const powerSetOfRest = powerset(rest);
      for (let arr of powerSetOfRest) {
        result.push(arr);
        result.push([first, ...arr]);
      }

      // console.log({ first, result })
      return result;
    }

  }
}

export const __ = '__';