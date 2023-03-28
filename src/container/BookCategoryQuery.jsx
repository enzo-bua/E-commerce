import { useQuery } from "@apollo/client";
import { GET_BOOK_CATEGORY } from "../hoc/Query/getBookCategory";
import { Product } from "../components/Product";
import '../components/ListOfProducts/index.css'
export function BookCategoryQuery({ genero }) {
  const { data, loading } = useQuery(GET_BOOK_CATEGORY, {
    variables: { genero }
  }
  )

  return (
    <section className="container">
      {
        loading
        ? null
        : data && data.getBook.book.map(product => (
          <Product key={product.isbn} product={product} />

        )) 
      }
    </section>
  )
}
