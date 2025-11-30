export function balancedBrackets(str) {
    const pool = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    return isBalanced(str, 0, pool, [], "({[", ")}]");
}
function isBalanced(str, i, pool, stack, openings, closings) {
    if (str[i] === undefined)
        return stack.length === 0;
    if (openings.includes(str[i])) {
        stack.push(str[i]);
    }
    else if (closings.includes(str[i])) {
        if (stack.length < 1)
            return false;
        if (pool[str[i]] !== stack.pop())
            return false;
    }
    return isBalanced(str, i + 1, pool, stack, openings, closings);
}
