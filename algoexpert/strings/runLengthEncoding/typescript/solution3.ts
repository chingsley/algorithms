// O(n) time | O(n) space
export function runLengthEncoding(string: string) {
  const outputArr: string[] = [];

  let i = 0;
  while (i < string.length) {
    let j = i + 1;
    let count = 1;
    while (string[i] === string[j] && j < string.length && count < 9) {
      count += 1;
      j += 1;
    }

    outputArr.push(count.toString() + string[i]);
    i = j;
  }

  return outputArr.join('');
}


console.log(
  runLengthEncoding('AAAAAAAAAAAAABBCCCCDD') // expect '9A4A2B4C2D'
);