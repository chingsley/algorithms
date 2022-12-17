export function canSum(target: number, array: number[]) {
  const targetArr = new Array(target + 1).fill(false);
  targetArr[0] = true;

  for (let i = 0; i < targetArr.length; i++) {
    if (targetArr[i] === false) continue;

    for (let num of array) {
      if (i + num < targetArr.length) targetArr[i + num] = true;
    }
  }

  return targetArr[target];
}


console.log(canSum(7, [2, 3, 4, 1, 7])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true

// t = 7, array = [5, 3, 4]
// 0 1 2 3 4 5 6 7
// t f f f f f f f :initial
// t f f t t t t t :final