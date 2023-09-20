import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"
// import requests from '../Home/requests'
import ProductRow from './ProductRow'
import axios from 'axios'
import { useContext } from 'react'
import { searchContext } from '../First'
// import { searchContext } from '../First'

function Product() {

  const { setTotalBooks , setFilterBooks} = useContext(searchContext)
 
  useEffect(() => {
    axios.get("http://localhost:8080/product")
      .then((result) => {
        // console.log(result.data)
        setTotalBooks(result.data)
      })
  }, [])

  function handleClick(value){
    console.log(value)   
    let listValue = value
      axios.post(`http://localhost:8080/listdata ` ,{listValue})
      .then((result)=>{
        console.log(result.data)
        setFilterBooks(result.data)
      })
  }


  return (
    <>
      <div className='books'>
        <div className='left'>
          <h2>LIBRARY</h2>
          <ul>
            <li onClick={() => handleClick("mostpopular")}><Link to="">Most popular</Link></li>
            <li onClick={() => handleClick("")}><Link to="">Fiction</Link></li>
            <li onClick={() => handleClick("poetry")}><Link to="">Poetry</Link></li>
            <li onClick={() => handleClick("fantasy")}><Link to="">fantasy</Link></li>
            <li onClick={() => handleClick("romance")}><Link to="">Romance</Link></li>
            <li onClick={() => handleClick("")}><Link to="">Flower</Link></li>
            <li onClick={() => handleClick("")}><Link to="">Horror</Link></li>
            <li onClick={() => handleClick("")}><Link to="">Cookbooks</Link></li>
            <li onClick={() => handleClick("")}><Link to="">Essays</Link></li>
            <li onClick={() => handleClick("")}><Link to="">Memoir</Link></li>
            <li onClick={() => handleClick("")}><Link to="">Self-Help</Link></li>
            <li onClick={() => handleClick("")}><Link to="">Short Stories</Link></li>
          </ul>
        </div>
        <div className='right'>
          <ProductRow endpoint="mostpopular" heading=" Most Popular" />
          <ProductRow endpoint="poetry" heading="Poetry Books" />
          <ProductRow endpoint="fantasy" heading="Fantasy Books" />
          <ProductRow endpoint="romance" heading="Romance Books" />

        </div>
      </div>
    </>
  )
}

export default Product