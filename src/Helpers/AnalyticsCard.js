import React from "react";
import Paper from "@mui/material/Paper";

export default function AnalyticsCard(props) {
  return (
    <div style={{ display: "flex", margin: 2 }}>
      <Paper
        style={{
          backgroundColor: props.color,
          width: 220,
          height: 160,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        elevation={3}
      >
        <div>
          <h1 style={candiadesH2}>{props.number}</h1>
          <h3 style={candiadesH3}> {props.name}</h3>
        </div>
        <img alt="aa" style={image} src={props.img} />
      </Paper>
    </div>
  );
}
const candiadesH2 = {
  color: "white",
  margin: 5,
};
const candiadesH3 = {
  color: "white",
  margin: 5,
};
const image = {
  width: 80,
  height: 80,
  opacity: 0.8,
};
