export function balancedBrackets(str) {
    const pool = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];
    const opening = '({[';
    const closing = ')}]';
    for (let char of str) {
        if (opening.includes(char)) {
            stack.push(char);
        }
        else if (closing.includes(char)) {
            if (stack.length < 1)
                return false;
            if (pool[char] !== stack.pop())
                return false;
        }
    }
    return stack.length === 0;
}
console.log(balancedBrackets("([])(){}(())()()"));
