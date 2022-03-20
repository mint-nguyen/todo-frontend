import { gql } from "@apollo/client";

const CREATE_TO_DO = gql`
  mutation createItem($title: String!) {
    createOneTodoItem(input: { todoItem: { title: $title } }) {
      id
      title
    }
  }
`;
export default CREATE_TO_DO;
