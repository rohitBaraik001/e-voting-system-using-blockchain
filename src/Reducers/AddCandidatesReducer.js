const initialState = {
  candidatesList: [],
};
export const AddCandidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CANDIDATES":
      return {
        ...state,
        candidatesList: action.payload,
      };
    default:
      return state;
  }
};
