import { ProductWhithQuery } from "../container/ProductWhitQuery"
export function Detail ({ bookID }) {
  return (
    bookID && <ProductWhithQuery isbn={bookID}/>

  )
}