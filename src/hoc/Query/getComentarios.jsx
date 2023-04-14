import { gql } from "@apollo/client";

export const GET_COMENTARIOS = gql`
  query Query($isbn: String) {
    getBook(isbn: $isbn) {
      book {
        opiniones {
          nombre_user
          opinion
        }
      }
    }
  }
`