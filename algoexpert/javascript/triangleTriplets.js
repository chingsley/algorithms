const solution = (arr) => {
  arr.sort((a, b) => a - b);
  if (arr.length < 3) {
    return 0;
  }
  for (let i = 0; i < arr.length - 2; i++) {
    if (
      arr[i] + arr[i + 1] > arr[i + 2] &&
      arr[i] + arr[i + 2] > arr[i + 1] &&
      arr[i + 1] + arr[i + 2] > arr[i]
    ) {
      return 1;
    }
  }
  return 0;
};

const test1 = [10, 3, 8, 1];
const test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(test1));
console.log(solution(test2));
console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 3]));

// const a = [1, 2, 3, 4];
// console.log(a);
// console.log(a.pop(), a);
// console.log(a.pop(), a);
// console.log(a.pop(), a);
// console.log(a.pop(), a);
// console.log("============");
// console.log(a.push(4), a);
// console.log(a.push(3), a);
// console.log(a.push(2), a);
// console.log(a.push(1), a);
