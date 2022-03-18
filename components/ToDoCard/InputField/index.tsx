import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useMutation } from "@apollo/client";
import { CREATE_TO_DO } from "./graphql";
import { useState } from "react";

export default function InputField() {
  const [formState, setFormState] = useState({
    title: "",
  });

  const [addTodo, { data, loading, error }] = useMutation(CREATE_TO_DO, {
    variables: { title: formState.title },
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const onClickCheck = (e: any) => {
    e.preventDefault();
    addTodo();
    onClickClear();
  };

  const onClickClear = () => {
    (document.getElementById("input") as HTMLInputElement).value = "";
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 500 }}
    >
      <InputBase
        id="input"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter To-Do List"
        value={formState.title}
        onChange={(e) =>
          setFormState({
            ...formState,
            title: e.target.value,
          })
        }
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "green" }}
        aria-label="search"
        onClick={onClickCheck}
      >
        <CheckIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        sx={{ p: "10px", color: "red" }}
        aria-label="directions"
        onClick={onClickClear}
      >
        <ClearIcon />
      </IconButton>
    </Paper>
  );
}
