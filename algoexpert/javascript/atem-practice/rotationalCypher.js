function rotationalCipher(input, rotationFactor) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  let output = '';
  for (let char of input) {
    // console.log(char, alphabets.indexOf(char));
    if (alphabets.indexOf(char.toLowerCase()) > -1) {
      const rotated = rotateChar(char, alphabets, rotationFactor);
      output += setCase(char, rotated);
    } else if (numbers.indexOf(char.toString()) > -1) {
      const a = rotateNum(char, numbers, rotationFactor);
      console.log('a = ', a);
      output += a;
    } else {
      output += char;
    }
  }

  return output;
}

function rotateChar(char, alphabets, rotationFactor) {
  const idx = alphabets.indexOf(char.toLowerCase());
  const rotatedIdx = idx + rotationFactor;
  if (rotatedIdx < alphabets.length) {
    return alphabets[rotatedIdx];
  } else {
    return alphabets[(rotatedIdx) % alphabets.length];
  }
}

function rotateNum(char, numbers, rotationalCipher) {
  const idx = numbers.toString().indexOf(char.toString());
  const rotatedIdx = idx + rotationalCipher;
  let output = null;
  if (rotatedIdx < numbers.length) {
    output = numbers[rotatedIdx];
  } else {
    output = numbers[(rotatedIdx) % numbers.toString().length];
  }

  return output;
}

function isUpper(char) {
  return char.toUpperCase() === char;
}
// function isLower(char) {
//   return char.toLowerCase() === char;
// }

function setCase(inputChar, outputChar) {
  if (isUpper(inputChar)) {
    return outputChar.toUpperCase();
  } else {
    return outputChar.toLowerCase();
  }
}

// const result = rotationalCipher('Zebra-493', 3);
const result = rotationalCipher('abcdefghijklmNOPQRSTUVWXYZ0123456789', 39);

console.log(result);