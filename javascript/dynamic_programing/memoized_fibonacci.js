/**
 * Write a function to compute the value at position n in a fibonacci sequence
 * Source: https://www.youtube.com/watch?v=oBt53YbR9Kk
 *
 * NOTE: A Memomized fib() function has time and space complexity of O(n)
 */

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(10));
console.log(fib(20));
console.log(fib(40));
console.log(fib(80));
