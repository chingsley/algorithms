// O(nm) time | O(nm) space; (n = items.length, m = capacity)
export function knapsackProblem(items: [number, number][], capacity: number): [number, number[]] {
  const matrix = new Array(items.length + 1).fill(0).map(
    () => new Array(capacity + 1).fill(0)
  );

  for (let row = 1; row < matrix.length; row++) {
    const [itemValue, itemWeight] = items[row - 1]; // b/c row = 0 represents empty item []
    for (let col = 0; col < matrix[row].length; col++) {
      const currentCapacity = col;
      if (itemWeight > currentCapacity) {
        matrix[row][col] = matrix[row - 1][col];
      } else {
        matrix[row][col] = Math.max(
          matrix[row - 1][col],
          itemValue + matrix[row - 1][col - itemWeight] // ie. matrix[row - 1][currentCapacty - itemWeight]
        );
      }
    }
  }

  const indices: number[] = [];
  let [row, col] = [items.length, capacity];
  while (matrix[row] && matrix[row][col] > 0) {
    if (matrix[row][col] > matrix[row - 1][col]) {
      indices.push(row - 1); // again, becuase first row is []
      row = row - 1;
      col = col - items[row][1];
    } else {
      row = row - 1;
    }

  }

  return [
    matrix[items.length][capacity], // total value
    indices.reverse(), // item indices; the reverse is not required
  ];
}