// WITH MEMO
// O(m) * O(n^2 * m) time = O(m^2 * n^2) time
// O(m + n^2) space (n from recursion, m^2 from memo)
// m = length of the strings array
// n = length of the longest word in the strings array
export function longestStringChain(strings: string[]) {
  const memo: Memo = {};
  let longest: string[] = [];
  for (let word of strings) { // O(m) time
    const wordLongest = getLongest(word, strings, memo); // O(n^2 * m) time
    if (wordLongest.length > longest.length) longest = wordLongest;
  }
  return longest.length < 2 ? [] : longest.reverse();
}

// O(n * O(n * m)) time // n recursive calls, n * m operation in each recursive step
// = O(n^2 * m) time
function getLongest(word: string, strings: string[], memo: Memo): string[] {
  if (word in memo) return JSON.parse(memo[word]);

  let longestChain: string[] = [];
  for (let i = 0; i < word.length; i++) { // O(n) time
    const wordLessOneChar = word.slice(0, i) + word.slice(i + 1);
    for (let wd of strings) { // O(m) time
      if (wd === wordLessOneChar) {
        const chain = getLongest(wordLessOneChar, strings, memo);
        if (chain.length > longestChain.length) longestChain = chain;
      }
    }
  } // O(n * m) time <--- for the nested for loop (by multiplying O(n) by O(m))

  longestChain.push(word);
  memo[word] = JSON.stringify(longestChain);
  return longestChain;
}

interface Memo {
  [key: string]: string;
}


/**
* Any solution you implement must pass this test case:
* ["abdec", "abdc", "abde", "abc", "abd", "ade", "ae"]
*/