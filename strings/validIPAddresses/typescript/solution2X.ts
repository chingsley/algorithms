
/**
 * WRONG SOLUTION: NOT WORKING YET (WILL COME BACK TO THIS (probably))
 * @param string 
 * @returns 
 */
export function validIPAddresses(string: string): string[] {
  const ipAddresses: string[] = [];

  if (string.length > 12) return ipAddresses;

  backtrack(string, 0, 0, "", ipAddresses);

  return ipAddresses;
}

function backtrack(inputString: string, i: number, dots: number, currIP: string, ipAddresses: string[]) {
  console.log(indent(i) + "backtrack(", inputString, ", ", i, ", ", dots, ", ", currIP, ", ", JSON.stringify(ipAddresses), ")");
  if (dots === 4 && i === inputString.length) {
    ipAddresses.push(currIP.slice(0, currIP.length - 1));
    return;
  }
  if (dots > 4) {
    return;
  }

  for (let j = i; j < Math.min(i + 3, inputString.length); j++) {
    const chosen = inputString.slice(i, j + 1);
    if (isValidIPSection(chosen)) {
      currIP = currIP + chosen + '.';
      backtrack(inputString, j + 1, dots + 1, currIP, ipAddresses);
    }
  }

}

function isValidIPSection(string: string) {
  const num = parseFloat(string);
  if (num < 0 || num > 255) return false;
  return num.toString().length === string.length; // b/c parseFloat(002) = 2 and "2".length !== "002".length. Valid IP section should not contain Leading 0's
}

function indent(count: number) {
  let space = "";
  for (let i = 0; i < count; i++) {
    space += "..";
  }
  return space;
}


// 1 9 21680
console.log(
  validIPAddresses("1921680")
);