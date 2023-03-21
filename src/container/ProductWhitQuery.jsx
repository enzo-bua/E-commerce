
import {  useQuery } from "@apollo/client";
import { TemplateLibro } from "../components/TemplateLibro";
import { GET_PRODUCTS } from "../hoc/Query/getBook";


export function ProductWhithQuery ({ isbn }) {

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { isbn }
  });
  return (
    loading
      ? <p>Cargando...</p>
      : data && <TemplateLibro product={data.getBook.book} />
    
    
      
    
  )

    
    

}
