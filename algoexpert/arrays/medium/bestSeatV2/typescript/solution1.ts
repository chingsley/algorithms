export function maxDistToClosest(seats: number[]): number {
  let maxDist = -1;
  let i = 0;
  while (i < seats.length) {
    if (seats[i] === 1) {
      i += 1;
      continue;
    }

    let j = i;
    let currZerosCount = 0;
    while (j < seats.length && seats[j] == 0) {
      currZerosCount += 1;
      j += 1;
    }

    let currMaxDist = Math.ceil(currZerosCount / 2);
    if (i === 0 || j === seats.length) {
      currMaxDist = currZerosCount;
    }
    if (currMaxDist > maxDist) {
      maxDist = currMaxDist;
    }

    i = j;
  }

  return maxDist;
}