function reverseOnlyLetters(str: string): string {
  const arr: string[] = str.split('');
  let i = 0;
  let j = arr.length - 1;
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, alphabet) => {
    acc[alphabet] = alphabet;
    return acc;
  }, {});
  while (i < j) {
    if (!alphabets[arr[i].toLowerCase()]) {
      i++;
    } else if (!alphabets[arr[j].toLowerCase()]) {
      j--;
    } else {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return arr.join('');
}


// a-bC-dEf=ghlj!!

console.log(
  reverseOnlyLetters('a-bC-dEf=ghlj!!')
);