// O(n) time | O(n) space
export function arrayOfProducts(array: number[]) {
  const left: number[] = new Array(array.length).fill(1);
  const right: number[] = new Array(array.length).fill(1);
  const result: number[] = new Array(array.length).fill(1);
  for (let i = 1; i < array.length; i++) {
    left[i] = left[i - 1] * array[i - 1];
  }
  for (let i = array.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * array[i + 1];
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}


/*
[ 5, 1, 4, 2 ]

left
[ 1, 5, 5, 20 ]

right
[ 8, 8, 2, 1 ]

left * right
[ 8, 40, 10, 20 ]
*/