export function balancedBrackets(str: string): boolean {
  const pool: { [key: string]: string; } = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  const stack: string[] = [];
  const opening: string = '({[';
  const closing: string = ')}]';


  for (let char of str) {
    if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      if (stack.length < 1) return false;
      if (pool[char] !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
}



console.log(
  balancedBrackets("([])(){}(())()()")
);