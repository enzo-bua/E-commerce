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
import { MaterialDesign } from './components/IconoLogin/Materialdsgn'
function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const bookID = urlParams.get('book');
  const urlParamsCategory = new URLSearchParams(window.location.search);
  const genero = urlParamsCategory.get('category');
  
  return (
  
    <CartProvider>

    
    
    {/* {
       bookID || genero
      ?
      <>
        <ProductWhithQuery isbn={bookID}/>
        <BookCategoryQuery genero={genero} />
       

      </>
      : <>
     <Routes>
          <Route path="/" element={  <Home />} />
          <Route path="/book/:bookID" element={<Detail/>} />          
          <Route path="/book/cart" element={<Cart />} />
          <Route path="/book/information" element={<Information />} />   
          <Route path="/book/payment" element={<Payment />} />          
          <Route path="/category" element={<CategoryGetQuery />} />          
         

        </Routes>
    

      </>
    } */}

    <userContext.Consumer>
      {
      ({ isAuth }) => 
        isAuth
          ? <>
          
        <HeaderUser />
        {
       bookID || genero
      ?
      <>
        <ProductWhithQuery isbn={bookID}/>
        <BookCategoryQuery genero={genero} />
       

      </>
      : <>
     <Routes>
          <Route path="/" element={  <Home />} />
          <Route path="/book/:bookID" element={<Detail/>} />          
          <Route path="/book/cart" element={<Cart />} />
          <Route path="/book/information" element={<Information />} />   
          <Route path="/book/payment" element={<Payment />} />          
          <Route path="/category" element={<CategoryGetQuery />} />          
         

        </Routes>
    

      </>
    }
        <Routes>
          {/* <Route path="/book/cart" element={<Cart />} /> */}
          <Route path="/login" element={<Historial />}/>
          <Route path="/historial" element={<MaterialDesign />}/>

        </Routes>
          </>
        : <>
          <Header />
          {
       bookID || genero
      ?
      <>
        <ProductWhithQuery isbn={bookID}/>
        <BookCategoryQuery genero={genero} />
       

      </>
      : <>
     <Routes>
          <Route path="/" element={  <Home />} />
          <Route path="/book/:bookID" element={<Detail/>} />          
          <Route path="/book/cart" element={<Cart />} />
          <Route path="/book/information" element={<Information />} />   
          <Route path="/book/payment" element={<Payment />} />          
          <Route path="/category" element={<CategoryGetQuery />} />          
         

        </Routes>
    

      </>
    }
      <Routes>

          <Route path="/login" element={<NotRegisterUser />}/>
          <Route path="/historial" element={<NotRegisterUser />}/>
          {/* <Route path="/book/cart" element={<NotRegisterUser />}/> */}

        </Routes>
        </>
      }
    </userContext.Consumer>

      

  
  
    </CartProvider>
    )
}

export default App
