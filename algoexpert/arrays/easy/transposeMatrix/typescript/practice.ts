{
  {
    /**
Input: matrix = 
[[1,2,3],
 [4,5,6],
 [7,8,9]]
Output: 
[[1,4,7],
 [2,5,8],
 [3,6,9]]
 */

    function transpose(matrix: number[][]): number[][] {
      const tranxp: number[][] = [];
      for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
        const newRow: number[] = [];
        for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
          newRow.push(matrix[rowIdx][colIdx]);
        }
        tranxp.push(newRow);
      }

      return tranxp;
    };
  }
}