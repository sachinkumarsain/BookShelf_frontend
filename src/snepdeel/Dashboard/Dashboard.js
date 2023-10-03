import React, { useState, useEffect } from 'react'
import axios from "axios"
import { searchContext } from '../First';
import { useContext } from 'react';
import serverUrl from '../Url';

function Dashboard() {

  const { session, totalBooks } = useContext(searchContext)
  // let session = localStorage.getItem("session");
  const [dashboard, setDashboard] = useState([])
  const [filterBooks, setFilterBooks] = useState([])

  // useEffect(()=>{
  //   axios.get (`${serverUrl}/likebooks/${session}`)
  //   .then((result)=>{
  //     console.log(result.data)
  //     setDashboard(result.data)
  //   })

  // },[session])

  //.............likeBooks.....................//

  function likeBooks() {
    // console.log("clickLiked")
    axios.get(`${serverUrl}/likebooks/${session}`)
      .then((result) => {
        setDashboard(result.data)
      })

  }

  console.log(dashboard)


  return (
    <>
      <div className='dashboard'>
        <div className='leftSide'>
          <h1>{dashboard.username}</h1>
          <ul>
            <li >Current Books</li>
            <li onClick={likeBooks}>Like Books</li>
            <li>comment Books</li>
            <li>searchBook</li>
          </ul>

        </div>
        <div className='rightSide'>
          {
            dashboard.map((book)=>{
              return <div className='dashboardBooks'>
                <h1>{book.title}</h1> 
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Dashboard