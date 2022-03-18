import { gql } from "@apollo/client";

export const CREATE_TO_DO = gql`
  mutation createItem($title: String!) {
    createOneTodoItem(input: { todoItem: { title: $title } }) {
      id
      title
    }
  }
`;
