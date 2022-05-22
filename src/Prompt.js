import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Prompt(props) {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={props.prompt}
          onChange={(event) => props.setPrompt(event.target.value)}
          id="outlined-basic"
          label="Start typing here"
          variant="outlined"
          style={{ backgroundColor: "white" }}
        />
      </Box>
    </div>
  );
}

export default Prompt;
