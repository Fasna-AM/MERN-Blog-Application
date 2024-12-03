import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { changePwdAPI } from '../services/allAPIs'

const PasswordChange = () => {

    const [changePasswordDetails, setChangePasswordDetails] = useState({
        currentPwd: "", newPwd: ""
    })
    const [authorDetails,setAuthorDetails]=useState({})
    useEffect(()=>{
        if(sessionStorage.getItem("author")){
            setAuthorDetails(JSON.parse(sessionStorage.getItem("author")))
        }
    },[])

    const handleChangePassword = async () => {
        const { currentPwd, newPwd } = changePasswordDetails
        if (currentPwd && newPwd) {
            const id = authorDetails._id 
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                try{
                    const result = await changePwdAPI(id,changePasswordDetails.currentPwd,changePasswordDetails.newPwd,reqHeader)
                    if(result.status==200){
                        alert("Your password changed successfully!!!")
                        sessionStorage.setItem("author",JSON.stringify(result.data))
                        setChangePasswordDetails({currentPwd: "", newPwd: ""})
                    }else if(result.status==404){
                        alert("Invalid Current Password!!!")
                        setChangePasswordDetails({currentPwd: "", newPwd: ""})
                    }

                }catch(err){
                    console.log((err));
                    
                }
            }
        } else {
            alert("Please Fill the form completelly!!!")
        }
    }
    // console.log(changePasswordDetails);
    
    return (
        <div className=' d-flex flex-column text-center ' style={{ alignItems: "center" }} >
            <h6>
                Change Password
            </h6>

            <div className='w-50 my-4'>
                <FloatingLabel
                    controlId="floatingCurrentPwd"
                    label="Current  Password"
                    className="mb-3 "
                >
                    <Form.Control type="password" placeholder="Current Password" value={changePasswordDetails.currentPwd} onChange={e => setChangePasswordDetails({ ...changePasswordDetails, currentPwd: e.target.value })} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingNewPwd"
                    label="New Password"
                    className="mb-3"
                >
                    <Form.Control type="password" placeholder="New Password" value={changePasswordDetails.newPwd} onChange={e => setChangePasswordDetails({ ...changePasswordDetails, newPwd: e.target.value })} />
                </FloatingLabel>
            </div>

            <div>
                <button onClick={handleChangePassword} className="btn btn-dark">Change Password</button>
            </div>
        </div>
    )
}

export default PasswordChange