// This is an iteration solution. Not the correct one, because the question says to "recursively sort"
export function sortStack(stack) {
    const sortedMinStack = [];
    while (stack.length > 0) {
        addToSortedMinStack(stack.pop(), sortedMinStack);
    }
    while (sortedMinStack.length > 0) {
        stack.push(sortedMinStack.pop());
    }
    return stack;
}
function addToSortedMinStack(num, sortedMinStack) {
    const temp = [];
    if (sortedMinStack.length < 1)
        return sortedMinStack.push(num);
    while (num > sortedMinStack[sortedMinStack.length - 1]) {
        temp.push(sortedMinStack.pop());
    }
    sortedMinStack.push(num);
    while (temp.length > 0) {
        sortedMinStack.push(temp.pop());
    }
}
// console.log(
//   sortStack([-5, 2, -2, 4, 3, 1])
// );
function sort(stack) {
    if (stack.length < 2)
        return;
    const a = stack.pop();
    const temp = [];
    while (a < stack[stack.length - 1] && stack.length > 0) {
        temp.push(stack.pop());
    }
    sort(stack);
    stack.push(a);
    stack.push(a);
    return stack;
}
console.log(sort([-5, 2, -2, 4, 3, 1]));
