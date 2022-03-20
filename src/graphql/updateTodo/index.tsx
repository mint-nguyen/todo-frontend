import { gql } from "@apollo/client";

const EDIT_ITEM = gql`
  mutation editItem($id: ID!, $title: String!) {
    updateOneTodoItem(input: { id: $id, update: { title: $title } }) {
      id
      title
    }
  }
`;
export default EDIT_ITEM;
