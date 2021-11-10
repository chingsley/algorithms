function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let smallestPair = [];
  let smallest = Infinity;
  let currentDiff = Infinity;

  while (left < arrayOne.length && right < arrayTwo.length) {
    const firstNum = arrayOne[left];
    const secondNum = arrayTwo[right];
    // console.log({ currentDiff, left, right, smallest });


    if (firstNum < secondNum) {
      currentDiff = secondNum - firstNum;
      left += 1;
    } else if (secondNum < firstNum) {
      currentDiff = firstNum - secondNum;
      right += 1;
    } else {
      return [firstNum, secondNum];
    }
    if (currentDiff < smallest) {
      smallest = currentDiff;
      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;
}

const arr1 = [-1, 5, 10, 20, 28, 3];
const arr2 = [26, 134, 135, 15, 17];
console.log(smallestDifference(arr1, arr2));


// Do not edit the line below.
exports.smallestDifference = smallestDifference;