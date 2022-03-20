import { gql } from "@apollo/client";
const GET_ALL_ITEMS = gql`
  query getAllItemsSortID {
    todoItems(paging: { first: 110 }, sorting: { direction: DESC, field: id }) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
export default GET_ALL_ITEMS;
