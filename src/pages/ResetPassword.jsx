import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import bgimg from '../assets/loginbgimg.jpg'
import { resetPasswordAPI } from '../services/allAPIs'
import { Button, Modal } from 'react-bootstrap'


const ResetPassword = () => {
    const navigate = useNavigate()
    const [password,setPassword] = useState()
    const {token} = useParams()


     // modal
  const [show, setShow] = useState(false);

    const mystyle = {
        backgroundImage: `url(${bgimg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    const handleRestPassword = async()=>{
        if(token){
            try{
                const result = await resetPasswordAPI(token,{password})
                console.log(result);
                
                if(result.status==200){
                    // alert("Your Password is updated, Please login to explore our website!!!")
                    handleShow()
                }
            }catch(err){
                console.log(err);
                
            }

        }else{
            alert("Token Missing, Please Try Again!!!")
        }
    }

     // modal
  const handleClose = () => {
    setShow(false);
    navigate('/login')
  }
  const handleShow = () => setShow(true);

  return (
    <div>
        <div style={mystyle} className='d-flex justify-content-center align-items-center p-2'>
            <div className='bg-white rounded-5 py-5 px-3 shadow d-flex flex-column justify-content-center align-items-center' style={{ width: "500px" }} >
                <h4>Reset Password</h4>

                <input type="password" class="form-control mt-3"  id="floatingInput" placeholder="New Password" onChange={e=>setPassword(e.target.value)}/>
                <button onClick={handleRestPassword}  className="btn btn-dark mt-3">Update Password</button>

            </div>
        </div>
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome, <span className='fw-bolder text-warning'>Author</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Password is updated, Please login to explore our website!!!</Modal.Body>
        <Modal.Footer>
         
          <Button className='px-3 fw-bolder' variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ResetPassword