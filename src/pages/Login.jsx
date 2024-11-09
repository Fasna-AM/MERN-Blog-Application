import React from 'react'
import bgimg from '../assets/loginbgimg.jpg'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {


  const navigate = useNavigate()

  const mystyle = {
    backgroundImage: `url(${bgimg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }


  const handleLogin = ()=>{
    navigate('/blogs')
  }

  return (
    <div style={mystyle} className='d-flex justify-content-center align-items-center p-2' >
    <div className='bg-white rounded-5 py-5 px-3 shadow'style={{width:"500px"}} >
      <h4>Sign In to your Account</h4>
      <div className='d-flex flex-column gap-4 justify-content-center align-items-center mt-5 px-3'>
       
          
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email Address"
            className="mb-3 w-100 "
          >
            <Form.Control type="email" placeholder="UserName" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputPassword"
            label="Password"
            className="mb-3 w-100 "
          >
            <Form.Control type="password" placeholder="UserName" />
          </FloatingLabel>
        
      </div>
      <div className="mt-3 text-center">
        <button onClick={handleLogin}  className="btn btn-dark mb-3">Login</button>
        <p>New User ? Please Click here to <Link to={'/register'}>Register</Link></p>
      </div>
    </div>
  </div>
  )
}

export default Login