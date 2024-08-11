// O(m x n) time | O(m x n) space (for an m by n matrix)
export function transposeMatrix(matrix: number[][]) {
  const transposed: number[][] = [];
  let j: number = 0;
  while(j < matrix[0].length) {
    const newArr: number[] = [];
    for (let arr of matrix) {
      newArr.push(arr[j]);
    }
    j += 1;
    transposed.push(newArr);
  }
  
  return transposed;
}