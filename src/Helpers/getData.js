import { addCandidatesAction, winnerAction } from "../Api/action";
export const getCandidates = async (dispatch, eVote) => {
  try {
    const count = await eVote.methods.candidatesCount().call();

    const list = [];
    var winner = "";
    var maxCount = 0;
    var winnerPartyName = "";
    for (var i = 1; i <= count; i++) {
      const res = await eVote.methods.candidatesList(i).call();

      if (res.voteCount > maxCount) {
        maxCount = res.voteCount;
        winner = res.name;
        winnerPartyName = res.party;
      }
      list.push(res);
    }
    dispatch(
      winnerAction({
        winner: winner,
        votes: maxCount,
        partyName: winnerPartyName,
      })
    );
    dispatch(addCandidatesAction(list));
  } catch (error) {}
  return true;
};
