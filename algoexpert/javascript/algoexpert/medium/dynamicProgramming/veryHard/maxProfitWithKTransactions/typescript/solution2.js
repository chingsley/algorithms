// WORK IN PROGRESS!
var states;
(function (states) {
    states["SOLD"] = "SOLD";
    states["BOUGHT"] = "BOUGHT";
})(states || (states = {}));
var actions;
(function (actions) {
    actions["SKIP"] = "SKIP";
    actions["BUY"] = "BUY";
    actions["SELL"] = "SELL";
})(actions || (actions = {}));
const stateActions = {
    [states.SOLD]: [actions.SKIP, actions.BUY],
    [states.BOUGHT]: [actions.SKIP, actions.SELL],
};
export function maxProfitWithKTransactions(prices, k) {
    const intialState = {
        currState: states.SOLD,
        profit: 0,
    };
    return maxAt(0, prices, 0, k, intialState);
}
function maxAt(idx, prices, iK, k, state) {
    if (idx > prices.length - 1)
        return state.profit;
    if (iK >= k)
        return state.profit;
    const actionables = stateActions[state.currState];
    let profit = state.profit;
    for (let action of actionables) {
        if (action === actions.SKIP) {
            profit = Math.max(state.profit, maxAt(idx + 1, prices, iK, k, state));
        }
        else if (action === actions.BUY) {
            profit = Math.max(profit, maxAt(idx + 1, prices, iK, k, Object.assign(Object.assign({}, state), { profit: state.profit - prices[idx] })));
        }
        else {
            profit = Math.max(profit, maxAt(idx + 1, prices, iK + 1, k, Object.assign(Object.assign({}, state), { profit: state.profit + prices[idx] })));
        }
    }
    state.profit = profit;
    return profit;
}
