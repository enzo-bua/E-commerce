import { ListOfProducts } from "./components/ListOfProducts";
import { Footer } from "./components/NavBar/Footer";
import { Header } from "./components/NavBar/Header";
import { Layout } from "./components/NavBar/Layout"
import { ProductWhithQuery } from "./container/ProductWhitQuery";
// import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'
import { Cart } from "./components/Cart";
import { CartProvider } from "./Context/cart";
import { Information } from "./components/Information";
import { Payment } from "./components/Payment";
function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const bookID = urlParams.get('book');

  return (
  
    <CartProvider>

    
    <Header />
    
    {
      bookID
      ? 
      <>
        <ProductWhithQuery isbn={bookID}/>
    
      </>
      : <>
     <Routes>
          <Route path="/" element={  <ListOfProducts />} />
          <Route path="/book/cart" element={<Cart />} />
          <Route path="/book/information" element={<Information />} />   
          <Route path="/book/payment" element={<Payment />} />          
       
        </Routes>
    
      
      </>
    }
  
    </CartProvider>
    )
}

export default App
