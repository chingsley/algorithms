// O(mn) time | O(mn) space
export function gridTraveler(m: number, n: number) {
  const grid = new Array(m + 1).fill(0).map(
    () => new Array(n + 1).fill(0)
  );

  grid[1][1] = 1;

  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[row].length; col++) {
      if (row === 1 && col === 1) continue;
      grid[row][col] = grid[row][col - 1] + grid[row - 1][col];
    }
  }

  return grid[m][n];
}

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
console.log(gridTraveler(100, 100)); // 2.2750883079422938e+58
console.log(gridTraveler(1800, 1800)); // Infinity