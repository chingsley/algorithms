var Direction;
(function (Direction) {
    Direction["West"] = "WEST";
    Direction["East"] = "EAST";
})(Direction || (Direction = {}));
/**
 * Time: O(n)
 * Space: O(n)
 * @param buildings n
 * @param direction
 * @returns number[]
 */
export function sunsetViews(buildings, direction) {
    const result = [];
    if (direction === Direction.West) {
        traverseLeftToRight(buildings, result);
    }
    else {
        traverseRightToLeft(buildings, result);
        result.reverse();
    }
    return result;
}
function traverseLeftToRight(buildings, result) {
    let runningMax = 0;
    for (let i = 0; i < buildings.length; i++) {
        if (buildings[i] > runningMax) {
            result.push(i);
            runningMax = buildings[i];
        }
    }
}
function traverseRightToLeft(buildings, result) {
    let runningMax = 0;
    for (let i = buildings.length - 1; i >= 0; i--) {
        if (buildings[i] > runningMax) {
            result.push(i);
            runningMax = buildings[i];
        }
    }
}
