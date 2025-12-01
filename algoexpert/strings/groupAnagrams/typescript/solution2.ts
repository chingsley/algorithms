/**
 * Time: O(W * N)
 * Space: O(W * Nlog(N))
 *    W = length of 'words' array
 *    N = Length of the longest word in the array
 * @param words w
 * @returns string[][]
 */
export function groupAnagrams(words: string[]) {
  const outputHash: { [key: string]: string[]; } = {};

  for (let word of words) {
    const sortedWord = word.split('').sort().join(''); // the sort is Nlog(N) where N = length of the word (i.e no. of characters in the word)
    if (sortedWord in outputHash) {
      outputHash[sortedWord].push(word);
    } else {
      outputHash[sortedWord] = [word];
    }
  }

  return Object.values(outputHash);
}

console.log(
  groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
  )
);