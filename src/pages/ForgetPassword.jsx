import React, { useState } from 'react'
import bgimg from '../assets/loginbgimg.jpg'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import { forgetpasswordAPI } from '../services/allAPIs'


const ForgetPassword = () => {

    const [email,setEmail] = useState()

    const mystyle = {
        backgroundImage: `url(${bgimg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    const handleForgetPassword =async()=>{
        if(email){
            try{
                const result = await forgetpasswordAPI({email})
                // console.log(result);
                
                if(result.status==200){
                    alert("Password reset link send succeesfully on your gmail account")
                }else{
                    alert(result.response)
                }

            }catch(err){
                console.log(err);
                
            }

        }else{
            alert("Please Provide Email!!!")
        }
    }

    return (
        <div style={mystyle} className='d-flex justify-content-center align-items-center p-2'>
            <div className='bg-white rounded-5 py-5 px-3 shadow d-flex flex-column justify-content-center align-items-center' style={{ width: "500px" }} >
                <h4>Forget Password</h4>

                <input type="email" class="form-control mt-3"  id="floatingInput" placeholder="Email address" onChange={e=>setEmail(e.target.value)}/>
                <button onClick={handleForgetPassword}   className="btn btn-dark mt-3">Reset Password</button>

            </div>
        </div>
    )
}

export default ForgetPassword