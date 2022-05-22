import * as React from "react";
import Typography from "@mui/material/Typography";

function OutputContainer(props) {
  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{
          margin: 20,
          fontSize: 32,
          color: "#1876D1",
        }}
      >
        RESPONSES
      </Typography>
      {props.outputCards}
    </div>
  );
}

export default OutputContainer;
