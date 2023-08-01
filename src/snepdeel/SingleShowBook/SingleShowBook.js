import React, { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { searchContext } from '../First'
import "./ShowSingleBook.css"
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function SingleShowBook() {
    const { searchBookShow } = useContext(searchContext)
    console.log(searchBookShow.image)

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = (e) => {
        e.preventDefault()
        setShowFullDescription(!showFullDescription);
    };


    const description = showFullDescription
        ? searchBookShow.description
        : searchBookShow.description.slice(0, 300) + '...';

    // const trim = () => {
    //      (searchBookShow.description.length > 300)?searchBookShow.description.slice(0, 300)+<button>Read more</button>:searchBookShow.description
    // }
    return (
        <div className='singleShowBook'>
            <div className='left'>
                <img src={searchBookShow.image} alt='images'></img>
            </div>
            <div className='right'>
                <h1>{`${"Title : "} ${searchBookShow.title}`}</h1>
                <h2 className='other1Content'>Author <span>&</span> BookType</h2>
                <div className='other1'>
                    <h4 className='author'>{`${"Author : "}${searchBookShow.author}`}</h4>
                    <h4 className='bookType'>{`${"BookType : "}${searchBookShow.bookType}`}</h4>
                </div>
                <h2 className='other2Content'>publishedDate <span>&</span> publisher</h2>
                <div className='other2'>
                    <h4 className='publishedDate'>{`${"publishedDate : "}${searchBookShow.publishedDate}`}</h4>
                    <h4 className='publisher'>{`${"publisher : "}${searchBookShow.publisher}`}</h4>
                </div>
                <p>{description}</p>
                {searchBookShow.description.length > 300 && (
                    <Link onClick={toggleDescription}>
                        {showFullDescription ? 'Read Less' : 'Read More'}
                    </Link>
                )}

            </div>
        </div>

    )
}

export default SingleShowBook