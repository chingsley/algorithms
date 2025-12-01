export function firstNonRepeatingCharacter(string: string) {
  const dict: { [key: string]: number; } = {};
  for (const ch of string) {
    if (!dict[ch]) {
      dict[ch] = 1;
    } else {
      dict[ch] += 1;
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (dict[string[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(
  firstNonRepeatingCharacter("abcdchf")
);