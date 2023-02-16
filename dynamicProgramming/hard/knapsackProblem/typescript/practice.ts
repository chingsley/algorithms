{
  {
    // O(mn) time | O(mn) space (m = items.length, n = capacity)
    function knapsackProblem(items: [number, number][], capacity: number): [number, number[]] {
      const matrix = new Array(items.length + 1).fill(0).map(
        () => new Array(capacity + 1).fill(0)
      );

      for (let row = 1; row < matrix.length; row++) {
        const [val, weight] = items[row - 1];
        for (let col = 0; col < matrix[row].length; col++) {
          if (col < weight) {
            matrix[row][col] = matrix[row - 1][col];
          } else {
            matrix[row][col] = Math.max(
              matrix[row - 1][col],
              val + matrix[row - 1][col - weight]
            );
          }
        }
      }

      // console.log(matrix)

      let idxs: number[] = [];
      let [row, col] = [items.length, capacity];
      while (matrix[row] && matrix[row][col] > 0) {
        if (matrix[row][col] > matrix[row - 1][col]) {
          idxs.push(row - 1);
          const item = items[row - 1];
          const itemCapacity = item[1];

          row = row - 1;
          col = col - itemCapacity;
        } else {
          row = row - 1;
        }
      }

      return [
        matrix[items.length][capacity],
        idxs.reverse()
      ];
    }
  }
}