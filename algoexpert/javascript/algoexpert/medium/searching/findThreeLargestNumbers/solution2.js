// O(n^2) time
// O(n) space
export function findThreeLargestNumbers(array) {
    const stack = [];
    for (const num of array) {
        addToOrderedStack(num, stack);
    }
    // console.log(stack);
    return stack.slice(-3);
}
function addToOrderedStack(num, stack) {
    const temp = [];
    while (stack[stack.length - 1] > num) {
        temp.push(stack.pop());
    }
    stack.push(num);
    while (temp.length > 0) {
        stack.push(temp.pop());
    }
}
console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));
