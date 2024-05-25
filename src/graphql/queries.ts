import { gql } from "@apollo/client";

export type GuestBookEntry = {
  id: string;
  user: string;
  message: string;
  created_at: string;
};

export const GET_GUESTBOOK_ENTRIES = gql`
  query GetGuestBookEntries {
    guest_book(order_by: { created_at: desc }) {
      id
      created_at
      message
      user
    }
  }
`;

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
