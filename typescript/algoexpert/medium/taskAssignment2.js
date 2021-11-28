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
    var numIndicesPair = tasks.map(function (num, i) { return [num, i]; });
    numIndicesPair.sort(function (a, b) { return a[0] - b[0]; });
    var pairedTasks = [];
    var i = 0;
    var j = numIndicesPair.length - 1;
    while (i < j) {
        pairedTasks.push([numIndicesPair[i][1], numIndicesPair[j][1]]);
        i++;
        j--;
    }
    return pairedTasks;
}
var testCase1 = {
    k: 3,
    tasks: [1, 3, 5, 3, 1, 4]
};
console.log(taskAssignment(testCase1.k, testCase1.tasks));
// Do not edit the line below.
// exports.taskAssignment = taskAssignment;
