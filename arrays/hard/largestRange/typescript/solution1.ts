// O(n) time | O(n) space
export function largestRange(array: number[]): [number, number] {
  const dict: { [key: number]: boolean; } = array.reduce((acc, v) => ({ ...acc, [v]: false }), {});
  let [maxRange, maxLen]: [[number, number], number] = [[0, 0], 0];
  for (let v of array) {
    if (dict[v] === true) continue;
    const [range, len] = getRangeAndLength(v, dict);
    if (len > maxLen) [maxRange, maxLen] = [range, len];
  }

  return maxRange;
}

function getRangeAndLength(num: number, dict: { [key: number]: boolean; }): [[number, number], number] {
  let [i, j] = [num, num];
  while (i in dict) [dict[i], i] = [true, i - 1];
  while (j in dict) [dict[j], j] = [true, j + 1];
  return [[i + 1, j - 1], j - i - 1];
}

/*
*[1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
{
 1: f, 11: f, 3: f, 0: f, 15: f, 5: f, 2: f, 4: f, 10: f, 7: f, 12: f, 6: f
}

[1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
1: 0, 1, 2, 3, 4, 5, 6, 7    range [0, 7], length: 8
{
 1: t, 11: f, 3: t, 0: t, 15: f, 5: t, 2: t, 4: t, 10: f, 7: t, 12: f, 6: f
}

[1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
11: 10, 11, 12    range [10, 12], length 3
{
 1: t, 11: t, 3: t, 0: t, 15: f, 5: t, 2: t, 4: t, 10: t, 7: t, 12: t, 6: f
}

[1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
3: t, 0: t,

[1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
15: 15    range [15, 15], length 0
{
 1: t, 11: t, 3: t, 0: t, 15: t, 5: t, 2: t, 4: t, 10: t, 7: t, 12: t, 6: f
}

[1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
5: t, 2: t, 4: t, 10: t, 7: t, 12: t, 6: t

return range [0, 7]
*/
