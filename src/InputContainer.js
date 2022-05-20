import Prompt from './Prompt.js'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

function InputContainer(props) {
  const [prompt, setPrompt] = useState("");
  
  return (
    <div style={{"width":"5%"}}>
      <Typography variant="h4" gutterBottom component="div">
        Enter 
      </Typography>
      <Prompt prompt={prompt} setPrompt={setPrompt} ></Prompt>
      <Button variant="outlined" onClick={() => props.getResponse(prompt)}>Submit</Button>
    </div>
  );
}

export default InputContainer;
