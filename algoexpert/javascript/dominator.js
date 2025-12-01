const solution = (arr) => {
  if (arr.length < 1) {
    return -1;
  }
  let dictCount = {};
  let mostOccurrence = null;
  let highestCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (dictCount[item]) {
      dictCount[item].push(i);
      if (dictCount[item].length > highestCount) {
        highestCount = dictCount[item].length;
        mostOccurrence = item;
      }
    } else {
      dictCount[item] = [i];
      if (dictCount[item].length > highestCount) {
        highestCount = dictCount[item].length;
        mostOccurrence = item;
      }
    }
  }

  return dictCount[mostOccurrence].length > arr.length / 2
    ? dictCount[mostOccurrence][0]
    : -1;
};

let test1 = ["a", "d", "c", "d", "d"];
const res = solution([1, 2, 2, 3, 3, 3, 3]);
console.log(res);
