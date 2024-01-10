import React from "react";

export default function CandidatesEmptyPage(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 2, color: "#116DD3" }}>{props.header}</h2>
      <img alt="background" style={imageStyle} src={props.image} />
    </div>
  );
}
const imageStyle = {
  width: "60%",
  hegiht: 400,
};
