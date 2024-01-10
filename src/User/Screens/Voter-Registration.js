import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Button, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Snackbars from "../../Helpers/SnackBar";

export default function VoterRegistration() {
  const [aadhar, setAadhar] = useState("");
  const [alert, setAlert] = useState("");
  const [alertName, setAlertName] = useState("");
  const [open, setOpen] = useState(false);
  const eVote = useSelector((state) => state.eVote.eVote);
  const account = useSelector((state) => state.account.account);
  const email = localStorage.getItem("email");
  const addAadhar = async () => {
    try {
      const res = await eVote.methods.usersList(email).call();
      const aadharRes = await eVote.methods.aadharList(aadhar).call();
      if (res.aadhar) {
        setAlert("warning");
        setAlertName("You already registered with aadhar");
        setOpen(true);
        return;
      }
      if (aadharRes.accountAddress !== "") {
        setAlert("warning");
        setAlertName("aadhar already used");
        setOpen(true);
        return;
      }
      await eVote.methods
        .createAdharEmail(aadhar, account, email)
        .send({ from: account });

      // window.location.reload();
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Paper style={paper} elevation={3}>
        <h3 style={text}>Aadhar Details</h3>
        <div style={scanDiv}>
          <img
            alt="background"
            style={image}
            src="https://media4.giphy.com/media/Q7xOBMP7DcOdxSRAsi/200w.webp?cid=ecf05e47ixhwnkuiqwfq5nu707slp9gph0zts09dyoiimwlt&rid=200w.webp&ct=g"
          />
        </div>
        <br />
        <Divider style={{ width: "100%" }} />
        <br />
        <div style={numberDiv}>
          <h3 style={{ margin: 2 }}>Aadhar Number *</h3>
          <input
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            style={input}
            placeholder="Aadhar Number"
          />
          <br />
          <Button onClick={addAadhar} variant="contained">
            Verify
          </Button>
        </div>
      </Paper>
      <Snackbars
        alertName={alertName}
        alert={alert}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
const paper = {
  backgroundColor: "white",
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  padding: 10,
  alignItems: "center",
};

const text = {
  color: "#336EB2",
  fontSize: 25,
  margin: 3,
};
const image = {
  height: 200,
  width: 200,
};
const scanDiv = {
  display: "flex",
  flexDirection: "row",
};
const input = {
  height: 40,
  fontSize: 16,
  borderRadius: 4,
  outline: "none",
  padding: 10,
  width: "100%",
  border: "1.5px solid #336EB2",
};
const numberDiv = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
};
