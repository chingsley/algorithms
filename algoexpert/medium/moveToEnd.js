/**
 * time: O(n), space: O(1)
 */
function moveElementToEnd(array, toMove) {
  // Write your code here.
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const leftNum = array[leftPointer];
    const rightNum = array[rightPointer];

    if (leftNum === toMove && rightNum !== toMove) {
      array[leftPointer] = rightNum;
      array[rightPointer] = leftNum;
      leftPointer++;
      rightPointer--;
    } else if (rightNum === toMove) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 2, 3, 4, 2], 2));

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
