import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"
// import requests from '../Home/requests'
import ProductRow from './ProductRow'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { searchContext } from '../First'
import serverUrl from '../Url'

// import { searchContext } from '../First'

function Product() {

  const [allBooks, setAllBooks] = useState(false)
  const nevigate = useNavigate()
  const { totalBooks, session, setTotalBooks, setFilterBooks } = useContext(searchContext)


  //.........................total books........................//

  useEffect(() => {
    axios.get(`http://localhost:8080/product`)
      .then((result) => {
        // console.log(result.data)
        setTotalBooks(result.data)
      })

  }, [])


  //.................................Books List Click ..............//

  function handleClick(value) {
    console.log(value)
    setAllBooks(true)
    let listValue = value
    axios.post(`http://localhost:8080/listdata `, { listValue })
      .then((result) => {
        console.log(result.data)
        setFilterBooks(result.data)
      })
  }

  //........................Like Books.........................//

  function likeBooks() {
    // console.log("clickLiked")
    axios.get(`${serverUrl}/likebooks/${session}`)
      .then((result) => {
          
        if (result.status===200) {
          setFilterBooks(result.data.collectdata)
          // console.log(result.data.collectdata)
        }
        else{
          alert("please login page")
          nevigate("/sign")
        }

      })

  }

  //.........................Search Books.........................//

  function searchBooks() {

    axios.get(`${serverUrl}/searchbooks/${session}`)
      .then((result) => {
        
        if (result.status === 200) {
          setFilterBooks(result.data.collectdata)
        }

      })
  }

  //.........................Current Read Books.......................//

  function currentReadBooks() {
    axios.get(`${serverUrl}/currentreadbooks/${session}`)
      .then((result) => {
        
        if (result.status === 200) {
          setFilterBooks(result.data.collectdata)
        }

      })
  }

  //.........................Comment Books....................//
  function commentBooks() {
    axios.get(`${serverUrl}/commentbooks/${session}`)
      .then((result) => {
        
        if (result.status === 200) {
          setFilterBooks(result.data.collectdata)
        }

      })
  }

  //.........................Rating Books.........................//

  function ratingBooks() {
    axios.get(`${serverUrl}/ratingbooks/${session}`)
      .then((result) => {
       
        if (result.status === 200) {
          setFilterBooks(result.data.collectData)
        }

      })
  }




  return (
    <>
      <div className='books'>
        <div className='left'>
          <h2>LIBRARY</h2>
          <h3>History</h3>
          <ul>
            <li onClick={likeBooks}><Link to="">Favorite</Link></li>
            <li onClick={commentBooks}><Link to="">Commented</Link></li>
            <li onClick={currentReadBooks}><Link to="">Current Read</Link></li>
            <li onClick={ratingBooks}><Link to="">Rating</Link></li>
            <li onClick={searchBooks}><Link to="">Search</Link></li>
          </ul>
          <h3>Library</h3>
          <ul>
            <li onClick={() => handleClick("allbooks")}><Link to="">All Books</Link></li>
            <li onClick={() => handleClick("mostpopular")}><Link to="">Most popular</Link></li>

            <li onClick={() => handleClick("poetry")}><Link to="">Poetry</Link></li>
            <li onClick={() => handleClick("fantasy")}><Link to="">fantasy</Link></li>
            <li onClick={() => handleClick("romance")}><Link to="">Romance</Link></li>
            <li onClick={() => handleClick("")}><Link to="">Flower</Link></li>

          </ul>
        </div>
        <div className='right'>
          <ProductRow endpoint={allBooks} />
          {/* <ProductRow endpoint="poetry" heading="Poetry Books" />
          <ProductRow endpoint="fantasy" heading="Fantasy Books" />  
          <ProductRow endpoint="romance" heading="Romance Books" /> */}

        </div>
      </div>
    </>
  )
}

export default Product