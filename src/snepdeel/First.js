import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Header from './Header/Header'
import About from './About/About'
import Cart from './Cart/Cart'
// import Form from "./Form/Form"
import Product from "./Product/Product"
import Footer from './Footer/Footer'
import Contect from './Contacts/Contect'
import Service from './Service/Service'    
import Register from "./Form/Register/RegisterForm"
import Login from "./Form/Login/LoginForm"
function First() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                {/* <Route path='/' element={<Home/>}></Route> */}
                <Route path='/about' element={<About/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/service' element={<Service/>}></Route>
                <Route path='/contact' element={<Contect/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/sign' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default First