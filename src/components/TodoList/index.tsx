import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import Error from "../Error";

//-----------------------------------------------------------------------------
import { useMutation, useQuery } from "@apollo/client";
import GET_ALL_ITEMS from "../../graphql/getAllTodos";
import EDIT_ITEM from "../../graphql/updateTodo";
import DELETE_ITEM from "../../graphql/deleteTodo";

export default function ToDoList() {
  const [form, setForm] = React.useState({
    title: "",
  });

  const onChange = (e: any) =>
    setForm({
      ...form,
      title: e.target.value,
    });

  const [editItem] = useMutation(EDIT_ITEM, {
    refetchQueries: [GET_ALL_ITEMS, "getAllItemsSortID"],
  });

  const [deleteItem] = useMutation(DELETE_ITEM, {
    refetchQueries: [GET_ALL_ITEMS, "getAllItemsSortID"],
  });

  const { loading, error, data } = useQuery(GET_ALL_ITEMS);
  const [checked, setChecked] = React.useState([0]);

  //if (loading) return "Loading...";

  if (error) return <Error>{error.message}</Error>;

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const onClickDelete = (item: any) =>
    deleteItem({ variables: { id: item.node.id } });

  const onClickEdit = (e: any, item: any) => {
    e.preventDefault();
    if (form.title !== "") {
      editItem({ variables: { id: item.node.id, title: form.title } });
    }
  };
  if (data) {
    return (
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {data.todoItems.edges.map((item: any) => {
          const labelId = `checkbox-list-label-${item.node.title}`;

          return (
            <ListItem
              key={item.node.id}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    type="submit"
                    onClick={(e) => onClickEdit(e, item)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    sx={{ marginLeft: "20px" }}
                    onClick={(e) => onClickDelete(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemButton dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    onChange={handleToggle(item)}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId}>
                  <TextField
                    fullWidth
                    multiline
                    variant="standard"
                    defaultValue={item.node.title}
                    onChange={onChange}
                  />
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }
  return <></>;
}
