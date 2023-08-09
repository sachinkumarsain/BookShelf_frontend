
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// import ".././Home.css"
import Product from './Product';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import book from "../../../book.jpg"
// import "./Row.css"
import "./Product.css"
import { useContext } from 'react';
import { searchContext } from '../First';
function ProductRow(props) {
    const { totalBooks } = useContext(searchContext)
    const [books, setBooks] = useState([])
    useEffect(() => {
        const tnp = totalBooks.filter((mpb) => mpb.bookType === props.endpoint);
        console.log(tnp)
        setBooks(tnp)
        //  let api =  AIzaSyC1D8WIkBINjc6GWc63579oia1BGoNYFcc

    }, [totalBooks])
    console.log(books)
    console.log(totalBooks)
    // function titleEditer(data) {
    //     return (data.length > 20) ? data.slice(0, 20) + "...." : data
    // }


    // function color() {
    //     let colorPart = ["a","b", "c","d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    //     let count = "#";

    //     for (let i = 0; i <= 6; i++) {
    //      count += colorPart[Math.floor(Math.random() * colorPart.length)]

    //     }
    //     return count

    // }

    // let colors = color()
    // console.log(colors)
    function handleShowMore(e){
        e.preventDefault()
        
    }


    return (
        <div className='bookRow'>
            <h1>{props.heading}</h1>
            <div className='book'>

                {
                    books.map((data, index) => {
                        console.log("loop")
                        let colorPart = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
                        let count = "#";

                        for (let i = 0; i <= 6; i++) {

                            count += colorPart[Math.floor(Math.random() * colorPart.length)]

                        }
                        return <Link className='singleBookAnchor' to="">
                            <div className='singleBook' style={{ background: `linear-gradient(to top, #f4f4f3,${count})` }} key={index}>
                                {/* <img src={(data?.volumeInfo?.imageLinks?.thumbnail) ? data.volumeInfo.imageLinks.thumbnail : ""} alt='chal' ></img> */}
                                <img src={data.image} alt='images'></img>
                                {/* <h1>{data.title}</h1> */}
                                {/* <h2>{}</h2> */}
                                <div className='openHover'>
                                    <h2>{data.title}</h2>
                                    <p>{data.bookType}</p>
                                    <Link onClick={handleShowMore} to="">Show More</Link>
                                </div>

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