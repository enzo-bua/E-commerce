import { gql } from "@apollo/client";

export const DATA_USER = gql`
  mutation Mutation($tokenUser: String!, $nombre: String!, $dni: String!, $direccion: String!, $agregarInfo: String!, $telefono: String!, $codPostal: Float!) {
    agregarDireccionUser(tokenUser: $tokenUser, nombre: $nombre, dni: $dni, direccion: $direccion, AgregarInfo: $agregarInfo, telefono: $telefono, cod_postal: $codPostal) {
      accessToken
      success
    }
  }
`