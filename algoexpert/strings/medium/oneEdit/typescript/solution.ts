// O(n) time | O(1) space
// n = length of the shorter string
export function oneEdit(stringOne: string, stringTwo: string) {
  if (Math.abs(stringOne.length - stringTwo.length) > 1) return false;

  let editUsed = false;
  let [i, j] = [0, 0];
  while (i < stringOne.length && j < stringTwo.length) {
    if (stringOne[i] === stringTwo[j]) {
      [i, j] = [i + 1, j + 1];
    } else {
      if (editUsed) return false;

      editUsed = true;
      if (stringOne.length > stringTwo.length) {
        i += 1;
      } else if (stringTwo.length > stringOne.length) {
        j += 1;
      } else {
        [i, j] = [i + 1, j + 1];
      }
    }
  }

  return true;
}
