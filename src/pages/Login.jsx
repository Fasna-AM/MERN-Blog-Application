import React, { useContext, useState } from 'react'
import bgimg from '../assets/loginbgimg.jpg'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI } from '../services/allAPIs'
import { tokenAuthContext } from '../context/AuthContextAPI'

const Login = () => {

  const {isAutherised,setIsAutherised} = useContext(tokenAuthContext)
  const [logindetails,setLogindetails] = useState({
    email:"",password:""
  })


  const navigate = useNavigate()

  const mystyle = {
    backgroundImage: `url(${bgimg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }


  const handleLogin = async()=>{
    const {email,password} = logindetails
    if(email && password){
      try{
        const result = await loginAPI(logindetails)
        // console.log(result);
        
        if(result.status==200){
          sessionStorage.setItem("author",JSON.stringify(result.data.author))
          sessionStorage.setItem("token",result.data.token)
          setIsAutherised(true)
          navigate('/blogs')

        }else{
          if(result.response.status==404){
            alert(result.response.data)
          }
        }
        
      }catch(err){
        console.log(err);
      }

    }else{
      alert("Please fill form completelly!!!")
    }
  }
  // console.log(logindetails);
  
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
            <Form.Control type="email" placeholder="UserName"  onChange={(e)=>setLogindetails({...logindetails,email:e.target.value})}/>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputPassword"
            label="Password"
            className="mb-3 w-100 "
          >
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setLogindetails({...logindetails,password:e.target.value})}/>
          </FloatingLabel>
      </div>
      <div className="mt-3 text-center">
        <button onClick={handleLogin}  className="btn btn-dark mb-3">Login</button>
        <p>New User ? Please Click here to <Link to={'/register'}>Register</Link></p>
        <Link to={"/forgot-password"}>Forgot Password</Link>

      </div>
    </div>
  </div>
  )
}

export default Login