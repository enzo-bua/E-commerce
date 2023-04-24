import { gql } from "@apollo/client";

export const DELETE_COMENTARIOS = gql`
mutation DeleteOpinion($coment: String!, $isbn: String!, $tokenUser: String!) {
  deleteOpinion(coment: $coment, isbn: $isbn, tokenUser: $tokenUser) {
    message
    success
  }
}
`