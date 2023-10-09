
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// import ".././Home.css"
import Product from './Product';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import book from "../../../book.jpg"
// import "./Row.css"
import "./Product.css"
import { useContext } from 'react';
import { searchContext } from '../First';
import { useNavigate } from 'react-router-dom';
import serverUrl from '../Url';

function ProductRow(props) {

    const { totalBooks, setSearchBookShow,filterBooks  } = useContext(searchContext)
 
    const nevigate = useNavigate()
    const session = localStorage.getItem("session")
    
   
    console.log(filterBooks)

//............................current read book.................//


    function handleShowMore(e, data) {
        e.preventDefault()
        let currentBookId = data._id;
        
        axios.patch(`${serverUrl}/currentread/${session}`,{currentBookId})
        .then((result)=>{
            console.log(result.data)
            if(result.status===200){
                setSearchBookShow(data)
                nevigate("/SingleShowBook")    
            }
        
        })
      
       
    }


 //.........................Liked Books .....................//
 
 
    function handleLike(e, data) {
        e.preventDefault() 
        let likeBookId = data;
        axios.patch(`${serverUrl}/product/${session}`,{likeBookId})
        .then((result)=>{
            console.log(result.data)
        })
    }
     


    return (
        <div className='bookRow'>
         
            <div className='book'>

                {
                    filterBooks.map((data, index) => {
                        return <Link className='singleBookAnchor' to="">
                            <div className='singleBook'>
                                 <img src={data.image} alt='images'></img>

                                <div className='openHover'>
                                    <h2>{data.title.length > 20 ? data.title.slice(0, 20) + "..." : data.title}</h2>
                                    <p>{data.author}</p>
                                    <Link onClick={(e) => handleShowMore(e, data)} to="">Show More</Link>

                                </div>

                               
                                <Link onClick={(e) => handleLike(e, data._id)} className='likeIcon' to="">
                                            <FavoriteBorderIcon />
                                        </Link>



                               
                            </div>

                        </Link>

                    })
                }
            </div>
        </div>

    )
            }

        
        export default ProductRow