import React from 'react'
// import { Link } from 'react-router-dom'
import "./Login.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSubmit (e){
    e.preventDefault()
    // let session = localStorage.getItem("session")
    axios.post("http://localhost:8080/login",{username,password})
    .then((result)=>{
      if(result.status===200){
        localStorage.setItem("session", result.data)
        console.log(" maja aa gya")
        console.log(result.data)
         navigate("/home")
         
        
      } else {
        console.log(err)
      }
    })
   

  }
  return (
    <>
      < div className='login'>
        <div className='loginContent'>
          <form  type="post" action={handleSubmit} >
            {/* <div className='icon'> */}
              <h2><AccountCircleIcon /></h2>
            {/* </div> */}
            {/* <div className='form'> */}
              <h1>Login</h1>
              <input type="text" name='username'
              value={username} onChange={e => {setUsername(e.target.value)}}
                placeholder='Username'></input><br />

              <input type="password" name='password'
                value={password}
                onChange={e => {setPassword(e.target.value)}}
                placeholder='Password'></input><br />

            {/* </div> */}
           
              <button type='submit' name='login'>Login </button>
            


          </form>
        </div>
      </div>
    </>
  )
}
{/* <h2><Link to="/register">Create account</Link><Link to="">Forget password</Link></h2> */}

export default LoginForm