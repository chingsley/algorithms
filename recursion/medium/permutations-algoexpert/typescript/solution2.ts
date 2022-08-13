export function getPermutations(array: number[], perm: number[] = [], perms: number[][] = []) {
  if (array.length === 0) {
    perms.push([...perm]);
  } else {
    for (let i = 0; i < array.length; i++) {
      perm.push(array[i]);
      const newArr = array.filter((_, idx) => idx !== i);
      getPermutations(newArr, perm, perms);
      perm.pop();
    }
  }

  if (perms[0].length === 0) return []; // due to the instruction, see algoexpoert. We don't want to return [ [] ] when the input array is empty. Instead we want to return []
  return perms;
}

console.log(
  getPermutations([])
);



