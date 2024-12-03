import React, { useEffect, useState } from 'react'
import bgimg from '../assets/registerbgimg.avif'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../services/allAPIs'
import Swal from 'sweetalert2'


const Register = () => {

  const navigate = useNavigate()

  const [registerDetails,setRegisterDetails] = useState({
    username:"", email:"", password:"",joinDate:""
  })
  const [userdetails,setUserdetails] = useState({})
  
  // modal
  const [show, setShow] = useState(false);

 
  useEffect(()=>{
    const today = new Date().toDateString()
    setRegisterDetails({...registerDetails,joinDate:today})

  },[])

  // modal
  const handleClose = () => {
    setShow(false);
    navigate('/login')
  }
  const handleShow = () => setShow(true);

  

  const mystyle = {
    backgroundImage: `url(${bgimg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
// console.log(registerDetails);

  const handleRegister = async()=>{
    const { username, email, password,joinDate } = registerDetails
    if(username && email && password){
      try{
        const result = await registerAPI(registerDetails)
        if(result.status==200){
          // alert(`Welcome ${result.data?.username}, Please login to explore our website!!!`)
          setUserdetails(result.data)
          handleShow()
          
          
          setRegisterDetails({userName:"",email:"",password:""})

        }else{
          if(result.response.status==406){
            alert(result.response.data)
            setRegisterDetails({username:"", email:"", password:""})
          }
        }

      }catch(err){
        console.log(err);
        
      }

    }else{
      alert("Please Fill the form completelly")
    }
  }
  // console.log(registerDetails);
  
  return (
    <div style={mystyle} className='d-flex justify-content-center align-items-center p-2' >
      <div className='bg-white rounded-5 py-5 px-3 shadow'style={{width:"500px"}} >
        <h4>Sign Up to your Account</h4>
        <div className='d-flex flex-column gap-4 justify-content-center align-items-center mt-5 px-3'>
         
            <FloatingLabel
              controlId="floatingInputUserName"
              label="User Name"
              className="mb-3 w-100 "
            >
              <Form.Control type="text" placeholder="UserName" value={registerDetails.username} onChange={e=>setRegisterDetails({...registerDetails,username:e.target.value})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputEmail"
              label="Email Address"
              className="mb-3 w-100 "
            >
              <Form.Control type="email" placeholder="Email Address"  value={registerDetails.email} onChange={e=>setRegisterDetails({...registerDetails,email:e.target.value})}/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputPassword"
              label="Password"
              className="mb-3 w-100 "
            >
              <Form.Control type="password" placeholder="Password" value={registerDetails.password} onChange={e=>setRegisterDetails({...registerDetails,password:e.target.value})}/>
            </FloatingLabel>
          
        </div>
        <div className="mt-3 text-center">
          <button onClick={handleRegister}  className="btn btn-dark mb-3">Register</button>
          <p>Existing User ? Please Click here to <Link to={'/login'}>Login</Link></p>
        </div>
      </div>
      {/* modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome, <span className='fw-bolder text-warning'>{userdetails?.username}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login to explore our website!!!</Modal.Body>
        <Modal.Footer>
         
          <Button className='px-3 fw-bolder' variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Register