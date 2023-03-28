import { ProductWhithQuery } from "../container/ProductWhitQuery"
export function Detail ({ bookID }) {
  console.log(bookID)
  return (
    bookID && <ProductWhithQuery isbn={bookID}/>

  )
}