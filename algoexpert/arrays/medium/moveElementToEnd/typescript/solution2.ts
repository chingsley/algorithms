/**
 * Question:
 * Given an array of integers and an integer. Write a function
 * that moves all instances of that integer in the array to the
 * end of the array and returns the array.
 * The function should perform this in place (i.e, it should
 * mutate the input array) and doesn't need to maintain the
 * order of the other integers.
 * 
 * Solution:
 * Time: O(n)
 * Space: O(1)
 * 
 * @param array n
 * @param toMove number
 * @returns array
 */
export function moveElementToEnd(array: number[], toMove: number) {
  let leftIdx: number = 0;
  let rightIdx: number = array.length - 1;
  while (leftIdx < rightIdx) {
    if (array[leftIdx] === toMove && array[rightIdx] !== toMove) { // case 1
      swap(leftIdx, rightIdx, array);
      leftIdx += 1;
      rightIdx -= 1;
    } else if (array[leftIdx] === toMove && array[rightIdx] === toMove) { // case 2
      rightIdx -= 1;
    } else if (array[leftIdx] !== toMove && array[rightIdx] !== toMove) { // case 3
      leftIdx += 1;
    } else { // case 4
      leftIdx += 1;
      rightIdx -= 1;
    }
  }

  return array;
}

function swap(i: number, j: number, array: number[]) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// toMove = 2,    3 represents any other number
/**
 * 2  3  swap & ->  <-    (if case 1)
 * 2  2    <-             (if case 2)
 * 3  3  ->               (if case 3)
 * 3  2  -> <-            (else case 4)
 */




/****  PRACTICE ****/
{
  {

    // export function moveElementToEnd(array: number[], toMove: number) {
    //   let left = 0;
    //   let right = array.length - 1;
    //   while (left < right) {
    //     if (array[left] === toMove && array[right] === toMove) {
    //       right -= 1;
    //     } else if (array[left] !== toMove && array[right] !== toMove) {
    //       left += 1;
    //     } else {
    //       if (array[left] === toMove) swap(left, right, array);
    //       left += 1;
    //       right -= 1;
    //     }
    //   }
    //   return array;
    // }

    // function swap(i: number, j: number, array: number[]) {
    //   const temp = array[i];
    //   array[i] = array[j];
    //   array[j] = temp;
    // }

    /*
    toMove = 2, any other number = '3'
  
    i   j
    2   2         <-
    3   3      ->
    3   2      -> <-
    2   3 swap -> <-
    */
  }

  {
    //  export function moveElementToEnd(array: number[], toMove: number) {
    //   let [i, j] = [0, array.length - 1];
    //   while(i < j) {
    //     if(array[i] === toMove && array[j] !== toMove) {
    //       swap(i, j, array);
    //       [i, j] = [i + 1, j - 1]
    //     } else if(array[i] === toMove && array[j] === toMove) {
    //       j -= 1;
    //     } else if(array[i] !== toMove && array[j] !== toMove) {
    //       i += 1
    //     } else {
    //       [i, j] = [i + 1, j - 1]
    //     }
    //   }
    //   return array;
    // }

    // function swap(i: number, j: number, array: number[]) {
    //   const temp = array[i];
    //   array[i] = array[j];
    //   array[j] = temp;
    // }

    // // 2 2      <--
    // // 2 3  swap ---> <---
    // // 3 2  ---> <---
    // // 3 3  --->
  }

}