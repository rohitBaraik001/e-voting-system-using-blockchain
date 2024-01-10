import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CandidateTable from "../../Helpers/CandidatesTable";
import { getCandidates } from "../../Helpers/getData";
import Confetti from "react-confetti";
import CandidatesEmptyPage from "../Components/EmptyPages";
import WinnerCard from "../../Helpers/WinnerCard";
export default function Result() {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const eVote = useSelector((state) => state.eVote.eVote);
  const winner = useSelector((state) => state.winnerData.winnerData);
  const candidatesList = useSelector(
    (state) => state.candidates.candidatesList
  );

  useEffect(() => {
    getCandidates(dispatch, eVote);
  }, [dispatch, eVote]);
  const getState = async () => {
    try {
      const st = await eVote.methods.changeState().call();
      // dispatch(changeStateAction(st));
      setState(st);
    } catch (error) {
      //alert(error.message)
    }
  };
  useEffect(() => {
    getState();
  });

  if (state === "Result") {
    return (
      <div style={rootDiv}>
        <Confetti />
        <h2>Winner!</h2>
        <WinnerCard
          image={
            "https://media.istockphoto.com/vectors/woman-speaker-and-a-group-of-people-listen-to-a-speech-vector-id1231031552?k=20&m=1231031552&s=612x612&w=0&h=GTWPcq93OGD-SQ9J5aIQZIqqwZA1eKfLebWu_I552uA="
          }
          partyName={winner.partyName}
          votes={winner.votes}
        />
        <br />
        <br />
        <CandidateTable candidatesList={candidatesList} />
      </div>
    );
  } else {
    return (
      <div>
        <CandidatesEmptyPage
          image={
            "https://img.freepik.com/free-vector/voters-inserting-forms-into-ballot-boxes_74855-4585.jpg?size=626&ext=jpg&ga=GA1.1.1522381886.1646910666"
          }
          header={"Hold on! until polling is done"}
        />
      </div>
    );
  }
}
const rootDiv = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
};
