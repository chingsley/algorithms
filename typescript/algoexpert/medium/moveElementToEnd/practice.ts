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
}