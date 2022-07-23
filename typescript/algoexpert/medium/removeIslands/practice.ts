// const matrix = [
//   [1, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1],
//   [0, 0, 1, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 1]
// ];

const matrix = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 0]
];

{
  {
    /**
     *  with n = no. of rows
     *       m = no. of columns
     * 
     * Time: O(n x m)
     * Space: O(n x m) (due to the 'visited' and 'stack' data structures
     * )
     * @param matrix number[][]
     * @returns number[][]
     */
    function removeIslands(matrix: number[][]) {
      const visited: Set<string> = new Set();

      for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[i].length - 1; j++) {
          const locations: number[][] = [];
          const graphInfo: GraphInfo = { borderIslandFound: false };
          findIslands(matrix, [i, j], locations, visited, graphInfo);
          if (graphInfo.borderIslandFound === true) continue;
          for (let [row, col] of locations) matrix[row][col] = 0;
        }
      }

      return matrix;
    }

    interface GraphInfo { borderIslandFound: boolean; };

    function findIslands(matrix: number[][], pos: number[], locations: number[][], visited: Set<string>, graphInfo: GraphInfo) {
      // we can place the visited checks at this point b/c we're not
      // include the borders in the nested for loop of the main function
      // see the next solution to know the right place to place the visited
      // check if you're inlcuding the border in the loop
      const key = pos.join(',');
      if (visited.has(key)) return;
      visited.add(key);

      const [row, col] = pos;
      if (row < 0 || row >= matrix.length) return;
      if (col < 0 || col >= matrix[row].length) return;

      if (matrix[row][col] === 0) return;

      if (graphInfo.borderIslandFound === true) return;
      if (row === 0 || row === matrix.length - 1 || col === 0 || col === matrix[row].length - 1) {
        graphInfo.borderIslandFound = true;
        return;
      }

      locations.push([row, col]);
      findIslands(matrix, [row - 1, col], locations, visited, graphInfo);
      findIslands(matrix, [row + 1, col], locations, visited, graphInfo);
      findIslands(matrix, [row, col - 1], locations, visited, graphInfo);
      findIslands(matrix, [row, col + 1], locations, visited, graphInfo);
    }

    console.log(
      removeIslands(matrix)
    );

  }
  {
    function removeIslands(matrix: number[][]) {
      const visited: Set<string> = new Set();
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) continue;

          const graphInfo: GraphInfo = { containsBorder: false };
          const locations: number[][] = [];
          checkIslands(matrix, [i, j], locations, graphInfo, visited);

          if (graphInfo.containsBorder) continue;
          for (const [row, col] of locations) matrix[row][col] = 0;
        }
      }
      return matrix;
    }

    interface GraphInfo { containsBorder: boolean; };

    function checkIslands(matrix: number[][], pos: number[], locations: number[][], graphInfo: GraphInfo, visited: Set<string>) {
      const [row, col] = pos;
      if (row < 0 || row >= matrix.length) return;
      if (col < 0 || col >= matrix[row].length) return;

      if (matrix[row][col] === 0) return;

      if (graphInfo.containsBorder === true) return;

      // at this point, we know the cell is a '1' because we already checked if === 0 above
      // there4, we can now check if the '1' is at a border
      if (row === 0 || row === matrix.length - 1) return graphInfo.containsBorder = true;
      if (col === 0 || col === matrix[row].length - 1) return graphInfo.containsBorder = true;

      // this is the best place to place the visited checks
      // b/c we want to identify a border '1' because checking
      // if has been visited
      const key = pos.join(',');
      if (visited.has(key)) return;
      visited.add(key);

      locations.push([row, col]);
      checkIslands(matrix, [row - 1, col], locations, graphInfo, visited);
      checkIslands(matrix, [row + 1, col], locations, graphInfo, visited);
      checkIslands(matrix, [row, col - 1], locations, graphInfo, visited);
      checkIslands(matrix, [row, col + 1], locations, graphInfo, visited);
    }
  }
}


export const ___ = '___';