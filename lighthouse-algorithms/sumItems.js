function sumItems(array, initialSum = 0) {
  return array.reduce((sum, item) => {
    if (Array.isArray(item)) {
      sum = sumItems(item, sum);
    } else {
      sum += item;
    }
    return sum;
  }, initialSum);
}

module.exports = sumItems;

console.log(
  sumItems([1, 1, [1, 1, [1, 1], 1], 1, 1]) // expect 9
);
console.log(
  sumItems([[[4]], [[2]]]) // expect 6
);
console.log(
  sumItems([1, 2, 3, 4]) // expect 10
);

console.log(
  sumItems([[[[]]], []]) // expect 0
);