import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeStateAction } from "../../Api/action";
export default function ChangeState() {
  const [value, setValue] = React.useState("");
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const dispatch = useDispatch();

  const eVote = useSelector((state) => state.eVote.eVote);
  const account = useSelector((state) => state.account.account);
  const changeState = async () => {
    try {
      await eVote.methods.changeStates(value).send({ from: account });
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
    //dispatch(changeStateAction(value));
  };
  const getState = async () => {
    try {
      const st = await eVote.methods.changeState().call();
      dispatch(changeStateAction(st));
      setState(st);
    } catch (error) {
      //alert(error.message);
    }
  };

  useEffect(() => {
    getState();
  });

  return (
    <div style={{}}>
      <h2 style={{ margin: 3 }}>Current State : {state}</h2>
      <br />
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Voting"
            control={<Radio color="success" />}
            label="Voting"
          />
          <FormControlLabel
            value="Registration"
            control={<Radio color="success" />}
            label="Registration"
          />
          <FormControlLabel
            value="Result"
            control={<Radio color="success" />}
            label="Result"
          />
        </RadioGroup>
        <br />
        <Button onClick={changeState} variant="contained">
          {" "}
          Change State
        </Button>
      </FormControl>
    </div>
  );
}
