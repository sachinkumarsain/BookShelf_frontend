import React from 'react'
import { useNavigate } from 'react-router-dom'
import { searchContext } from '../First'

function SingleShowBook() {
    const{searchBookShow} = useNavigate(searchContext)
    return (
        <div className='singleShowBook'>
        
               {
                searchBookShow.map((book)=>{
                    return <div className='bookShow'>
                        <div className='left'>
                            <img src={book.image} alt='images'></img>
                        </div>
                        <div className='right'>
                            <h1>{book.title}</h1>
                            <p>{book.description}</p>  
                        </div>
                        
                    </div>

                })
               }
         
        </div>
    )
}

export default SingleShowBook