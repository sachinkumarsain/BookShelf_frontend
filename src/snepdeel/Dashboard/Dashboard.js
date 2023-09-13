import React, { useState , useEffect} from 'react'
import axios from "axios"

function Dashboard() {
  let session = localStorage.getItem("session");
  const [dashboard , setDashboard]=useState({})

  useEffect(()=>{
    axios.get (`http://localhost:8080+${session}`)
    .then((result)=>{
      console.log(result.data)
      setDashboard(result.data)
    })
    

  },[])

  return (
    <>
    <div className='dashboard'>
        <div className='leftSide'>
          <h1>{dashboard.username}</h1>
         <ul>
         <li>Current Books</li>
          <li>Like Books</li> 
          <li>comment Books</li>
         </ul>

        </div>
        <div className='rightSide'>

        </div>
    </div>
    </>
  )
}

export default Dashboard