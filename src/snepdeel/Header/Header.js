import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import logo from "../../juCUFrK (1).png"
// import axios from 'axios'

function Header() {




  return (
    <>
      <header>
        <div className='topHeader'>
          <h1><img src={logo}></img></h1>
          <div className='searchButton'>
            <input autoFocus type='text' placeholder='Enter product name'></input>
            <button>Search</button>
          </div>
          <ul>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/sign">Sign</Link></li>
          </ul>
        </div>
        <div className='bottomHeader'>
          <ul>
            <li>
              <Link to="/">Home</Link>

            </li>
            <li>
              <Link to="/about">About</Link>

            </li>
            <li>
              <Link to="/product">Product</Link>

            </li>
            <li>
              <Link to="/contact">Contact</Link>

            </li>
            <li>
              <Link to="/service">Service</Link>

            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header