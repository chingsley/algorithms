/**
 * Time: O(nlong(n))
 * Space: O(n)
 *    where n = length of tasks
 * @param k number
 * @param tasks number[]
 * @returns number[][]
 */
export function taskAssignment(k: number, tasks: number[]) {
  const sortedTasks = tasks.map((task, idx) => ({ task, idx })).sort((a, b) => a.task - b.task);
  const pairedTasks: number[][] = [];
  // console.log(sortedTasks);

  let left = 0;
  let right = sortedTasks.length - 1;
  while (left < right) {
    pairedTasks.push([sortedTasks[left].idx, sortedTasks[right].idx]);
    left += 1;
    right -= 1;
  }
  return pairedTasks;
}


console.log(
  taskAssignment(3, [1, 3, 5, 3, 1, 4])
);