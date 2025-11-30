{
    {
        let Direction;
        (function (Direction) {
            Direction["East"] = "EAST";
            Direction["West"] = "WEST";
        })(Direction || (Direction = {}));
        // O(n) time | O(n) space
        // n = length if buildings array
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            let idx = direction === Direction.West ? 0 : buildings.length - 1;
            let step = direction === Direction.West ? 1 : -1;
            let result = [idx];
            idx += step;
            while (idx >= 0 && idx < buildings.length) {
                if (buildings[idx] > buildings[result[result.length - 1]]) {
                    result.push(idx);
                }
                idx += step;
            }
            return direction === Direction.West ? result : result.reverse();
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["East"] = "EAST";
            Direction["West"] = "WEST";
        })(Direction || (Direction = {}));
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            let result = [];
            if (direction === Direction.West) {
                result = traverse(buildings, 0, 1);
            }
            else {
                result = traverse(buildings, buildings.length - 1, -1);
                result.reverse();
            }
            return result;
        }
        function traverse(buildings, startIdx, step) {
            let idx = startIdx;
            let result = [idx];
            idx = idx + step;
            while (idx >= 0 && idx < buildings.length) {
                if (buildings[idx] > buildings[result[result.length - 1]]) {
                    result.push(idx);
                }
                idx += step;
            }
            return result;
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["East"] = "EAST";
            Direction["West"] = "WEST";
        })(Direction || (Direction = {}));
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            let idx = direction === Direction.West ? 0 : buildings.length - 1;
            let step = direction === Direction.West ? 1 : -1;
            const result = [idx];
            traverse(idx + step, buildings, step, result);
            return direction === Direction.West ? result : result.reverse();
        }
        function traverse(idx, buildings, step, result) {
            if (idx < 0 || idx >= buildings.length)
                return;
            if (buildings[idx] > buildings[result[result.length - 1]]) {
                result.push(idx);
            }
            traverse(idx + step, buildings, step, result);
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["East"] = "EAST";
            Direction["West"] = "WEST";
        })(Direction || (Direction = {}));
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            const isWest = direction === Direction.West;
            let startIdx = isWest ? 0 : buildings.length - 1;
            let step = isWest ? 1 : -1;
            let result = [startIdx];
            let idx = startIdx + step;
            while (idx >= 0 && idx < buildings.length) {
                if (buildings[idx] > buildings[result[result.length - 1]]) {
                    result.push(idx);
                }
                idx += step;
            }
            return isWest ? result : result.reverse();
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["East"] = "EAST";
            Direction["West"] = "WEST";
        })(Direction || (Direction = {}));
        // O(n) time | O(n) space; (n = lenth of buldings array)
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            const isWest = direction === Direction.West;
            const startIdx = isWest ? 0 : buildings.length - 1;
            const step = isWest ? 1 : -1;
            const result = [startIdx];
            let idx = startIdx + step;
            while (idx >= 0 && idx < buildings.length) {
                if (buildings[idx] > buildings[result[result.length - 1]]) {
                    result.push(idx);
                }
                idx += step;
            }
            return isWest ? result : result.reverse();
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["East"] = "EAST";
            Direction["West"] = "WEST";
        })(Direction || (Direction = {}));
        // O(n) time | O(n) space
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            const isWest = direction === Direction.West;
            const startIdx = isWest ? 0 : buildings.length - 1;
            const step = isWest ? 1 : -1;
            const result = [startIdx];
            let idx = startIdx + step;
            while (idx >= 0 && idx < buildings.length) {
                if (buildings[idx] > buildings[result[result.length - 1]]) {
                    result.push(idx);
                }
                idx += step;
            }
            return isWest ? result : result.reverse();
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["West"] = "WEST";
            Direction["East"] = "EAST";
        })(Direction || (Direction = {}));
        ;
        // O(n) time | O(n) space
        // n = length of buildings
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            const isWest = direction === Direction.West;
            const startIdx = isWest ? 0 : buildings.length - 1;
            const step = isWest ? 1 : -1;
            const result = [startIdx];
            for (let i = startIdx + step; i >= 0 && i < buildings.length; i += step) {
                if (buildings[i] > buildings[result[result.length - 1]])
                    result.push(i);
            }
            return isWest ? result : result.reverse();
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["East"] = "EAST";
            Direction["West"] = "WEST";
        })(Direction || (Direction = {}));
        // O(n) time | O(n) space
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            const startIdx = direction === Direction.West ? 0 : buildings.length - 1;
            const step = direction === Direction.West ? 1 : -1;
            const result = [startIdx];
            for (let i = startIdx + step; (i >= 0 && i < buildings.length); i += step) {
                if (buildings[i] > buildings[result[result.length - 1]]) {
                    result.push(i);
                }
            }
            return direction === Direction.West ? result : result.reverse();
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["East"] = "EAST";
            Direction["West"] = "WEST";
        })(Direction || (Direction = {}));
        // O(n) time | O(n) space
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            let [startIdx, step, result] = [0, 1, [0]];
            if (direction === Direction.East) {
                [startIdx, step, result] = [buildings.length - 1, -1, [buildings.length - 1]];
            }
            for (let i = startIdx + step; i >= 0 && i < buildings.length; i += step) {
                if (buildings[i] > buildings[result[result.length - 1]])
                    result.push(i);
            }
            return direction === Direction.West ? result : result.reverse();
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["East"] = "EAST";
            Direction["West"] = "WEST";
        })(Direction || (Direction = {}));
        // O(n) time | O(n) space
        function sunsetViews(buildings, direction) {
            if (buildings.length === 0)
                return [];
            if (direction === Direction.West) {
                return sunsetViewsHelper(buildings, 0, 1);
            }
            else {
                return sunsetViewsHelper(buildings, buildings.length - 1, -1).reverse();
            }
        }
        function sunsetViewsHelper(buildings, startIdx, step) {
            const result = [startIdx];
            for (let i = startIdx + step; i >= 0 && i < buildings.length; i += step) {
                if (buildings[i] > buildings[result[result.length - 1]])
                    result.push(i);
            }
            return result;
        }
    }
}
export const ___ = '___';
