/**
 * O(n * 4^n) time
 * O(n * 4^n) space
 * @param phoneNumber string (n)
 * @returns string[]
 */
export function phoneNumberMnemonics(phoneNumber: string) {
  let combinations: string[] = [""];
  let temp: string[] = [];
  for (let num of phoneNumber) { // nx
    const letters: string = keys[num];
    for (let letter of letters) { // 4x (max, e.g when num is 7 or 9)
      for (let combination of combinations) { // 4^n
        const newComb = combination + letter; // O(n) in languages like Java
        temp.push(newComb);
      }
    }
    combinations = temp;
    temp = [];
  }
  return combinations;
}

type KeyHash = { [digit: string]: string; };
const ALPHABETS = '0;1;abc;def;ghi;jkl;mno;pqrs;tuv;wxyz';
const keys: KeyHash = ALPHABETS.split(';').reduce((acc: KeyHash, val: string, idx: number) => {
  acc[String(idx)] = val;
  return acc;
}, {});


// console.log(keys);
console.log(
  phoneNumberMnemonics("234")
);

// [""]
// ["a", "b", "c"]
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];