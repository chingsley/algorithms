function minSubArraySum(arr: number[]): number[] {
  let [a, b] = [0, 0];
  let min = arr[0];
  for (let l = 0; l < arr.length; l++) {
    let sum = 0;
    for (let u = l; u < arr.length; u++) {
      sum += arr[u];
      if (sum === 0) {
        return [l, u];
      }
      if (Math.abs(sum) < min) {
        min = Math.abs(sum);
        [a, b] = [l, u];
      }
    }
  }

  // console.log(a, b, min, [a, b, min]);
  return [a, b];
}

let result: number[] = [];
result = minSubArraySum([28, -70, -23, 92, 56, -33, -77]);
console.log(result);
result = minSubArraySum([28, -70, -23, 0, 56, -34, -77]);
console.log(result);
result = minSubArraySum([28, -70, -23, 56, -33, -77]);
console.log(result);