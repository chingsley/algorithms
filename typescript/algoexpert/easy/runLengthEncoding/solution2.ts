// O(n) time
// O(n) space
export function runLengthEncoding(string: string) {
  let encoded = [];
  let i = 0;
  while(i < string.length) {
    let count = 1;
    let j = i
    while(j < string.length && count < 9 && string[j] === string[j+1]) {
      count++;
      j++;
    }
    // encodedStr += count + string[i]; // string concatenation is O(n) operaion in some languages (e.g Java). In such languaage, this line would make the time complexity O(n^2)
		encoded.push(count.toString());
		encoded.push(string[i])
    i = j + 1;
  }
  return encoded.join('');
}

console.log(
  runLengthEncoding('zAAAAAAAAAAAAABBCCCCDD') // expect '9A4A2B4C2D'
);
