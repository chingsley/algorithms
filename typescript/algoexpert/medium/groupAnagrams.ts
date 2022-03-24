export function groupAnagrams(words: string[]) {
  const outputHash: {[key: string]: string[]} = {};
  
  words.forEach((word) => {
    const sortedWord = word.split('').sort().join('');   
    if(sortedWord in outputHash) {
      outputHash[sortedWord].push(word);
    } else {
      outputHash[sortedWord] = [word];
    }
  });
  return Object.values(outputHash);
}


console.log(
  groupAnagrams( ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])
)