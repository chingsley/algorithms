// O(w^t * w) time | O(t*w) space
export function bestConstruct(target, words) {
    if (target === "")
        return [];
    let result = [];
    for (let word of words) {
        if (target.indexOf(word) !== 0)
            continue;
        const rest = target.slice(word.length);
        let resOfRest = bestConstruct(rest, words);
        if (resOfRest === null)
            continue;
        resOfRest = [word, ...resOfRest];
        if (result.length === 0 || resOfRest.length < result.length)
            result = resOfRest;
    }
    return result.length > 0 ? result : null;
}
console.log(bestConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: ['abcd']
console.log(bestConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: ['abc', 'def']
;
export function bestConstructMemoized(target, words, memo = {}) {
    if (target === "")
        return [];
    if (target in memo)
        return memo[target];
    let result = [];
    for (let word of words) {
        if (target.indexOf(word) !== 0)
            continue;
        const rest = target.slice(word.length);
        let resOfRest = bestConstructMemoized(rest, words, memo);
        if (resOfRest === null)
            continue;
        resOfRest = [word, ...resOfRest];
        if (result.length === 0 || resOfRest.length < result.length)
            result = resOfRest;
    }
    memo[target] = result.length > 0 ? result : null;
    return memo[target];
}
console.log(bestConstructMemoized('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: ['abcd']
console.log(bestConstructMemoized('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: ['abc', 'def']
console.log(bestConstructMemoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
])); // expect null
