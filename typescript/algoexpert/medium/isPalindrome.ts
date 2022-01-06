export function isPalindrome(string: String) {
  let i = 0;
  let j = string.length - 1;
  while(i <= j) {
    if(string[i] !== string[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }

  return true;
}

console.log(isPalindrome('madams'))

// Do not edit the line below.
// exports.isPalindrome = isPalindrome;