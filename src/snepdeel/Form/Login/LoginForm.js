import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginForm.css"

function LoginForm() {
  return (
    <>
      < div className='login'>
        <div className='loginContent'>
          <h1>Login</h1>
          <form>
            <label>Username </label>
            <input type="text" name='username'
              placeholder='Username'></input><br />
               <label>Password </label>
            <input type="password"
              name='password'
              placeholder='Password'></input><br />
            <button type='submit' name='login'><Link to="">Login</Link></button>
            <h2><Link to="/register">Create account</Link><Link to="">Forget password</Link></h2>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginForm