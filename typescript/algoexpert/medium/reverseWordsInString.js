function reverseWordsInString(strToReverse) {
  const revArr = [];

  let endOfWord = strToReverse.length;
  for (let i = strToReverse.length - 1; i >= 0; i--) {
    const char = strToReverse[i];
    if (char === ' ') {
      if (i !== endOfWord - 1) {
        revArr.push(strToReverse.slice(i + 1, endOfWord));
      }
      revArr.push(char);
      endOfWord = i;
    }
    if (char !== ' ' && i === 0) {
      revArr.push(strToReverse.slice(i, endOfWord));
    }
  }
  return revArr.join('');
}


console.log(
  reverseWordsInString("*HE**REVERSE**STRING**FUNCTION")
);