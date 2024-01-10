import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCandidates } from "../../Helpers/getData";
import Snackbars from "../../Helpers/SnackBar";
import CandidateCard from "../Components/CandidatesCard";
import CandidatesEmptyPage from "../Components/EmptyPages";

export default function VoterArea() {
  const dispatch = useDispatch();
  const [aadhar, setAadhar] = useState("");
  const [alert, setAlert] = useState("");
  const [state, setState] = useState("");
  const [alertName, setAlertName] = useState("");
  const [isVoted, setIsVoted] = useState(false);
  const email = localStorage.getItem("email");

  const getAadhar = async () => {
    try {
      const res = await eVote.methods.usersList(email).call();
      setAadhar(res.aadhar);
      setIsVoted(res.isVoted);
    } catch (error) {}
  };
  const eVote = useSelector((state) => state.eVote.eVote);
  useEffect(() => {
    getCandidates(dispatch, eVote);
  }, [dispatch, eVote]);
  const candidatesList = useSelector(
    (state) => state.candidates.candidatesList
  );
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    if (aadhar === "") {
      setAlertName("You are not registered your aadhar");
      setAlert("warning");
    } else {
      setAlertName("You have already voted");
      setAlert("error");
    }
    setOpen(true);
  };
  useEffect(() => {
    getAadhar();
  });
  
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
    getState(state);
  });
  if (candidatesList.length === 0 || state === "Registration") {
    return (
      <CandidatesEmptyPage
        image={
          "https://img.freepik.com/free-vector/voters-inserting-forms-into-ballot-boxes_74855-4585.jpg?size=626&ext=jpg&ga=GA1.1.1522381886.1646910666"
        }
        header={"Hold on! admin is adding candidates"}
      />
    );
  }
  if (state === "Result") {
    return (
      <CandidatesEmptyPage
        image={
          "https://img.freepik.com/free-vector/voters-inserting-forms-into-ballot-boxes_74855-4585.jpg?size=626&ext=jpg&ga=GA1.1.1522381886.1646910666"
        }
        header={"Voting is done , Results are announced"}
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        //justifyContent: "space-between",
      }}
    >
      {candidatesList.map((data, index) => (
        <CandidateCard
          aadhar={aadhar}
          handleClick={handleClick}
          key={index}
          id={index + 1}
          partyName={data.party}
          isVoted={isVoted}
          email={email}
        />
      ))}

      <Snackbars
        alertName={alertName}
        alert={alert}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
