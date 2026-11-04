export function firstDuplicateValue2(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    const idx = Math.abs(array[i]) - 1;
    if (array[idx] < 0) return Math.abs(array[i]);
    array[idx] *= -1;
  }

  return -1;
};