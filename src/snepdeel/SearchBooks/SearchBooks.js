import React from 'react'
import { useContext } from 'react'
import { searchContext } from '../First'

function SearchBooks() {
    const { searchBooksdata } = useContext(searchContext)
    console.log(searchBooksdata)
    return (
        <>
            <div className='searchBooks' style={{backgroundColor:"orange"}}>
                {
                    searchBooksdata.map((book) => {
                        return <div className='searchBook'>
                                <h1>{book.title}</h1>
                                <img src={book.image}></img>
                        </div>

                    })
                }
                <h1>jfbdfb</h1>
            </div>
        </>
    )
}

export default SearchBooks