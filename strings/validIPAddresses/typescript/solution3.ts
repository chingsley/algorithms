export function validIPAddresses(string: string) {
  const result: string[] = [];

  for (let i = 1; i < 4 && i < string.length; i++) {
    const part1 = string.slice(0, i);
    // if (!isValidIPByte(part1)) continue;


    for (let j = i + 1; j < i + 4 && j < string.length; j++) {
      const part2 = string.slice(i, j);
      // if (!isValidIPByte(part2)) continue;

      // for (let k = j + 1; k < j + Math.min(4, string.length - j); k++) {
      for (let k = j + 1; k < j + 4 && k < string.length; k++) {
        const part3 = string.slice(j, k);
        const part4 = string.slice(k);
        // if (!isValidIPByte(part3) || !isValidIPByte(part4)) continue;'
        if (
          isValidIPByte(part1) &&
          isValidIPByte(part2) &&
          isValidIPByte(part3) &&
          isValidIPByte(part4)
        ) {
          result.push(`${part1}.${part2}.${part3}.${part4}`);
        } else {
          console.log({ part1, part2, part3, part4 });
        }

      }

    }
  }

  return result;
}


function isValidIPByte(value: string): boolean {
  const num = parseFloat(value);
  if (num < 0 || num > 255) return false;

  return num.toString().length === value.length;
}


/**
 * 0 1 2 3 4 5 6
 * 1 9 2 1 6 8 0
 */

console.log(
  validIPAddresses("1921680")
);