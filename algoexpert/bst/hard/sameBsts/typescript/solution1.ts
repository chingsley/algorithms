// O(n^2) time | O(n^2) space
export function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
  if (arrayOne.length !== arrayTwo.length) return false;
  if (arrayOne[0] !== arrayTwo[0]) return false;

  if (arrayOne.length <= 1 && arrayTwo.length <= 1) return true;

  const leftOne: number[] = [];
  const rightOne: number[] = [];
  const leftTwo: number[] = [];
  const rightTwo: number[] = [];

  for (let i = 1; i < arrayOne.length; i++) {
    if (arrayOne[i] < arrayOne[0]) {
      leftOne.push(arrayOne[i]);
    } else {
      rightOne.push(arrayOne[i]);
    }
    if (arrayTwo[i] < arrayTwo[0]) {
      leftTwo.push(arrayTwo[i]);
    } else {
      rightTwo.push(arrayTwo[i]);
    }
  }
  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}