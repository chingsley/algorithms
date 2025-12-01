export function sortStack(stack) {
    if (stack.length === 0)
        return;
    const top = stack.pop();
    sortStack(stack);
    insertInSortedStack(stack, top);
    return stack;
}
function insertInSortedStack(stack, value) {
    if (stack.length === 0 || value > stack[stack.length - 1]) {
        stack.push(value);
        return;
    }
    const top = stack.pop();
    insertInSortedStack(stack, value);
    stack.push(top);
}
