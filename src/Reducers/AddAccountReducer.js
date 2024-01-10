const initialState = {
  account: "",
};
export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return {
        ...state,
        account: action.payload,
      };
    default:
      return state;
  }
};
