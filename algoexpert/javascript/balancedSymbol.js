const solution = (symbolString) => {
  const stackArr = [];
  let balanced = true;
  let index = 0;
  while (index < symbolString.length && balanced) {
    const symbol = symbolString[index];
    if ("([{".includes(symbol)) {
      stackArr.push(symbol);
    } else {
      if (stackArr.length === 0) {
        balanced = false;
      } else {
        top = stackArr.pop();
        if (!matches(top, symbol)) {
          balanced = false;
        }
      }
    }
    index = index + 1;
  }
  return balanced && stackArr.length === 0 ? 1 : 0;
};

const matches = (open, close) => {
  opens = "([{";
  closers = ")]}";
  return opens.indexOf(open) === closers.indexOf(close);
};

console.log(solution("[{()}()]"));
console.log(solution("{({([][])}())}"));
console.log(solution("{[()()]}"));
console.log(solution("([)()]"));
