import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Home/Home'
import Header from './Header/Header'
import About from './About/About'
import Cart from './Cart/Cart'
// import Form from "./Form/Form"
import Product from "./Product/Product"
import Footer from './Footer/Footer'
import Contect from './Contacts/Contect'
import Service from './Service/Service'
import Registeruser from './Form/RegisterUser/Registeruser'
import Login from "./Form/Login/LoginForm"    
import SearchBooks from './SearchBooks/SearchBooks'
import { createContext } from 'react'
import SingleShowBook from './SingleShowBook/SingleShowBook'
// import { Provider } from 'react'
// import  Login  from './Form/Login/Login'
export const searchContext = createContext({})

function First() {
    const [searchBooksdata, setSearchBooksData] = useState([])
    const [searchBookShow, setSearchBookShow]=useState({})

    return (
        <>
            <searchContext.Provider value={{setSearchBooksData,searchBooksdata , setSearchBookShow ,searchBookShow}}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        {/* <Route path='/' element={<Home/>}></Route> */}
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/product' element={<Product />}></Route>
                        <Route path='/service' element={<Service />}></Route>
                        <Route path='/contact' element={<Contect />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                        <Route path='/sign' element={<Login />}></Route>
                        <Route path='/register' element={<Registeruser />}></Route>
                        <Route path='/searchbooks' element={<SearchBooks />}></Route>
                        <Route path='/singleshowbook' element={<SingleShowBook/>}></Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </searchContext.Provider>
        </>
    )
}

export default First