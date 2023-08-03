import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"
import requests from '../Home/requests'
import ProductRow from './ProductRow'

function Product() {
const[totalBooks , setTotalBooks] = useState([])
 useEffect(()=>{
  
 },[])

  return (
    <>
      <div className='books'>
        <div className='left'>
          <h2>LIBRARY</h2>
          <ul>
            <li><Link to="">Most popular</Link></li>
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