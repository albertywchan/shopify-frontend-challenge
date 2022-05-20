import * as React from 'react';
import Typography from '@mui/material/Typography';

function OutputCard(props) {
  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        Prompt: {props.input}
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Response: {props.output}
      </Typography>
    </div>
  );
}

export default OutputCard;
