// O(n x m) time | O(n x m) space
// n = horizontal distance between the two knights
// m = vertical distance between the two knights
export function knightConnection(knightA: number[], knightB: number[]) {
  const visited: { [key: string]: boolean; } = {};
  const queue: number[][] = [[...knightA, 0]];
  while (queue.length > 0) {
    const [x, y, dist] = queue.shift()!;
    const key = [x, y].join(',');
    if (key in visited) continue;
    visited[key] = true;

    if (x === knightB[0] && y === knightB[1]) return Math.ceil(dist / 2);

    queue.push(...[
      [x + 2, y - 1, dist + 1],
      [x + 2, y + 1, dist + 1],
      [x - 2, y - 1, dist + 1],
      [x - 2, y + 1, dist + 1],
      [x - 1, y + 2, dist + 1],
      [x + 1, y + 2, dist + 1],
      [x - 1, y - 2, dist + 1],
      [x + 1, y - 2, dist + 1]
    ]);
  }

  return -1;
}


/*
[-2, -1]
- - - - - - - - - - - - - -
[-4, -2]
[-4, 0]
[0, -2]
[0, 0]
[-3, -3]
[-1, -3]
[-3, 1]
[-1, 1]
*/
