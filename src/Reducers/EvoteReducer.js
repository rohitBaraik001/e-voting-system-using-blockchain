const initialState = {
  eVote: {},
};
export const evoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EVOTE_ACTION":
      return {
        ...state,
        eVote: action.payload,
      };
    default:
      return state;
  }
};
