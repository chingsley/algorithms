export function powerset(array: number[]) {
  let set: number[][] = [[]];

  for (const i of array) {
    const newSet: number[][] = [];
    for (const arr of set) {
      newSet.push([...arr, i]);
    }
    set = [...set, ...newSet];
  }

  return set;
}

