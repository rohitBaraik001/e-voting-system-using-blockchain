import React, { useEffect, useState } from "react";
import { StyleRoot } from "radium";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { loadBlockchainData, loadWeb3 } from "../../Helpers/Web3Helpers";
export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);
  const account = useSelector((state) => state.account.account);
  const eVote = useSelector((state) => state.eVote.eVote);
  const signUp = async () => {
    setLoading(true);
    if (!username || !email || !password) {
      alert("please fill all details");
      setLoading(false);
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("please enter valid email address");
      setLoading(false);
      return;
    }
    try {
      await eVote.methods
        .createUser(username, email, password, "")
        .send({ from: account });
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      setLoading(false);
      navigate("/Login");
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  };
  return (
    <StyleRoot>
      <div style={rootDiv}>
        <div style={leftDiv}>
          <img
            alt="background"
            src={require("../../voting2-removebg.png")}
            height={"80%"}
            width={"80%"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={rightDiv}>
          <img
            alt="login"
            src="data:image/png;base64,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"
            style={{ height: 90, width: 90 }}
          />
          <div style={inputDiv}>
            <h3 style={{ color: "white", fontSize: 23 }}>SignUp</h3>
            <h3 style={labels}>
              Username <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputs}
              placeholder="Username"
              type="text"
            />
            <h3 style={labels}>
              Email <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputs}
              placeholder="Email"
              type="email"
            />
            <h3 style={labels}>
              Password <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputs}
              placeholder="Password"
              type="password"
            />
            <Button onClick={signUp} style={button} variant="contained">
              {loading ? (
                <ReactLoading
                  height={30}
                  width={30}
                  type={"spinningBubbles"}
                  color="white"
                />
              ) : (
                " SignUp"
              )}
            </Button>
            <Button href="/Login" style={create}>
              Already Have an account
            </Button>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}
const rootDiv = {
  backgroundColor: "#17202A",
  display: "flex",
  flex: 1,
  flexDirection: "row",
  height: "100vh",
  "@media (max-width: 500px)": {
    height: "100vh",
  },
};
const leftDiv = {
  backgroundColor: "#17202A",

  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 500px)": {
    height: "100vh",
    display: "none",
  },
};

const rightDiv = {
  backgroundColor: "#17202A",
  height: "100vh",
  flex: 0.8,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  "@media (max-width: 500px)": {
    height: "100vh",
    flex: 1,
  },
};

const inputDiv = {
  width: "80%",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 500px)": {},
};
const inputs = {
  backgroundColor: "white",
  display: "flex",
  padding: 12,
  borderRadius: 20,
  margin: 5,
  flex: 1,
  fontSize: 17,
  fontWeight: "bold",
  fontColor: "black",
  border: "1px solid grey",
  outline: "none",
  width: "73%",
  "@media (max-width: 500px)": {
    width: "80%",
  },
};
const labels = {
  margin: 5,
  fontWeight: "bold",
  color: "white",
};
const button = {
  width: "78%",
  display: "flex",
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 8,
  marginTop: 15,
  height: 43,
  //backgroundColor: "#8F93EB",
  "@media (max-width: 500px)": {},
};
const create = {
  fontSize: 13,
  fontWeight: "bold",
  //color: "#8F93EB",
  margin: 10,
  "@media (max-width: 500px)": {},
};
