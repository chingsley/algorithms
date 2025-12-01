// O(n) time | O(1) space
export function bestSeat(seats: number[]) {
  let [start, end] = [0, -1];
  let i = 0;
  while (i < seats.length) {
    if (seats[i] === 0) {
      let j = i;
      while (j < seats.length && seats[j] == 0) {
        if ((j - i) > (end - start)) [start, end] = [i, j];
        j += 1;
      }
      i = j + 1;
    } else {
      i += 1;
    }
  }

  return Math.floor((start + end) / 2);
}
