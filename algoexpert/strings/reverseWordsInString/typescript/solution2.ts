/**
 * O(n) time
 * O(n) space; b/c of the resArr. NOTE resArr.length >= stack.length, therefore, it dwarfs the space complexity due to the stack
 * where n = length of the strToReverse
 * @param strToReverse 
 * @returns 
 */
export function reverseWordsInString(strToReverse: string): string {
  const resArr: string[] = [];
  const stack: string[] = [];
  const SPACE_CHAR = " ";
  for (let i = strToReverse.length - 1; i >= 0; i--) {
    const char: string = strToReverse[i];
    if (char === SPACE_CHAR) {
      while (stack.length > 0) resArr.push(stack.pop()!);
      resArr.push(char);
    } else {
      stack.push(char);
    }
  }
  while (stack.length > 0) resArr.push(stack.pop()!);
  return resArr.join('');
}
// "tim is great";

// [g r e a t ' ' i s ' ' t i m]