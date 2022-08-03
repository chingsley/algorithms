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
  {// RECURSION
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
      // including the borders in the nested for loop of the main function
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

    // console.log(
    //   removeIslands(matrix)
    // );

  }
  {// RECURSION
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
      // b/c we want to identify a border '1' before checking
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
  { // ITERATION
    function removeIslands(matrix: number[][]) {
      const visited: Set<string> = new Set();
      for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[i].length - 1; j++) {
          if (matrix[i][j] === 0) continue;

          const [locations, hasBorderLand] = getIlandsAt([i, j], matrix, visited);
          if (hasBorderLand) continue;

          for (let [row, col] of locations) {
            matrix[row][col] = 0;
          }
        }
      }

      return matrix;
    }

    function getIlandsAt(pos: number[], matrix: number[][], visited: Set<string>): [number[][], boolean] {
      const stack: number[][] = [pos];
      const locations: number[][] = [];
      let hasBorderLand = false;

      while (stack.length > 0) {
        const current = stack.pop()!;

        const key = current.join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        const [i, j] = current;
        if (matrix[i][j] === 0) continue;

        if (
          i === 0 || j === 0 ||
          i === matrix.length - 1 ||
          j === matrix[i].length - 1
        ) {
          hasBorderLand = true;
          continue;
        }

        locations.push([i, j]);

        stack.push([i - 1, j]);
        stack.push([i + 1, j]);
        stack.push([i, j - 1]);
        stack.push([i, j + 1]);
      }

      return [locations, hasBorderLand];
    }

  }
  {// RECURSION
    function removeIslands(matrix: number[][]) {
      const visited: Set<string> = new Set();
      for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[i].length - 1; j++) {
          if (matrix[i][j] === 0) continue;

          const res: Res = { positions: [], containsBorder: false };
          getIslands([i, j], matrix, visited, res);
          if (res.containsBorder) continue;

          for (let [row, col] of res.positions) matrix[row][col] = 0;
        }
      }

      return matrix;
    }

    function getIslands(pos: number[], matrix: number[][], visited: Set<string>, res: Res) {
      const key = pos.join(',');
      if (visited.has(key)) return;
      visited.add(key);

      const [i, j] = pos;
      if (i < 0 || i >= matrix.length) return;
      if (j < 0 || j >= matrix[i].length) return;

      if (matrix[i][j] === 0) return;

      if (res.containsBorder === true) return;
      if (i === 0 || i === matrix.length - 1) res.containsBorder = true;
      if (j === 0 || j === matrix[i].length - 1) res.containsBorder = true;




      res.positions.push([i, j]);
      getIslands([i - 1, j], matrix, visited, res);
      getIslands([i + 1, j], matrix, visited, res);
      getIslands([i, j - 1], matrix, visited, res);
      getIslands([i, j + 1], matrix, visited, res);
    }

    type Res = { positions: number[][], containsBorder: boolean; };


    // console.log(
    //   removeIslands(
    //     [
    //       [1, 0, 0, 0, 1, 0, 0, 0],
    //       [1, 0, 1, 0, 1, 0, 1, 0],
    //       [1, 1, 0, 1, 0, 0, 1, 0],
    //       [1, 1, 0, 1, 1, 0, 1, 0],
    //       [1, 0, 0, 0, 1, 0, 0, 0]
    //     ]
    //   )
    // );
  }
  { // ITERATION
    function removeIslands(matrix: number[][]) {
      const visited: Set<string> = new Set();
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) continue;

          const res: Res = { positions: [], containsBorder: false };
          getIslands([i, j], matrix, visited, res);
          if (res.containsBorder) continue;

          for (let [row, col] of res.positions) matrix[row][col] = 0;
        }
      }

      return matrix;
    }

    function getIslands(pos: number[], matrix: number[][], visited: Set<string>, res: Res) {
      const stack: number[][] = [pos];

      while (stack.length > 0) {
        const [i, j] = stack.pop()!;

        const key = [i, j].join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        if (i < 0 || i >= matrix.length) continue;
        if (j < 0 || j >= matrix[i].length) continue;

        if (matrix[i][j] === 0) continue;

        if (i === 0 || i === matrix.length - 1) res.containsBorder = true;
        if (j === 0 || j === matrix[i].length - 1) res.containsBorder = true;

        res.positions.push([i, j]);
        stack.push([i - 1, j]);
        stack.push([i + 1, j]);
        stack.push([i, j - 1]);
        stack.push([i, j + 1]);
      }
    }

    type Res = { positions: number[][], containsBorder: boolean; };
  }
  { // RECURSION WITH RETURN VALUES
    // O(m * n) time | O(m * n) space
    // m = no. of rows in matrix;
    // n = no. of colums in matrix
    function removeIslands(matrix: number[][]) {
      const visited: Set<string> = new Set();
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) continue;

          const res: Res = { containsBorder: false };
          const positions = getIslands([i, j], matrix, visited, res);
          if (res.containsBorder) continue;

          for (let [row, col] of positions) matrix[row][col] = 0;
        }
      }

      return matrix;
    }

    function getIslands(pos: number[], matrix: number[][], visited: Set<string>, res: Res) {
      const [i, j] = pos;

      const key = [i, j].join(',');
      if (visited.has(key)) return [];
      visited.add(key);

      if (i < 0 || i >= matrix.length) return [];
      if (j < 0 || j >= matrix[i].length) return [];

      if (matrix[i][j] === 0) return [];

      if (i === 0 || i === matrix.length - 1) res.containsBorder = true;
      if (j === 0 || j === matrix[i].length - 1) res.containsBorder = true;

      const positions = [[i, j]];
      positions.push(...getIslands([i - 1, j], matrix, visited, res));
      positions.push(...getIslands([i + 1, j], matrix, visited, res));
      positions.push(...getIslands([i, j - 1], matrix, visited, res));
      positions.push(...getIslands([i, j + 1], matrix, visited, res));
      return positions;
    }

    type Res = { containsBorder: boolean; };
  }
  {
    function removeIslands(matrix: number[][]) {
      const visited: Set<string> = new Set();

      for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[i].length - 1; j++) {
          if (matrix[i][j] === 0) continue;

          const res: Res = { coords: [], hasBorder: false };
          fillIslands([i, j], res, matrix, visited);
          if (res.hasBorder === true) continue;

          for (const [x, y] of res.coords) matrix[x][y] = 0;
        }
      }

      return matrix;
    }

    function fillIslands(pos: number[], res: Res, matrix: number[][], visited: Set<string>) {
      const [i, j] = pos;

      if (i < 0 || i >= matrix.length) return;
      if (j < 0 || j >= matrix[i].length) return;

      if (matrix[i][j] === 0) return;

      if (i === 0 || i === matrix.length - 1) res.hasBorder = true;
      if (j === 0 || j === matrix[i].length - 1) res.hasBorder = true;

      const key = [i, j].join(',');
      if (visited.has(key)) return;
      visited.add(key);

      res.coords.push([i, j]);
      fillIslands([i - 1, j], res, matrix, visited);
      fillIslands([i + 1, j], res, matrix, visited);
      fillIslands([i, j - 1], res, matrix, visited);
      fillIslands([i, j + 1], res, matrix, visited);
    }

    interface Res { coords: number[][], hasBorder: boolean; };
  }
  {// ITERATION (WITH STACK)
    function removeIslands(matrix: number[][]) {
      const visited: Set<string> = new Set();

      for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) continue;

          const res: Res = { coords: [], hasBorder: false };
          fillIslands([i, j], res, matrix, visited);
          if (res.hasBorder === true) continue;

          for (const [x, y] of res.coords) matrix[x][y] = 0;
        }
      }

      return matrix;
    }

    function fillIslands(pos: number[], res: Res, matrix: number[][], visited: Set<string>) {
      const stack: number[][] = [pos];
      while (stack.length > 0) {
        const [i, j] = stack.pop()!;

        if (i < 0 || i >= matrix.length) continue;
        if (j < 0 || j >= matrix[i].length) continue;

        if (matrix[i][j] === 0) continue;

        if (i === 0 || i === matrix.length - 1) res.hasBorder = true;
        if (j === 0 || j === matrix[i].length - 1) res.hasBorder = true;

        const key = [i, j].join(',');
        if (visited.has(key)) continue;
        visited.add(key);

        res.coords.push([i, j]);
        stack.push([i - 1, j]);
        stack.push([i + 1, j]);
        stack.push([i, j - 1]);
        stack.push([i, j + 1]);
      }

      return;
    }

    interface Res { coords: number[][], hasBorder: boolean; };
  }
}


export const ___ = '___';