import { gql } from "@apollo/client";

export const ADD_GUESTBOOK_ENTRY = gql`
  mutation InsertMessage($message: String!, $user: String!) {
    insert_guest_book(objects: { message: $message, user: $user }) {
      returning {
        id
        created_at
        message
        user
      }
    }
  }
`;