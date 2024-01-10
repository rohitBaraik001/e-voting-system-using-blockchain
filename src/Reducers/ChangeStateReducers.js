const initialState = {
  changeState: "Registration",
};
export const ChangeStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        changeState: action.payload,
      };
    default:
      return state;
  }
};
