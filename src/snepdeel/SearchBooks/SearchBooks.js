import React from 'react'
import { useContext } from 'react'
import { searchContext } from '../First'

function SearchBooks() {
    const {searchBooksdata}=useContext(searchContext)
    console.log(searchBooksdata)
  return (
    <div>SearchBooks</div>
  )
}

export default SearchBooks