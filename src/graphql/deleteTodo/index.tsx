import { gql } from "@apollo/client";
const DELETE_ITEM = gql`
  mutation deleteOneItem($id: ID!) {
    deleteOneTodoItem(input: { id: $id }) {
      id
      title
    }
  }
`;
export default DELETE_ITEM;
