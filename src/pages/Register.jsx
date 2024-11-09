import React from 'react'
import bgimg from '../assets/registerbgimg.avif'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Register = () => {

  const mystyle = {
    backgroundImage: `url(${bgimg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"



  }
  return (
    <div style={mystyle} className='d-flex justify-content-center align-items-center p-2' >
      <div className='bg-white rounded-5 py-5 px-3 shadow'style={{width:"500px"}} >
        <h4>Sign Up to your Account</h4>
        <div className='d-flex flex-column gap-4 justify-content-center align-items-center mt-5 px-3'>
         
            <FloatingLabel
              controlId="floatingInputNserName"
              label="User Name"
              className="mb-3 w-100 "
            >
              <Form.Control type="text" placeholder="UserName" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputEmail"
              label="Email Address"
              className="mb-3 w-100 "
            >
              <Form.Control type="email" placeholder="Email Address" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputPassword"
              label="Password"
              className="mb-3 w-100 "
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          
        </div>
        <div className="mt-3 text-center">
          <button  className="btn btn-dark mb-3">Register</button>
          <p>Existing User ? Please Click here to <Link to={'/login'}>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register