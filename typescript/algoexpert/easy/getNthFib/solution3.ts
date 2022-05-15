// O(n) time | O(1) space
export function getNthFib(n: number) {
  const arr: number[] = [0, 1];
  if(n === 1) return arr[0];
  if(n === 2) return arr[1];
  let result: number = 0;
  let count: number = 3;
  while (count <= n) {
   result = arr[0] + arr[1];
   arr[0] = arr[1];
   arr[1] = result;
   // console.log({ n, arr, count })
   count++;
  }
   return result;
 }


// 0, 1, 1, 2, 3, 5, 8, 13, 21
console.log(
  getNthFib(9)
)
