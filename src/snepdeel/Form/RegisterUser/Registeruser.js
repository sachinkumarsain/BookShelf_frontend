import React from 'react'
import { Link } from 'react-router-dom'
import "./Registeruser.css"


function Registeruser() {

  return (
    <div className='register'>
    <div className='registerContent'>
    <h1>Register</h1>
    <form method='post' action="http://localhost:8080/register">
        <label>Name </label>
        <input type='text' name="name" placeholder='Name'/><br/>
        <label>Email </label>
        <input type='email' name="email" placeholder='Email'/><br/>
        <label>Phone </label>
        <input type='text' name="phone" placeholder='Phone'/><br/>
        <label>Username </label>
        <input type='text' name="username" placeholder='Username'/><br/>
        <label>Password </label>
        <input type='password' name="password" placeholder='Password'/><br/>
        <button type='submit' name="register"> <link to="/sign">Register</link>  </button>
        <h2><Link to="/sign">Login</Link> </h2>
    </form>
    </div>
</div>
  )
}

export default Registeruser