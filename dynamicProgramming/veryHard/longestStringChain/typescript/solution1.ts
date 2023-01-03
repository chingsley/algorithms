// O(n* m^2 + nlog(n)) time | O(n) space
export function longestStringChain(strings: string[]) {
  const sortedStr = [...strings].sort((a, b) => b.length - a.length);
  const visited = new Array(strings.length).fill(false);

  let longestChain: string[] = [];
  for (let i = 0; i < sortedStr.length; i++) {
    if (visited[i]) continue;
    const currChain = getStrChainAt(i, sortedStr, visited);
    if (currChain.length > longestChain.length) longestChain = currChain;
  }

  return longestChain;
}

function getStrChainAt(i: number, sortedStr: string[], visited: boolean[]) {
  const chain = [];
  let currIdx: number | null = i;
  while (currIdx !== null) {
    visited[currIdx] = true;
    const currStr = sortedStr[currIdx];
    for (let j = 0; j < currStr.length; j++) {
      const newWord = currStr.slice(0, j) + currStr.slice(j + 1);
      currIdx = findMatch(newWord, currIdx! + 1, sortedStr);
      if (currIdx === null) continue;

      if (chain.length === 0) chain.push(currStr);
      chain.push(newWord);
      break;
    }
  }
  return chain;
}

function findMatch(newWord: string, startIdx: number, sortedStr: string[]) {
  for (let k = startIdx; k < sortedStr.length; k++) {
    if (sortedStr[k] === newWord) return k;
  }

  return null;
}