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
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_ITEMS, DELETE_ITEM } from "./graphql";

export default function ToDoList() {
  const [deleteItem] = useMutation(DELETE_ITEM, {
    refetchQueries: [GET_ALL_ITEMS, "getAllItemsSortID"],
  });

  const { loading, error, data } = useQuery(GET_ALL_ITEMS);
  const [checked, setChecked] = React.useState([0]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

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

  if (data) {
    return (
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {data.todoItems.edges.map((item: any) => {
          const labelId = `checkbox-list-label-${item.node.title}`;
          const onClickDelete = () =>
            deleteItem({ variables: { id: item.node.id } });
          console.log(item.node.id);
          return (
            <ListItem
              key={item.node.id}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={onClickDelete}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    sx={{ marginLeft: "20px" }}
                  >
                    <EditIcon />
                  </IconButton>
                </>
              }
              disablePadding
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
                <ListItemText id={labelId} primary={`${item.node.title}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }
}
