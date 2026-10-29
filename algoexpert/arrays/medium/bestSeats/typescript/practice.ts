export function bestSeat(seats: number[]): number {
  let [startIdx, endIdx] = [0, -1];
  let i = 0;
  while (i < seats.length) {
    if (seats[i] === 0) {
      let j = i;
      while (j < seats.length && seats[j] == 0) {
        if ((j - i) > (endIdx - startIdx)) {
          [startIdx, endIdx] = [i, j];
        }
        j += 1;
      }
      i = j + 1;
    } else {
      i += 1;
    }
  }

  if (endIdx === -1) {
    return -1;
  }
  return Math.floor((startIdx + endIdx) / 2);
}