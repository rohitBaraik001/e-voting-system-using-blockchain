export const addCandidatesAction = (data) => {
  return {
    type: "ADD_CANDIDATES",
    payload: data,
  };
};
export const changeStateAction = (data) => {
  return {
    type: "CHANGE_STATE",
    payload: data,
  };
};

export const eVoteAction = (data) => {
  return {
    type: "EVOTE_ACTION",
    payload: data,
  };
};

export const accountAction = (data) => {
  return {
    type: "ADD_ACCOUNT",
    payload: data,
  };
};

export const winnerAction = (data) => {
  return {
    type: "WINNER_ACTION",
    payload: data,
  };
};
