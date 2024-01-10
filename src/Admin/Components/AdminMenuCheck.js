import React from "react";
import AddCandidate from "../Screens/AddCandidate";
import CandidateDetails from "../Screens/CandidateDetails";
import ChangeState from "../Screens/ChangeState";
import Analytics from "../Screens/Analytics";
export default function AdminMenuCheck(props) {
  if (props.name === "Candidate-Details") return <CandidateDetails />;
  if (props.name === "Add-Candidates") return <AddCandidate />;
  if (props.name === "Analytics") return <Analytics />;
  if (props.name === "Change-State") return <ChangeState />;
 
}
