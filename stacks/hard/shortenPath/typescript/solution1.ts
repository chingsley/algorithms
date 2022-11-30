// O(n) time | O(n) space; (n = length of the path)
export function shortenPath(path: string) {
  const stack: string[] = [];
  const isAbsolutePath = path[0] === '/';
  const pathArr = path.split('/');

  for (let ch of pathArr) {
    if (ch === '') continue;
    if (ch === '.') continue;

    if (ch === '..') {
      if (isAbsolutePath) {
        if (stack.length !== 0) stack.pop();
      } else {
        if (stack.length === 0 || stack[stack.length - 1] === '..') {
          stack.push('..');
        } else {
          stack.pop();
        }
      }
    } else {
      stack.push(ch);
    }
  }
  return isAbsolutePath ? '/' + stack.join('/') : stack.join('/');
}
