
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

function ProductRow(props) {

    const { totalBooks, setSearchBookShow, favoriteBooks, setFavoriteBooks } = useContext(searchContext)

    const [books, setBooks] = useState([])
    const [confirmLike, setConfrimLike] = useState(false)
    // const[countFavoriteBooks,setCountFavoriteBooks]=useState([])
    const nevigate = useNavigate()


    useEffect(() => {
        const tnp = totalBooks.filter((mpb) => mpb.bookType === props.endpoint);
        // console.log(tnp)
        setBooks(tnp)
        //  let api =  AIzaSyC1D8WIkBINjc6GWc63579oia1BGoNYFcc

    }, [totalBooks])
    // console.log(books)
    // console.log(totalBooks)


    function handleShowMore(e, data) {
        e.preventDefault()
        setSearchBookShow(data)
        nevigate("/SingleShowBook")
        // console.log(data)
    }

    function handleLike(e, data) {
        e.preventDefault()
        if(favoriteBooks.length!==0){
          favoriteBooks.map((book)=>{
            if(book.id===data.id){
               return setFavoriteBooks([...favoriteBooks , data])
            }
          })
        }
        else{
            setFavoriteBooks(data)
        }
       
        setConfrimLike(true)   

    }
    // function likeConfimation(data,index){
    //     if(index===index){
    //         setConfrimLike(true)
    //     }
    // }
    // function likeConfimation(id) {
    //     let exit = false;
    //     books.forEach((data) => {
    //         if (data.id === id) {
    //             exit = true
    //             console.log(data)
    //         }
    //         return exit
    //     })
        
    // }




    return (
        <div className='bookRow'>
            <h1>{props.heading}</h1>
            <div className='book'>

                {
                    books.map((data, index) => {
                        return <Link className='singleBookAnchor' to="">
                            <div className='singleBook'>
                                <img src={data.image} alt='images'></img>

                                <div className='openHover'>
                                    <h2>{data.title.length > 20 ? data.title.slice(0, 20) + "..." : data.title}</h2>
                                    <p>{data.author}</p>
                                    <Link onClick={(e) => handleShowMore(e, data)} to="">Show More</Link>

                                </div>

                                {/* {
                                    (likeConfimation(data.id))
                                        ?
                                        (<Link onClick={(e) => handleLike(e, data)} className='likeIcon' to="">
                                            <FavoriteIcon />
                                        </Link>)
                                        :
                                        (<Link onClick={(e) => handleLike(e, data)} className='likeIcon' to="">
                                            <FavoriteBorderIcon />
                                        </Link>)
                                } */}
                                <Link onClick={(e) => handleLike(e, data)} className='likeIcon' to="">
                                            <FavoriteBorderIcon />
                                        </Link>



                                {/* <h3><span><RemoveRedEyeOutlinedIcon /></span><span><FavoriteBorderIcon /></span></h3> */}
                            </div>

                        </Link>

                    })
                }
            </div>
        </div>

    )
}

export default ProductRow