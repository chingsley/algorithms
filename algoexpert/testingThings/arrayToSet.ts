
/**
 * How to converst nested array to a set of numbers
 */
const nestedArr = [[0, 4], [14, 22], [33, 43]];
const flattenedArr = nestedArr.reduce((acc, val) => acc.concat(val), []);
// [] 0, 4, 14, 22, 33, 43 ]

const set: Set<number> = new Set(flattenedArr);
// Set(6) { 0, 4, 14, 22, 33, 43 }
