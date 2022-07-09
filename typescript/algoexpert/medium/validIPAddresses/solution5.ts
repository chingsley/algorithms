export function validIPAddresses(string: string) {
  const result: string[] = [];

  for (let i = 1; i < Math.min(4, string.length); i++) {
    const currIP: string[] = ['', '', '', ''];

    currIP[0] = string.slice(0, i);
    if (!isValidIPByte(currIP[0])) continue;


    for (let j = i + 1; j < i + Math.min(4, string.length - i); j++) {
      currIP[1] = string.slice(i, j);
      if (!isValidIPByte(currIP[1])) continue;

      for (let k = j + 1; k < j + Math.min(4, string.length - j); k++) {
        currIP[2] = string.slice(j, k);
        currIP[3] = string.slice(k);
        if (!isValidIPByte(currIP[2]) || !isValidIPByte(currIP[3])) continue;
        result.push(currIP.join('.'));
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
