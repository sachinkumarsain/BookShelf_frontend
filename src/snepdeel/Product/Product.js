import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"
// import requests from '../Home/requests'
// import ProductRow from './ProductRow'
import axios from 'axios'
import { useContext } from 'react'
import { searchContext } from '../First'
// import { searchContext } from '../First'

function Product() {

  const {totalBooks, setTotalBooks,setMostPopularBook ,mostPopularBook} = useContext(searchContext)
 
  useEffect(() => {
    axios.get("http://localhost:8080/product")
      .then((result) => {
        // console.log(result.data)
        setTotalBooks(result.data)
      })
  }, [])


  console.log(totalBooks)
  function handleMostPopularBook(e){
    e.preventDefault();

    const tnp = totalBooks.filter((mpb) => mpb.bookType === "mostpopular" );
    console.log(tnp)
    setMostPopularBook(tnp)
    // totalBooks.filter((mpb) => (mpb.bookType === "mostpopular")?setMostPopularBook(mpb):"" )

   
  }
  console.log(mostPopularBook)


  return (
    <>
      <div className='books'>
        <div className='left'>
          <h2>LIBRARY</h2>
          <ul>
            <li><Link onClick={handleMostPopularBook} to="">Most popular</Link></li>
            <li><Link to="">Fiction</Link></li>
            <li><Link to="">Poetry</Link></li>
            <li><Link to="">fantasy</Link></li>
            <li><Link to="">Romance</Link></li>
            <li><Link to="">Flower</Link></li>
            <li><Link to="">Horror</Link></li>
            <li><Link to="">Cookbooks</Link></li>
            <li><Link to="">Essays</Link></li>
            <li><Link to="">Memoir</Link></li>
            <li><Link to="">Self-Help</Link></li>
            <li><Link to="">Short Stories</Link></li>

          </ul>
        </div>
        <div className='right'>
          {/* <ProductRow endpoint={requests.fetchmostpopular} heading=" Most Popular" />
          <ProductRow endpoint={requests.fetchflower} heading=" Flower Books" />
          <ProductRow endpoint={requests.fetchfantasy} heading="Fantasy Books" />
          <ProductRow endpoint={requests.fetchromance} heading="Romance Books" />
          <ProductRow endpoint={requests.fetchpoetry} heading="Poetry Books" /> */}

        </div>
      </div>
    </>
  )
}

export default Product