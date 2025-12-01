/**
 * Given a string S return the "reversed" string where all
 * characters that are not a letter stay in the same place,
 * and all letters reverse their positions
 *
 * Example 1:
 * input: "ab-cd"
 * output: "dc-ba"
 *
 * Example 2:
 * Input: "a-bC-dEf=ghIj!!"
 * Output: "j-Ih-gfE=dCba!!"
 */

/**
 * Time: O(n)
 * Space: O(n)
 * @param str string
 * @returns string
 */
function reverseString(str: string): string {
  const alphabets = { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j', k: 'k', l: 'l', m: 'm', n: 'n', o: 'o', p: 'p', q: 'q', r: 'r', s: 's', t: 't', u: 'u', v: 'v', w: 'w', x: 'x', y: 'y', z: 'z' };

  const strArr = str.split(''); // O(n) Space
  let i = 0;
  let j = strArr.length - 1;
  while (i < j) { // O(n) Time
    while (!alphabets[str[i].toLowerCase()] && i < j) {
      i++;
    }
    while (!alphabets[str[j].toLowerCase()] && j > i) {
      j--;
    }
    const templ = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = templ;
    i++;
    j--;
  }

  return strArr.join(''); // O(n) time
}

console.log(reverseString('a-bC-dEf=ghIj!!'));
console.log(reverseString('ab-cd'));