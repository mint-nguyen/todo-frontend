import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export default function InputField() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 500 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter To-Do List"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "green" }}
        aria-label="search"
      >
        <CheckIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: "10px", color: "red" }} aria-label="directions">
        <ClearIcon />
      </IconButton>
    </Paper>
  );
}
