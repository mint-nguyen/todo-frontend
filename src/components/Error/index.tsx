import * as React from "react";
import Paper from "@mui/material/Paper";

const Error = ({ children }: any) => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 500 }}
    >
      {children}
    </Paper>
  );
};
export default Error;
