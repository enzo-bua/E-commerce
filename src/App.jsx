import { ListOfProducts } from "./components/ListOfProducts";
import { Footer } from "./components/NavBar/Footer";
import { Header } from "./components/NavBar/Header";
import { HeaderUser } from "./components/NavBar/HeaderUser";

import { Layout } from "./components/NavBar/Layout"
import { ProductWhithQuery } from "./container/ProductWhitQuery";
// import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'
import { Cart } from "./components/Cart";
import { CartProvider } from "./Context/cart";
import { Information } from "./components/Information";
import { Payment } from "./components/Payment";
import { Home } from './pages/Home'
import { BookCategoryQuery } from "./container/BookCategoryQuery";
import { Category } from "./components/Category";
import { CategoryGetQuery } from "./container/CategoryGetQuery";
import { Detail } from "./pages/Detail";
import  userContext  from "./Context/user";
import { Historial } from "./pages/Historial";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { Favoritos } from './pages/Favoritos'
function App() {

  return (
  
    <CartProvider>
      <userContext.Consumer>
        {
        ({ isAuth }) => 
          isAuth
            ? <>
            
              <HeaderUser />
          
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/book/cart" element={<Cart />} />
                <Route path="/book/:isbn" element={<ProductWhithQuery />}/>
                <Route path="/category" element={<CategoryGetQuery />} />          
                <Route path="/category/:genero" element={<BookCategoryQuery />}/>
                <Route path="/historial" element={<Historial />}/>
                <Route path="/favoritos" element={<Favoritos />}/>


              </Routes>
            </>
          : <>
            <Header />
            
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/book/:isbn" element={<ProductWhithQuery />}/>
            <Route path="/category" element={<CategoryGetQuery />} />          
            <Route path="/category/:genero" element={<BookCategoryQuery />}/>

            
              <Route path="/login" element={<NotRegisterUser />}/>
              <Route path="/historial" element={<NotRegisterUser />}/>
              <Route path="/book/cart" element={<NotRegisterUser />}/>

            </Routes>
          </>
        }
      </userContext.Consumer>

  
    </CartProvider>
    )
}

export default App
