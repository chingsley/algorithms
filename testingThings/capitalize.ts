/**
 * ** NOTE **
 * This could be way easily solved with iteration. But for the sake
 * of practice, I have attempted to solve it with recursion. The iterative
 * solution is simpler and could have a constant space. But not the case with
 * recursion
 * 
 * Time: O(n)
 * Space: O(n)
 * @param sentence string (lenth n)
 * @returns 
 */
function capitalizeSentence(sentence: string): string {
  let i = 0;
  let result = [];
  capitalize(sentence, result, i);
  return result.join("");
}

function capitalize(sentence: string, result: string[], i: number) {
  // console.log({ result });
  if (!sentence[i]) return;
  if (i === 0 || sentence[i - 1] === " ") {
    result.push(sentence[i].toUpperCase());
  } else {
    result.push(sentence[i].toLowerCase());
  }

  return capitalize(sentence, result, i + 1);
}

console.log(
  capitalizeSentence(
    "this is an example"
  )
);


/**
 * ** NOTE **
 * Solution 2: Iteration
 * Time: O(n)
 * Space: O(1)
 * 
 * @param sentence string (length n)
 * @returns string
 */
function capitalizeSentence2(sentence: string): string {
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    if (i == 0 || sentence[i - 1] === " ") {
      result += sentence[i].toUpperCase();
    } else {
      result += sentence[i].toLowerCase();
    }
  }
  return result;
}

console.log(
  capitalizeSentence2(
    "this is an example"
  )
);
