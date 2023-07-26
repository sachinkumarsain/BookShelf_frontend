import React, { useState, useEffect } from "react";
import axios from "axios";
// import api_key from "../API/Api";
// import "./Book.css";

function Cart() {
  const [books, setBooks] = useState([]);
  const aagayi = []
  const [bookData, setBooksData] = useState([])

   

  // const api_key = "AIzaSyC70bmYoDKsQw-cXQfH1mYdWk3sI8X2MUA"   sween api key


  // ujwal api key 
  const api_key = "AIzaSyC1D8WIkBINjc6GWc63579oia1BGoNYFcc"



  //  https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=40&orderBy=newest&key=AIzaSyC70bmYoDKsQw-cXQfH1mYdWk3sI8X2MUA


  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=romance&maxResults=40&orderBy=newest&key=${api_key}`)
      .then((result) => {
        // console.log((result.data.items[0].volumeInfo.description.length > 300)
        //   ? result.data.items[0].volumeInfo.description.slice(0, 300) : result.data.items[0].volumeInfo.description)
        // console.log(result.data.items)
        // setBooks(result.data.items.slice(0,20));
         result.data.items.forEach(async(bo)=>{
           aagayi.push({
            title: bo.volumeInfo.title,
            author: bo.volumeInfo.authors[0],
            image: bo.volumeInfo.imageLinks?.thumbnail,
            description: bo.volumeInfo.description, 
          })
        }) 
      });


  }, []);


//  useEffect(()=>{
//   books.forEach((bo) => {
//     setBooksData({
//       title: bo.volumeInfo.title,
//       author: bo.volumeInfo.authors[0],
//       image: bo.volumeInfo.imageLinks?.thumbnail,
//       description: bo.volumeInfo.description, 
//     })

//   })
//  },[books])
 

  
console.log(bookData)
setBooksData(aagayi)

  useEffect(() => { 
    axios.post("http://localhost:8080/cart", { bookData })
      .then((result) => {

        if (result.data === "books available") {
          console.log("aa gya data")
        }
        else {
          console.log("nhi aaya data")
        }
      })
  }, [bookData])

   


  return (

    <div className="book">
      <div className="products" style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center", alignItems: "center" }}>
        {books.map((book, index) => {
          return (
            <div key={index} className="product" style={{ width: "17%", margin: "10px", height: "300px" }}>

              <img style={{ width: "100%", height: "80%" }} alt="bookImg" src={(book.volumeInfo.imageLinks?.thumbnail) ? book.volumeInfo.imageLinks.thumbnail : " "}></img>
              <h2>{book.volumeInfo.authors[0].length > 20 ? book.volumeInfo.authors[0].slice(0, 18) : book.volumeInfo.authors[0]}</h2>
              <p>{(book.volumeInfo.title.length > 25) ? book.volumeInfo.title.slice(0, 25) : book.volumeInfo.title}</p>



              <div className="footers"></div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
