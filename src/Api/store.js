import { createStore, combineReducers } from "redux";
import { accountReducer } from "../Reducers/AddAccountReducer";
import { AddCandidateReducer } from "../Reducers/AddCandidatesReducer";
import { ChangeStateReducer } from "../Reducers/ChangeStateReducers";
import { evoteReducer } from "../Reducers/EvoteReducer";
import { winnerReducer } from "../Reducers/WinnerReducer";
const combined = combineReducers({
  candidates: AddCandidateReducer,
  changeState: ChangeStateReducer,
  eVote: evoteReducer,
  account:accountReducer,
  winnerData:winnerReducer
});
export const store = createStore(combined);
