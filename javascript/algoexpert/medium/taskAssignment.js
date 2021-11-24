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
function taskAssignment(k, tasks) {
  // Write your code here.
  const pairedTasks = [];
  const taskIndicesDict = mapTaskToIndices(tasks);
  const sortedTasks = sortTasks(tasks);
  // console.log({ tasks, sortedTasks });

  let [i, j] = [0, sortedTasks.length - 1];
  while (i < j) {
    const firstNum = sortedTasks[i];
    const secondNum = sortedTasks[j];
    console.log({ firstNum, secondNum });
    const idxOfFirstNum = taskIndicesDict[firstNum].pop();
    const idxOfSecondNum = taskIndicesDict[secondNum].pop();
    pairedTasks.push([idxOfFirstNum, idxOfSecondNum]);
    i++;
    j--;
  }

  return pairedTasks;
}

function mapTaskToIndices(tasks) {
  return tasks.reduce((acc, task, idx) => {
    // console.log({ acc, task, idx });
    if (acc[task]) {
      acc[task].push(idx);
    } else {
      acc[task] = [idx];
    }
    return acc;
  }, {});
}

function sortTasks(tasks) {
  const sortedCopy = [...tasks];
  sortedCopy.sort((a, b) => a - b);
  return sortedCopy;
}

const testCase1 = {
  k: 3,
  tasks: [1, 3, 5, 3, 1, 4],
};

console.log(taskAssignment(testCase1.k, testCase1.tasks));

// Do not edit the line below.
exports.taskAssignment = taskAssignment;
