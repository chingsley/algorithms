// WORK IN PROGRESS!

enum states {
  SOLD = 'SOLD',
  BOUGHT = 'BOUGHT',
}

enum actions {
  SKIP = 'SKIP',
  BUY = 'BUY',
  SELL = 'SELL',
}

const stateActions: { [key: string]: actions[]; } = {
  [states.SOLD]: [actions.SKIP, actions.BUY],
  [states.BOUGHT]: [actions.SKIP, actions.SELL],
};

interface State {
  currState: states,
  profit: number,
}

export function maxProfitWithKTransactions(prices: number[], k: number) {
  const intialState: State = {
    currState: states.SOLD,
    profit: 0,
  };
  return maxAt(0, prices, 0, k, intialState);
}

function maxAt(idx: number, prices: number[], iK: number, k: number, state: State) {
  if (idx > prices.length - 1) return state.profit;
  if (iK >= k) return state.profit;

  const actionables = stateActions[state.currState];
  let profit = state.profit;
  for (let action of actionables) {
    if (action === actions.SKIP) {
      profit = Math.max(state.profit, maxAt(idx + 1, prices, iK, k, state));
    } else if (action === actions.BUY) {
      profit = Math.max(profit, maxAt(idx + 1, prices, iK, k, {
        ...state,
        profit: state.profit - prices[idx]
      }));
    } else {
      profit = Math.max(profit, maxAt(idx + 1, prices, iK + 1, k, {
        ...state,
        profit: state.profit + prices[idx],
      }));
    }
  }

  state.profit = profit;
  return profit;
}
