type Disk = [number, number, number];

interface Stack {
  disks: Disk[];
  height: number;
}

interface Memo {
  [key: string]: string;
  // whenever you're saving an object or array in memoization, it's safer to stringify
  // the result. If not, it'll likely lead to unexpected logic errors because
  // objects and arrays are passed around by reference.
}


// O(n^2) time | O(n^2) space (n = length of the disks matrix)
export function diskStacking(disks: Disk[]) {
  let maxStack: Stack = { disks: [], height: 0 };
  const memo: Memo = {};
  for (let disk of disks) {
    const stack = getStack(disk, disks, memo);
    if (stack.height > maxStack.height) maxStack = stack;
  }
  return maxStack.disks.reverse(); // or maxStack.disks depending on the required order
}


function getStack(diskTop: Disk, inputDisks: Disk[], memo: Memo): Stack {
  const [w1, d1, h1] = diskTop;
  const key = [w1, d1, h1].join(',');
  if (key in memo) return JSON.parse(memo[key]);

  let maxStack: Stack = { disks: [], height: 0 };
  for (let disk of inputDisks) {
    const [w2, d2, h2] = disk;
    if (w2 <= w1 || d2 <= d1 || h2 <= h1) continue;

    const stack = getStack(disk, inputDisks, memo);
    if (stack.height > maxStack.height) maxStack = stack;
  }

  maxStack.disks.push(diskTop);
  maxStack.height += h1;
  memo[key] = JSON.stringify(maxStack); // stringify because objects are passed around by reference, and we don't want that in this case
  return JSON.parse(memo[key]);
}
