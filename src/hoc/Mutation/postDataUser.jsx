import { gql } from "@apollo/client";

export const DATA_USER = gql`
  mutation Mutation($nombre: String!, $dni: $String!, $direccion: String!, $agregarInfo: String!, $telefono: String!, $codPostal: Float!) {
    agregarDireccionUser(nombre: $nombre, direccion: $direccion, dni: $dni, AgregarInfo: $agregarInfo, telefono: $telefono, cod_postal: $codPostal) {
      accessToken
      success
      message
    }
  }
`