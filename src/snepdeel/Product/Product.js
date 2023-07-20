import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"

function Product() {
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

          </ul>
        </div>
        <div className='right'>

        </div>
      </div>
    </>
  )
}

export default Product