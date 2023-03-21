import { gql } from "@apollo/client"

// export const withProduct = gql`
// query GetBook($nombre: String, $isbn: String, $genero: String, $autor: String) {
//   getBook(nombre: $nombre, isbn: $isbn, genero: $genero, autor: $autor) {

//     book {
//       nombre
//       isbn
//       url_imagen
//       precio
//       descripcion
//       autor {
//         nombre
//       }
//     }
//   }
// }
// `

export const withProduct = gql`
query {
  getBook {
    book {
      nombre
      isbn
      precio
      stock
      url_imagen
      autor {
        nombre
      }

    }
  }
}
`