import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { ListedItems } from "../ToDoList/List";

export default function InputField() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 500 }}
    >
      <InputBase
        id="input"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter To-Do List"
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "green" }}
        aria-label="search"
        onClick={() => {
          const newItem = (document.getElementById("input") as HTMLInputElement)
            .value;
          ListedItems.push(newItem);
          console.log(ListedItems);
        }}
      >
        <CheckIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        sx={{ p: "10px", color: "red" }}
        aria-label="directions"
        onClick={() => {
          (document.getElementById("input") as HTMLInputElement).value = "";
        }}
      >
        <ClearIcon />
      </IconButton>
    </Paper>
  );
}
