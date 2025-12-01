// O(n) time | O(n) space (n = length of array)
export function maximizeExpression(array: number[]) {
  if (array.length < 4) return 0;

  const first = new Array(array.length).fill(-Infinity); // max(a)
  const second = new Array(array.length).fill(-Infinity); // max(a - b)
  const third = new Array(array.length).fill(-Infinity); // max(a - b + c)
  const fourth = new Array(array.length).fill(-Infinity); // max(a - b + c - d)

  first[0] = array[0];
  for (let i = 1; i < first.length; i++) {
    first[i] = Math.max(array[i], first[i - 1]);
  }
  for (let i = 1; i < second.length; i++) {
    second[i] = Math.max(first[i - 1] - array[i], second[i - 1]);
  }
  for (let i = 2; i < third.length; i++) {
    third[i] = Math.max(second[i - 1] + array[i], third[i - 1]);
  }
  for (let i = 3; i < fourth.length; i++) {
    fourth[i] = Math.max(third[i - 1] - array[i], fourth[i - 1]);
  }

  return fourth[fourth.length - 1];
}