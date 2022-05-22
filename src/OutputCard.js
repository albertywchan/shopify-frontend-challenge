import * as React from "react";
import Typography from "@mui/material/Typography";

function OutputCard(props) {
  return (
    <div
      style={{
        backgroundColor: "#FAF9F8",
        padding: 10,
      }}
    >
      <Typography
        variant="h4"
        display="inline"
        gutterBottom
        component="div"
        style={{
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Prompt:&nbsp;
      </Typography>
      <Typography
        variant="h4"
        display="inline"
        gutterBottom
        component="div"
        sx={{ whiteSpace: "pre-line" }}
        style={{
          fontSize: 16,
        }}
      >
        {props.input}
        {"\n"}
      </Typography>
      <Typography
        variant="h4"
        display="inline"
        gutterBottom
        component="div"
        style={{
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Response:&nbsp;
      </Typography>
      <Typography
        variant="h4"
        display="inline"
        style={{
          fontSize: 16,
        }}
      >
        {props.output}
      </Typography>
    </div>
  );
}

export default OutputCard;
