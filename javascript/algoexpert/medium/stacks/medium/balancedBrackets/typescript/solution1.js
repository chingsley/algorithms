// O(n) time | O(n) space
export function balancedBrackets(str) {
    const openingBrackets = '([{';
    const closingBrackets = ')]}';
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    const stack = [];
    for (const char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        }
        if (closingBrackets.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            if (stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
// O(n) time | O(n) space
export function balancedBrackets2(str) {
    const openingBrackets = '([{';
    const closingBrackets = ')]}';
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    const stack = [];
    for (const char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        }
        if (closingBrackets.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            if (stack[stack.length - 1] === matchingBrackets[char]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
