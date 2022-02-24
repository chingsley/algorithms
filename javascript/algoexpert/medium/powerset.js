function powerset(array) {
  let set = [[]];

  for (let i of array) {
    const newSet = [];
    for (let arr of set) {
      newSet.push([...arr, i]);
    }
    set = [...set, ...newSet];
  }

  return set;
}

// console.log(powerset([1, 2, 3]));

module.exports = { powerset };
