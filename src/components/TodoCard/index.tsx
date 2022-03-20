import { Box } from "@mui/system";
import InputField from "../InputField";
import ToDoList from "../TodoList";

export default function ToDoCard() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        margin: "30px",
      }}
    >
      <InputField />
      <br />
      <ToDoList />
    </Box>
  );
}
