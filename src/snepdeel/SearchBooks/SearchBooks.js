import React from 'react'
import { useContext } from 'react'
import { searchContext } from '../First'
import "./SearchBooks.css"

function SearchBooks() {
    const { searchBooksdata } = useContext(searchContext)
    console.log(searchBooksdata)
    return (
        <>
            <div className='searchBooks'>
                {
                    searchBooksdata.map((book) => {
                        return <div className='searchBook'>
                            <img src={book.image}></img>
                            <p>{book.bookType.slice(0, 1).toUpperCase() + book.bookType.slice(1)}</p>
                            <h1>{(book.title.length > 25) ? book.title.slice(0, 30) + "..." : book.title}</h1>
                            <h3>{`${"By - "}${book.author}`}</h3>



                        </div>
                    })
                }
            </div>
        </>
    )
}

export default SearchBooks