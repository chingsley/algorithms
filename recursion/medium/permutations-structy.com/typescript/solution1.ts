// O(n!)
export function permutations(array: number[]): number[][] {
  if (array.length === 0) return [[]];

  const [first, ...rest] = array;
  const permsWithoutFirstEl = permutations(rest);

  const res: number[][] = [];
  for (let perms of permsWithoutFirstEl) {
    for (let i = 0; i <= perms.length; i++) { // NOTE the condition: i <= perms.length, NOTE i < perms.legth
      res.push([...perms.slice(0, i), first, ...perms.slice(i)]);
    }
  }

  return res;
}

console.log(
  permutations([1, 2, 3])
);