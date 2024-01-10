import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CandidateTable from "../../Helpers/CandidatesTable";
import { getCandidates } from "../../Helpers/getData";
export default function CandidateDetails() {
  const dispatch = useDispatch();

  const eVote = useSelector((state) => state.eVote.eVote);
  const candidatesList = useSelector(
    (state) => state.candidates.candidatesList
  );

  useEffect(() => {
    getCandidates(dispatch, eVote);
  }, [dispatch, eVote]);

  return (
    <div>
      <CandidateTable candidatesList={candidatesList} />
    </div>
  );
}
