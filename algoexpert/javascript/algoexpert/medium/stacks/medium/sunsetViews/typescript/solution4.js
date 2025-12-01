// *** Recursion ***//
export var Direction;
(function (Direction) {
    Direction["East"] = "EAST";
    Direction["West"] = "WEST";
})(Direction || (Direction = {}));
// O(n) time, O(n) space
export function sunsetViews(buildings, direction) {
    const startIdx = direction === Direction.West ? 0 : buildings.length - 1;
    const step = direction === Direction.West ? 1 : -1;
    const result = [];
    traverseBuildings(buildings, result, startIdx, step, 0);
    return direction === Direction.West ? result : result.reverse();
}
function traverseBuildings(buildings, result, idx, step, runningMax) {
    if (idx < 0 || idx > buildings.length - 1)
        return;
    if (buildings[idx] > runningMax) {
        result.push(idx);
        runningMax = buildings[idx];
    }
    traverseBuildings(buildings, result, idx + step, step, runningMax);
}
