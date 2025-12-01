// Not working

function minSubArraySum(arr) {
  const p: [number, number][] = [[0, 0]];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    p.push([sum, i]);
  }

  p.sort((a, b) => a[0] - b[0]);

  let min = Infinity;
  let [l, u] = [0, 0];
  for (let i = 1; i < p.length; i++) {
    const diff = p[i][0] - p[i - 1][0];
    console.log(p[i], { diff, min }, diff < min);
    if (diff < min) {
      min = diff;
      [l, u] = [p[i - 1][1], p[i][1]];
      console.log([l, u]);
    }
  }

  return [l, u];
}


const result = minSubArraySum([28, -70, -23, 92, 56, -33, -77]);
console.log(result);