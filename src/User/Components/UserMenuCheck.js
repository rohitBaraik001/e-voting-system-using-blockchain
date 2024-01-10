import React from "react";
import VoterArea from "../Screens/Voter-Area";
import VoterRegistration from "../Screens/Voter-Registration";
import Result from "../Screens/Result";
import About from "../Screens/About";
export default function UserMenuCheck(props) {
  if (props.name === "Voter-Area") return <VoterArea />;
  if (props.name === "Voter-Registration") return <VoterRegistration />;
  if (props.name === "Result") return <Result />;
  if (props.name === "About") return <About />;
}
