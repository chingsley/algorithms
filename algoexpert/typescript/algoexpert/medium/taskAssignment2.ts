/**
 *Time: O(n log n) due to the sorting
        all other operations including copying
        and .reduce() are O(n) which is dwarfed
        by the O(n log n) brought about by sorting
  Space: O(n) mainly due to the returned array of pairs

 * @param {integer} k staff count
 * @param {array} tasks each int in array represents task duration
 * @returns array of paired indices of task durations
 */
  function taskAssignment(k: number, tasks: number[]): number[][]{
    const numIndicesPair = tasks.map((num, i) => [num, i]);
    numIndicesPair.sort((a, b) => a[0] - b[0])
    const pairedTasks = [];

    let i = 0;
    let j = numIndicesPair.length - 1;
    while(i < j) {
      pairedTasks.push([numIndicesPair[i][1], numIndicesPair[j][1]]);
      i++;
      j--;
    }


  
    return pairedTasks;
  }
  
  const testCase1 = {
    k: 3,
    tasks: [1, 3, 5, 3, 1, 4],
  };
  
  console.log(taskAssignment(testCase1.k, testCase1.tasks));
  
  // Do not edit the line below.
  // exports.taskAssignment = taskAssignment;
  