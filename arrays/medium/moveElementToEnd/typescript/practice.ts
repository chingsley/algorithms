{
  {
    // O(n) time | O(1) space
    function moveElementToEnd(array: number[], toMove: number) {
      let left = 0;
      let right = array.length - 1;
      while (left < right) {
        if (array[left] === toMove && array[right] === toMove) {
          right -= 1;
        } else if (array[left] !== toMove && array[right] !== toMove) {
          left += 1;
        } else {
          if (array[left] === toMove) {
            swap(left, right, array);
          }
          left += 1;
          right -= 1;
        }
      }
      return array;
    }

    function swap(i: number, j: number, array: number[]) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    /*
    * 2 2         <-
    * x x      ->
    * 2 x swap -> <-
    * x 2      -> <-
    *
    */
  }
  {
    // O(n) time | O(1) space;
    // n = length of array
    function moveElementToEnd(array: number[], toMove: number) {
      let [i, j] = [0, array.length - 1];
      while (i < j) {
        if (array[i] === toMove && array[j] !== toMove) {
          swap(i, j, array);
          [i, j] = [i + 1, j - 1];
        } else if (array[i] === toMove && array[j] === toMove) {
          j -= 1;
        } else if (array[i] !== toMove && array[j] !== toMove) {
          i += 1;
        } else {
          [i, j] = [i + 1, j - 1];
        }
      }
      return array;
    }

    function swap(i: number, j: number, array: number[]) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // 2 2      <-- 
    // 2 3  swap ---> <---
    // 3 2  ---> <---
    // 3 3  --->
  }
  {
    // O(n) time | O(n) space
    function moveElementToEnd(array: number[], toMove: number) {
      let [i, j] = [0, array.length - 1];
      while (i < j) {
        if (array[i] === toMove && array[j] === toMove) {
          j -= 1;
        } else if (array[i] !== toMove && j !== toMove) {
          i += 1;
        } else {
          if (array[i] === toMove) swap(i, j, array);
          i += 1;
          j -= 1;
        }
      }

      return array;
    }

    function swap(i: number, j: number, array: number[]) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}


export const ___ = '___';