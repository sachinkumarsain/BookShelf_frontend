import React from 'react'
import { Link } from 'react-router-dom'
import "./RegisterForm.css"

function Ragister() {
    return (
        <div className='register'>
            <div className='registerContent'>
            <h1>Register</h1>
            <form>
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
                <button type='submit' name="register"><Link to="">Register</Link></button>
                <h2><Link to="/sign">Login</Link><Link to=""></Link></h2>
            </form>
            </div>
        </div>
    )
}
     
export default Ragister