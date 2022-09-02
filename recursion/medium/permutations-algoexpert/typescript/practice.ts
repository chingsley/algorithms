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
  {
    // O(n!) time | O(n!) space
    function getPermutations(array: number[]) {
      const result = permutationsOf(array);
      if (result[0].length === 0) return [];
      return result;
    }

    function permutationsOf(array: number[]): number[][] {
      if (array.length === 0) return [[]];
      if (array.length === 1) return [[array[0]]];

      const [first, ...rest] = array;
      const permsOfRest = permutationsOf(rest);
      const result: number[][] = [];
      for (let perm of permsOfRest) {
        for (let i = 0; i <= perm.length; i++) { // do not forget <= in the condition (just < will fail). This is because we want to also add 'first' as the last item of the current perm. Essentially extending the current perm's length by 1
          result.push([...perm.slice(0, i), first, ...perm.slice(i)]);
        }
      }
      return result;
    }
  }
  {
    // O(n * n!) time | O(n * n!) space
    function getPermutations(array: number[]) {
      if (array.length === 0) return [];

      return permsOf(array);
    }

    function permsOf(array: number[]): number[][] {
      if (array.length <= 1) return [[...array]];

      const [first, ...rest] = array;
      const permsOfRest = getPermutations(rest);
      const result: number[][] = [];
      for (let arr of permsOfRest) {
        for (let i = 0; i <= arr.length; i++) {
          result.push([...arr.slice(0, i), first, ...arr.slice(i)]);
        }
      }

      return result;
    }
  }
  {

    // O(n * n!) time | o(n * n!) space
    function getPermutations(array: number[]) {
      if (array.length === 0) return [];
      return permsOf(array);
    }

    function permsOf(array: number[]): number[][] {
      if (array.length <= 1) return [[...array]];

      const [first, ...rest] = array;
      const permsOfRest = permsOf(rest);
      const result: number[][] = [];
      for (let arr of permsOfRest) {
        for (let i = 0; i <= arr.length; i++) {
          result.push([...arr.slice(0, i), first, ...arr.slice(i)]);
        }
      }
      return result;
    }
  }
  {
    // O(n * n!) time | O(n * n!) space
    function getPermutations(array: number[]) {
      const result = permsOf(array);
      return result[0].length > 0 ? result : [];
    }

    function permsOf(array: number[]): number[][] {
      if (array.length === 0) return [[]];

      const [first, ...rest] = array;
      const permsOfRest = permsOf(rest);
      const result: number[][] = [];
      for (let perm of permsOfRest) {
        for (let i = 0; i <= perm.length; i++) {
          result.push([...perm.slice(0, i), first, ...perm.slice(i)]);
        }
      }
      return result;
    }
  }
  {
    // O(n * n!) time | O(n * n!) space
    function getPermutations(array: number[]) {
      if (array.length === 0) return array;

      return permsOf(array);
    }

    function permsOf(array: number[]): number[][] {
      if (array.length === 0) return [[]];

      const [first, ...rest] = array;
      const permsOfRest = permsOf(rest);
      const result: number[][] = [];
      for (let perm of permsOfRest) {
        for (let i = 0; i <= perm.length; i++) {
          result.push([...perm.slice(0, i), first, ...perm.slice(i)]);
        }
      }

      return result;
    }
  }
}

export const ___ = '___';