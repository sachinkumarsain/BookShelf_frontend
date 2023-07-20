import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function LoginForm() {
  return (
    <>
      < div className='login'>
        <div className='loginContent'>
          <form>
            <div className='icon'>
              <h2><AccountCircleIcon /></h2>
            </div>
            <div className='form'>
              <h1>Login</h1>
              <input type="text" name='username'
                placeholder='Username'></input><br />
              <input type="password"
                name='password'
                placeholder='Password'></input><br />

              <h2><Link to="/register">Create account</Link><Link to="">Forget password</Link></h2>
            </div>
            <div className='button'>
              <button type='submit' name='login'><Link to="">Login</Link></button>
            </div>


          </form>
        </div>
      </div>
    </>
  )
}

export default LoginForm