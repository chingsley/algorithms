{
  {
    // type Disk = [number, number, number];

    // export function diskStacking(disks: Disk[]) {
    //   // Write your code here.
    //   return [[-1, -1, -1]];
    // }

    type Disk = [number, number, number];
    interface Memo { [key: string]: [number[], number]; }

    function diskStacking(disks: Disk[]) {
      const memo: Memo = {};
      let maxStack: number[] = [];
      let maxHeight = 0;
      for (let i = 0; i < disks.length; i++) {
        const [currMaxStack, currMaxHeight] = getMaxStackIdxsAt(i, disks, memo);
        if (currMaxHeight > maxHeight) {
          maxStack = currMaxStack;
          maxHeight = currMaxHeight;
        }
      }

      return maxStack.map(i => disks[i]);
    }

    function getMaxStackIdxsAt(i: number, disks: Disk[], memo: Memo): [number[], number] {
      if (i in memo) return memo[i];

      const [w1, d1, h1] = disks[i];
      let maxStack: number[] = [];
      let maxHeight = 0;
      for (let j = 0; j < disks.length; j++) {
        const [w2, d2, h2] = disks[j];
        if (w2 >= w1 || d2 >= d1 || h2 >= h1) continue;

        const [currMaxStack, currMaxHeight] = getMaxStackIdxsAt(j, disks, memo);
        if (currMaxHeight > maxHeight) {
          maxStack = currMaxStack;
          maxHeight = currMaxHeight;
        }
      }

      maxStack.push(i);
      // console.log([[i, ...maxStack], maxHeight + h1])
      memo[i] = [maxStack, maxHeight + h1];
      return memo[i];
    }
  }
}

export const __ = '__';