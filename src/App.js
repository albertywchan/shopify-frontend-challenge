import './App.css';
import InputContainer from './InputContainer.js'
import OutputContainer from './OutputContainer.js'
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import OutputCard from './OutputCard';
import axios from 'axios';

function App() {
  const [allCards, setAllCards] = useState([])
  async function getResponse(input) {   
    const data = {
      prompt: input,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
     };
     
    const response = await axios.post("https://api.openai.com/v1/engines/text-curie-001/completions", data, {
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      });
     console.log(response);
    // console.log(response.data.choices[0].text);
    setAllCards([...allCards, <OutputCard key={input} input={input} output={response.data.choices[0].text}/>])
  }

  return (
    <div className="App">
      <Typography variant="h3" gutterBottom component="div">
        Fun with AI
      </Typography>
      <InputContainer style={{"width":"5%"}} getResponse={getResponse} ></InputContainer>
      <OutputContainer outputCards={allCards} ></OutputContainer>
    </div>
  );
}

export default App;
