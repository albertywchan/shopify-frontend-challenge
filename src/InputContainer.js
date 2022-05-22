import Prompt from "./Prompt.js";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useState } from "react";

function InputContainer(props) {
  const [prompt, setPrompt] = useState("");

  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{
          color: "#1876D1",
          fontSize: 32,
          fontWeight: 500,
        }}
      >
        ENTER PROMPT
      </Typography>
      <Prompt prompt={prompt} setPrompt={setPrompt}></Prompt>
      <Button
        variant="outlined"
        onClick={() => props.getResponse(prompt)}
        style={{
          fontWeight: "bold",
          marginTop: 20,
          backgroundColor: "white",
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default InputContainer;
