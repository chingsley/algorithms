{
  {
    // O(n!)
    function getPermutations(array: number[]): number[][] {
      if (array.length === 0) return [];

      return perms(array);
    }

    function perms(array: number[]): number[][] {
      if (array.length === 0) return [[]];

      const [first, ...rest] = array;
      const permsWithoutFirstEl = perms(rest);

      const res: number[][] = [];
      for (let perms of permsWithoutFirstEl) {
        for (let i = 0; i <= perms.length; i++) { // NOTE the condition: i <= perms.length, NOTE i < perms.legth
          res.push([...perms.slice(0, i), first, ...perms.slice(i)]);
        }
      }

      return res;
    }
  }
}

export const ___ = '___';