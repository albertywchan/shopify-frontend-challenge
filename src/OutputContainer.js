import * as React from 'react';
import Typography from '@mui/material/Typography';

function OutputContainer(props) {
  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        Responses
      </Typography>
      {props.outputCards}
    </div>
  );
}

export default OutputContainer;
