export function reverseWordsInString(string: string): string {
  const reversedString = reverseString(string, string.length - 1, -1);
  return reverseString(reversedString, 0, 1);
}


function reverseString(str: string, startIdx: number, step: Step): string {
  const revStr: string[] = [];

  let i: number = startIdx;
  while (i >= 0 && i < str.length) {
    revStr.push(str[i]);
    i = i + step;
  }

  return revStr.join('');
}

enum Step { PLUS_ONE = 1, MINUS_ONE = -1 };

