const initialState = {
  winnerData: {},
};
export const winnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WINNER_ACTION":
      return {
        ...state,
        winnerData: action.payload,
      };
    default:
      return state;
  }
};
